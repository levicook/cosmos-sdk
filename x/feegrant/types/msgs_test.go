package types_test

import (
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/feegrant/types"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func TestMsgGrantFeeAllowance(t *testing.T) {
	cdc := codec.NewProtoCodec(codectypes.NewInterfaceRegistry())
	addr, _ := sdk.AccAddressFromBech32("cosmos1aeuqja06474dfrj7uqsvukm6rael982kk89mqr")
	addr2, _ := sdk.AccAddressFromBech32("cosmos1nph3cfzk6trsmfxkeu943nvach5qw4vwstnvkl")
	atom := sdk.NewCoins(sdk.NewInt64Coin("atom", 555))
	basic := &types.BasicAllowance{
		SpendLimit: atom,
		Expiration: types.ExpiresAtTime(time.Now().Add(3 * time.Hour)),
	}
	cases := map[string]struct {
		grantee sdk.AccAddress
		granter sdk.AccAddress
		grant 	*types.BasicAllowance
		valid 	bool
	}{
		"valid":{
			grantee: addr,
			granter: addr2,
			grant: basic,
			valid: true,
		},
		"no grantee": {
			granter: addr2,
			grantee: sdk.AccAddress{},
			grant: basic,
			valid: false,
		},
		"no granter": {
			granter: sdk.AccAddress{},
			grantee: addr,
			grant: basic,
			valid: false,
		},
		"grantee == granter":{
			grantee: addr,
			granter: addr,
			grant: basic,
			valid: false,
		},
	}

	for _,tc := range cases {
		msg, err := types.NewMsgGrantAllowance(tc.grant, tc.granter, tc.grantee)
		require.NoError(t, err)
		err = msg.ValidateBasic()

		if tc.valid {
			require.NoError(t, err)

			addrSlice := msg.GetSigners()
			require.Equal(t, tc.granter.String(), addrSlice[0].String())

			allowance, err := msg.GetFeeAllowanceI()
			require.NoError(t, err)
			require.Equal(t, tc.grant, allowance)

			err = msg.UnpackInterfaces(cdc)
			require.NoError(t, err)
		} else {
			require.Error(t, err)
		}
	}
}

func TestMsgRevokeFeeAllowance(t *testing.T) {
	addr, _ := sdk.AccAddressFromBech32("cosmos1aeuqja06474dfrj7uqsvukm6rael982kk89mqr")
	addr2, _ := sdk.AccAddressFromBech32("cosmos1nph3cfzk6trsmfxkeu943nvach5qw4vwstnvkl")
	atom := sdk.NewCoins(sdk.NewInt64Coin("atom", 555))
	basic := &types.BasicAllowance{
		SpendLimit: atom,
		Expiration: types.ExpiresAtTime(time.Now().Add(3 * time.Hour)),
	}
	cases := map[string]struct {
		grantee sdk.AccAddress
		granter sdk.AccAddress
		grant 	*types.BasicAllowance
		valid 	bool
	}{
		"valid":{
			grantee: addr,
			granter: addr2,
			grant: basic,
			valid: true,
		},
		"no grantee": {
			granter: addr2,
			grantee: sdk.AccAddress{},
			grant: basic,
			valid: false,
		},
		"no granter": {
			granter: sdk.AccAddress{},
			grantee: addr,
			grant: basic,
			valid: false,
		},
		"grantee == granter":{
			grantee: addr,
			granter: addr,
			grant: basic,
			valid: false,
		},
	}

	for _,tc := range cases {
		msg := types.NewMsgRevokeAllowance(tc.granter, tc.grantee)
		err := msg.ValidateBasic()
		if tc.valid {
			require.NoError(t, err)
			addrSlice := msg.GetSigners()
			require.Equal(t, tc.granter.String(), addrSlice[0].String())
		} else {
			require.Error(t, err)
		}
	}
}
