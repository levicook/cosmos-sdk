package types

import (
	"time"

	"github.com/gogo/protobuf/proto"

	"github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	_ types.UnpackInterfacesMessage = &Grant{}
)

// NewGrant creates a new FeeAllowanceGrant.
//nolint:interfacer
func NewGrant(granter, grantee sdk.AccAddress, feeAllowance FeeAllowanceI) (Grant, error) {
	msg, ok := feeAllowance.(proto.Message)
	if !ok {
		return Grant{}, sdkerrors.Wrapf(sdkerrors.ErrPackAny, "cannot proto marshal %T", feeAllowance)
	}

	any, err := types.NewAnyWithValue(msg)
	if err != nil {
		return Grant{}, err
	}

	return Grant{
		Granter:   granter.String(),
		Grantee:   grantee.String(),
		Allowance: any,
	}, nil
}

// ValidateBasic performs basic validation on
// FeeAllowanceGrant
func (a Grant) ValidateBasic() error {
	if a.Granter == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "missing granter address")
	}
	if a.Grantee == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "missing grantee address")
	}
	if a.Grantee == a.Granter {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "cannot self-grant fee authorization")
	}

	f, err := a.GetGrant()
	if err != nil {
		return err
	}

	return f.ValidateBasic()
}

// GetGrant unpacks allowance
func (a Grant) GetGrant() (FeeAllowanceI, error) {
	allowance, ok := a.Allowance.GetCachedValue().(FeeAllowanceI)
	if !ok {
		return nil, sdkerrors.Wrap(ErrNoAllowance, "failed to get allowance")
	}

	return allowance, nil
}

// UnpackInterfaces implements UnpackInterfacesMessage.UnpackInterfaces
func (a Grant) UnpackInterfaces(unpacker types.AnyUnpacker) error {
	var allowance FeeAllowanceI
	return unpacker.UnpackAny(a.Allowance, &allowance)
}

// PrepareForExport will make all needed changes to the allowance to prepare to be
// re-imported at height 0, and return a copy of this grant.
func (a Grant) PrepareForExport(dumpTime time.Time, dumpHeight int64) Grant {
	f, err := a.GetGrant()
	if err != nil {
		return Grant{}
	}

	feegrant := f.PrepareForExport(dumpTime, dumpHeight)
	if feegrant == nil {
		return Grant{}
	}

	granter, err := sdk.AccAddressFromBech32(a.Granter)
	if err != nil {
		return Grant{}
	}

	grantee, err := sdk.AccAddressFromBech32(a.Grantee)
	if err != nil {
		return Grant{}
	}

	grant, err := NewGrant(granter, grantee, feegrant)
	if err != nil {
		return Grant{}
	}

	return grant
}
