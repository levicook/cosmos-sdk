(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{647:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",{attrs:{synopsis:""}},[a("code",[e._v("Transactions")]),e._v(" are objects created by end-users to trigger state changes in the application.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK Application")])],1)]),e._v(" "),a("h2",{attrs:{id:"transactions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions-2"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",[e._v("Transactions are comprised of metadata held in "),a("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("contexts")]),e._v(" and "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[a("code",[e._v("Msg")]),e._v("s")]),e._v(" that trigger state changes within a module through the module's "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[a("code",[e._v("Msg")]),e._v(" service")]),e._v(".")],1),e._v(" "),a("p",[e._v("When users want to interact with an application and make state changes (e.g. sending coins), they create transactions. Each of a transaction's "),a("code",[e._v("Msg")]),e._v("s must be signed using the private key associated with the appropriate account(s), before the transaction is broadcasted to the network. A transaction must then be included in a block, validated, and approved by the network through the consensus process. To read more about the lifecycle of a transaction, click "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"type-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-definition"}},[e._v("#")]),e._v(" Type Definition")]),e._v(" "),a("p",[e._v("Transaction objects are SDK types that implement the "),a("code",[e._v("Tx")]),e._v(" interface")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIFR4IGRlZmluZXMgdGhlIGludGVyZmFjZSBhIHRyYW5zYWN0aW9uIG11c3QgZnVsZmlsbC4KCVR4IGludGVyZmFjZSB7CgkJLy8gR2V0cyB0aGUgYWxsIHRoZSB0cmFuc2FjdGlvbidzIG1lc3NhZ2VzLgoJCUdldE1zZ3MoKSBbXU1zZwoKCQkvLyBWYWxpZGF0ZUJhc2ljIGRvZXMgYSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0IHZhbGlkYXRpb24gY2hlY2sgdGhhdCBkb2Vzbid0CgkJLy8gcmVxdWlyZSBhY2Nlc3MgdG8gYW55IG90aGVyIGluZm9ybWF0aW9uLgoJCVZhbGlkYXRlQmFzaWMoKSBlcnJvcgoJfQ=="}})],1),e._v(" "),a("p",[e._v("It contains the following methods:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("GetMsgs:")]),e._v(" unwraps the transaction and returns a list of its "),a("code",[e._v("Msg")]),e._v("s - one transaction may have one or multiple "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[a("code",[e._v("Msg")]),e._v("s")]),e._v(", which are defined by module developers.")],1),e._v(" "),a("li",[a("strong",[e._v("ValidateBasic:")]),e._v(" includes lightweight, "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#types-of-checks"}},[a("em",[e._v("stateless")])]),e._v(" checks used by ABCI messages "),a("RouterLink",{attrs:{to:"/core/baseapp.html#checktx"}},[a("code",[e._v("CheckTx")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" to make sure transactions are not invalid. For example, the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module's "),a("code",[e._v("StdTx")]),e._v(" "),a("code",[e._v("ValidateBasic")]),e._v(" function checks that its transactions are signed by the correct number of signers and that the fees do not exceed what the user's maximum. Note that this function is to be distinct from the "),a("code",[e._v("ValidateBasic")]),e._v(" functions for "),a("code",[e._v("Msg")]),e._v("s, which perform basic validity checks on messages only. For example, when "),a("RouterLink",{attrs:{to:"/core/baseapp.html#runtx"}},[a("code",[e._v("runTx")])]),e._v(" is checking a transaction created from the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth/spec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module, it first runs "),a("code",[e._v("ValidateBasic")]),e._v(" on each message, then runs the "),a("code",[e._v("auth")]),e._v(" module AnteHandler which calls "),a("code",[e._v("ValidateBasic")]),e._v(" for the transaction itself.")],1)]),e._v(" "),a("p",[e._v("As a developer, you should rarely manipulate "),a("code",[e._v("Tx")]),e._v(" directly, as "),a("code",[e._v("Tx")]),e._v(" is really an intermediate type used for transaction generation. Instead, developers should prefer the "),a("code",[e._v("TxBuilder")]),e._v(" interface, which you can learn more about "),a("a",{attrs:{href:"#transaction-generation"}},[e._v("below")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"signing-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-transactions"}},[e._v("#")]),e._v(" Signing Transactions")]),e._v(" "),a("p",[e._v("Every message in a transaction must be signed by the addresses specified by its "),a("code",[e._v("GetSigners")]),e._v(". The SDK currently allows signing transactions in two different ways.")]),e._v(" "),a("h4",{attrs:{id:"sign-mode-direct-preferred"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-direct-preferred"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" (preferred)")]),e._v(" "),a("p",[e._v("The most used implementation of the "),a("code",[e._v("Tx")]),e._v(" interface is the Protobuf "),a("code",[e._v("Tx")]),e._v(" message, which is used in "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVHggaXMgdGhlIHN0YW5kYXJkIHR5cGUgdXNlZCBmb3IgYnJvYWRjYXN0aW5nIHRyYW5zYWN0aW9ucy4KbWVzc2FnZSBUeCB7CiAgLy8gYm9keSBpcyB0aGUgcHJvY2Vzc2FibGUgY29udGVudCBvZiB0aGUgdHJhbnNhY3Rpb24KICBUeEJvZHkgYm9keSA9IDE7CgogIC8vIGF1dGhfaW5mbyBpcyB0aGUgYXV0aG9yaXphdGlvbiByZWxhdGVkIGNvbnRlbnQgb2YgdGhlIHRyYW5zYWN0aW9uLAogIC8vIHNwZWNpZmljYWxseSBzaWduZXJzLCBzaWduZXIgbW9kZXMgYW5kIGZlZQogIEF1dGhJbmZvIGF1dGhfaW5mbyA9IDI7CgogIC8vIHNpZ25hdHVyZXMgaXMgYSBsaXN0IG9mIHNpZ25hdHVyZXMgdGhhdCBtYXRjaGVzIHRoZSBsZW5ndGggYW5kIG9yZGVyIG9mCiAgLy8gQXV0aEluZm8ncyBzaWduZXJfaW5mb3MgdG8gYWxsb3cgY29ubmVjdGluZyBzaWduYXR1cmUgbWV0YSBpbmZvcm1hdGlvbiBsaWtlCiAgLy8gcHVibGljIGtleSBhbmQgc2lnbmluZyBtb2RlIGJ5IHBvc2l0aW9uLgogIHJlcGVhdGVkIGJ5dGVzIHNpZ25hdHVyZXMgPSAzOwp9"}})],1),e._v(" "),a("p",[e._v("Because Protobuf serialization is not deterministic, the SDK uses an additional "),a("code",[e._v("TxRaw")]),e._v(" type to denote the pinned bytes over which a transaction is signed. Any user can generate a valid "),a("code",[e._v("body")]),e._v(" and "),a("code",[e._v("auth_info")]),e._v(" for a transaction, and serialize these two messages using Protobuf. "),a("code",[e._v("TxRaw")]),e._v(" then pins the user's exact binary representation of "),a("code",[e._v("body")]),e._v(" and "),a("code",[e._v("auth_info")]),e._v(", called respectively "),a("code",[e._v("body_bytes")]),e._v(" and "),a("code",[e._v("auth_info_bytes")]),e._v(". The document that is signed by all signers of the transaction is "),a("code",[e._v("SignDoc")]),e._v(" (deterministically serialized using "),a("RouterLink",{attrs:{to:"/architecture/adr-027-deterministic-protobuf-serialization.html"}},[e._v("ADR-027")]),e._v("):")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2lnbkRvYyBpcyB0aGUgdHlwZSB1c2VkIGZvciBnZW5lcmF0aW5nIHNpZ24gYnl0ZXMgZm9yIFNJR05fTU9ERV9ESVJFQ1QuCm1lc3NhZ2UgU2lnbkRvYyB7CiAgLy8gYm9keV9ieXRlcyBpcyBwcm90b2J1ZiBzZXJpYWxpemF0aW9uIG9mIGEgVHhCb2R5IHRoYXQgbWF0Y2hlcyB0aGUKICAvLyByZXByZXNlbnRhdGlvbiBpbiBUeFJhdy4KICBieXRlcyBib2R5X2J5dGVzID0gMTsKCiAgLy8gYXV0aF9pbmZvX2J5dGVzIGlzIGEgcHJvdG9idWYgc2VyaWFsaXphdGlvbiBvZiBhbiBBdXRoSW5mbyB0aGF0IG1hdGNoZXMgdGhlCiAgLy8gcmVwcmVzZW50YXRpb24gaW4gVHhSYXcuCiAgYnl0ZXMgYXV0aF9pbmZvX2J5dGVzID0gMjsKCiAgLy8gY2hhaW5faWQgaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjaGFpbiB0aGlzIHRyYW5zYWN0aW9uIHRhcmdldHMuCiAgLy8gSXQgcHJldmVudHMgc2lnbmVkIHRyYW5zYWN0aW9ucyBmcm9tIGJlaW5nIHVzZWQgb24gYW5vdGhlciBjaGFpbiBieSBhbgogIC8vIGF0dGFja2VyCiAgc3RyaW5nIGNoYWluX2lkID0gMzsKCiAgLy8gYWNjb3VudF9udW1iZXIgaXMgdGhlIGFjY291bnQgbnVtYmVyIG9mIHRoZSBhY2NvdW50IGluIHN0YXRlCiAgdWludDY0IGFjY291bnRfbnVtYmVyID0gNDsKfQ=="}})],1),e._v(" "),a("p",[e._v("Once signed by all signers, the "),a("code",[e._v("body_bytes")]),e._v(", "),a("code",[e._v("auth_info_bytes")]),e._v(" and "),a("code",[e._v("signatures")]),e._v(" are gathered into "),a("code",[e._v("TxRaw")]),e._v(", whose serialized bytes are broadcasted over the network.")]),e._v(" "),a("h4",{attrs:{id:"sign-mode-legacy-amino-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-legacy-amino-json"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")])]),e._v(" "),a("p",[e._v("The legacy implemention of the "),a("code",[e._v("Tx")]),e._v(" interface is the "),a("code",[e._v("StdTx")]),e._v(" struct from "),a("code",[e._v("x/auth")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RkVHggaXMgdGhlIGxlZ2FjeSB0cmFuc2FjdGlvbiBmb3JtYXQgZm9yIHdyYXBwaW5nIGEgTXNnIHdpdGggRmVlIGFuZCBTaWduYXR1cmVzLgovLyBJdCBvbmx5IHdvcmtzIHdpdGggQW1pbm8sIHBsZWFzZSBwcmVmZXIgdGhlIG5ldyBwcm90b2J1ZiBUeCBpbiB0eXBlcy90eC4KLy8gTk9URTogdGhlIGZpcnN0IHNpZ25hdHVyZSBpcyB0aGUgZmVlIHBheWVyIChTaWduYXR1cmVzIG11c3Qgbm90IGJlIG5pbCkuCi8vIERlcHJlY2F0ZWQKdHlwZSBTdGRUeCBzdHJ1Y3QgewoJTXNncyAgICAgICAgICBbXXNkay5Nc2cgICAgICBganNvbjomcXVvdDttc2cmcXVvdDsgeWFtbDomcXVvdDttc2cmcXVvdDtgCglGZWUgICAgICAgICAgIFN0ZEZlZSAgICAgICAgIGBqc29uOiZxdW90O2ZlZSZxdW90OyB5YW1sOiZxdW90O2ZlZSZxdW90O2AKCVNpZ25hdHVyZXMgICAgW11TdGRTaWduYXR1cmUgYGpzb246JnF1b3Q7c2lnbmF0dXJlcyZxdW90OyB5YW1sOiZxdW90O3NpZ25hdHVyZXMmcXVvdDtgCglNZW1vICAgICAgICAgIHN0cmluZyAgICAgICAgIGBqc29uOiZxdW90O21lbW8mcXVvdDsgeWFtbDomcXVvdDttZW1vJnF1b3Q7YAoJVGltZW91dEhlaWdodCB1aW50NjQgICAgICAgICBganNvbjomcXVvdDt0aW1lb3V0X2hlaWdodCZxdW90OyB5YW1sOiZxdW90O3RpbWVvdXRfaGVpZ2h0JnF1b3Q7YAp9"}})],1),e._v(" "),a("p",[e._v("The document signed by all signers is "),a("code",[e._v("StdSignDoc")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RkU2lnbkRvYyBpcyByZXBsYXktcHJldmVudGlvbiBzdHJ1Y3R1cmUuCi8vIEl0IGluY2x1ZGVzIHRoZSByZXN1bHQgb2YgbXNnLkdldFNpZ25CeXRlcygpLAovLyBhcyB3ZWxsIGFzIHRoZSBDaGFpbklEIChwcmV2ZW50IGNyb3NzIGNoYWluIHJlcGxheSkKLy8gYW5kIHRoZSBTZXF1ZW5jZSBudW1iZXJzIGZvciBlYWNoIHNpZ25hdHVyZSAocHJldmVudAovLyBpbmNoYWluIHJlcGxheSBhbmQgZW5mb3JjZSB0eCBvcmRlcmluZyBwZXIgYWNjb3VudCkuCnR5cGUgU3RkU2lnbkRvYyBzdHJ1Y3QgewoJQWNjb3VudE51bWJlciB1aW50NjQgICAgICAgICAgICBganNvbjomcXVvdDthY2NvdW50X251bWJlciZxdW90OyB5YW1sOiZxdW90O2FjY291bnRfbnVtYmVyJnF1b3Q7YAoJU2VxdWVuY2UgICAgICB1aW50NjQgICAgICAgICAgICBganNvbjomcXVvdDtzZXF1ZW5jZSZxdW90OyB5YW1sOiZxdW90O3NlcXVlbmNlJnF1b3Q7YAoJVGltZW91dEhlaWdodCB1aW50NjQgICAgICAgICAgICBganNvbjomcXVvdDt0aW1lb3V0X2hlaWdodCxvbWl0ZW1wdHkmcXVvdDsgeWFtbDomcXVvdDt0aW1lb3V0X2hlaWdodCZxdW90O2AKCUNoYWluSUQgICAgICAgc3RyaW5nICAgICAgICAgICAgYGpzb246JnF1b3Q7Y2hhaW5faWQmcXVvdDsgeWFtbDomcXVvdDtjaGFpbl9pZCZxdW90O2AKCU1lbW8gICAgICAgICAgc3RyaW5nICAgICAgICAgICAgYGpzb246JnF1b3Q7bWVtbyZxdW90OyB5YW1sOiZxdW90O21lbW8mcXVvdDtgCglGZWUgICAgICAgICAgIGpzb24uUmF3TWVzc2FnZSAgIGBqc29uOiZxdW90O2ZlZSZxdW90OyB5YW1sOiZxdW90O2ZlZSZxdW90O2AKCU1zZ3MgICAgICAgICAgW11qc29uLlJhd01lc3NhZ2UgYGpzb246JnF1b3Q7bXNncyZxdW90OyB5YW1sOiZxdW90O21zZ3MmcXVvdDtgCn0="}})],1),e._v(" "),a("p",[e._v("which is encoded into bytes using Amino JSON. Once all signatures are gathered into "),a("code",[e._v("StdTx")]),e._v(", "),a("code",[e._v("StdTx")]),e._v(" is serialized using Amino JSON, and these bytes are broadcasted over the network.")]),e._v(" "),a("h4",{attrs:{id:"other-sign-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-sign-modes"}},[e._v("#")]),e._v(" Other Sign Modes")]),e._v(" "),a("p",[e._v("Other sign modes, most notably "),a("code",[e._v("SIGN_MODE_TEXTUAL")]),e._v(", are being discussed. If you wish to learn more about them, please refer to "),a("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR-020")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"transaction-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-process"}},[e._v("#")]),e._v(" Transaction Process")]),e._v(" "),a("p",[e._v("The process of an end-user sending a transaction is:")]),e._v(" "),a("ul",[a("li",[e._v("decide on the messages to put into the transaction,")]),e._v(" "),a("li",[e._v("generate the transaction using the SDK's "),a("code",[e._v("TxBuilder")]),e._v(",")]),e._v(" "),a("li",[e._v("broadcast the transaction using one of the available interfaces.")])]),e._v(" "),a("p",[e._v("The next paragraphs will describe each of these components, in this order.")]),e._v(" "),a("h3",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("Module "),a("code",[e._v("Msg")]),e._v("s are not to be confused with "),a("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI Messages"),a("OutboundLink")],1),e._v(" which define interactions between the Tendermint and application layers.")])]),e._v(" "),a("p",[a("strong",[e._v("Messages")]),e._v(" (or "),a("code",[e._v("Msg")]),e._v("s) are module-specific objects that trigger state transitions within the scope of the module they belong to. Module developers define the messages for their module by adding methods to the Protobuf "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[a("code",[e._v("Msg")]),e._v(" service")]),e._v(", and also implement the corresponding "),a("code",[e._v("MsgServer")]),e._v(".")],1),e._v(" "),a("p",[a("code",[e._v("Msg")]),e._v("s in a module are defined as methods in the ["),a("code",[e._v("Msg")]),e._v(" service] inside each module's "),a("code",[e._v("tx.proto")]),e._v(" file. Since "),a("code",[e._v("Msg")]),e._v("s are module-specific, each module needs a to process all of its message types and trigger state changes within the module's scope. This design puts more responsibility on module developers, allowing application developers to reuse common functionalities without having to implement state transition logic repetitively. To achieve this, Protobuf generates a "),a("code",[e._v("MsgServer")]),e._v(" interface for each module, and the module developer needs to implement this interface. The methods on the "),a("code",[e._v("MsgServer")]),e._v(" interface corresponds on how to handle each of the different "),a("code",[e._v("Msg")]),e._v(".")]),e._v(" "),a("p",[e._v("To learn more about "),a("code",[e._v("Msg")]),e._v(" services and how to implement "),a("code",[e._v("MsgServer")]),e._v(", click "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("While messages contain the information for state transition logic, a transaction's other metadata and relevant information are stored in the "),a("code",[e._v("TxBuilder")]),e._v(" and "),a("code",[e._v("Context")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"transaction-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-generation"}},[e._v("#")]),e._v(" Transaction Generation")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TxBuilder")]),e._v(" interface contains data closely related with the generation of transactions, which an end-user can freely set to generate the desired transaction:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIFR4QnVpbGRlciBkZWZpbmVzIGFuIGludGVyZmFjZSB3aGljaCBhbiBhcHBsaWNhdGlvbi1kZWZpbmVkIGNvbmNyZXRlIHRyYW5zYWN0aW9uCgkvLyB0eXBlIG11c3QgaW1wbGVtZW50LiBOYW1lbHksIGl0IG11c3QgYmUgYWJsZSB0byBzZXQgbWVzc2FnZXMsIGdlbmVyYXRlCgkvLyBzaWduYXR1cmVzLCBhbmQgcHJvdmlkZSBjYW5vbmljYWwgYnl0ZXMgdG8gc2lnbiBvdmVyLiBUaGUgdHJhbnNhY3Rpb24gbXVzdAoJLy8gYWxzbyBrbm93IGhvdyB0byBlbmNvZGUgaXRzZWxmLgoJVHhCdWlsZGVyIGludGVyZmFjZSB7CgkJR2V0VHgoKSBzaWduaW5nLlR4CgoJCVNldE1zZ3MobXNncyAuLi5zZGsuTXNnKSBlcnJvcgoJCVNldFNpZ25hdHVyZXMoc2lnbmF0dXJlcyAuLi5zaWduaW5ndHlwZXMuU2lnbmF0dXJlVjIpIGVycm9yCgkJU2V0TWVtbyhtZW1vIHN0cmluZykKCQlTZXRGZWVBbW91bnQoYW1vdW50IHNkay5Db2lucykKCQlTZXRHYXNMaW1pdChsaW1pdCB1aW50NjQpCgkJU2V0VGltZW91dEhlaWdodChoZWlnaHQgdWludDY0KQoJfQ=="}})],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("Msg")]),e._v("s, the array of "),a("a",{attrs:{href:"#messages"}},[e._v("messages")]),e._v(" included in the transaction.")]),e._v(" "),a("li",[a("code",[e._v("GasLimit")]),e._v(", option chosen by the users for how to calculate how much gas they will need to pay.")]),e._v(" "),a("li",[a("code",[e._v("Memo")]),e._v(", to send with the transaction.")]),e._v(" "),a("li",[a("code",[e._v("FeeAmount")]),e._v(", the maximum amount the user is willing to pay in fees.")]),e._v(" "),a("li",[a("code",[e._v("TimeoutHeight")]),e._v(", block height until which the transaction is valid.")]),e._v(" "),a("li",[a("code",[e._v("Signatures")]),e._v(", the array of signatures from all signers of the transaction.")])]),e._v(" "),a("p",[e._v("As there are currently two sign modes for signing transactions, there are also two implementations of "),a("code",[e._v("TxBuilder")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc3/x/auth/tx/builder.go#L19-L33",target:"_blank",rel:"noopener noreferrer"}},[e._v("wrapper"),a("OutboundLink")],1),e._v(" for creating transactions for "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(",")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc3/x/auth/legacy/legacytx/stdtx_builder.go#L14-L20",target:"_blank",rel:"noopener noreferrer"}},[e._v("StdTxBuilder"),a("OutboundLink")],1),e._v(" for "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(".")])]),e._v(" "),a("p",[e._v("However, the two implementation of "),a("code",[e._v("TxBuilder")]),e._v(" should be hidden away from end-users, as they should prefer using the overarching "),a("code",[e._v("TxConfig")]),e._v(" interface:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIFR4Q29uZmlnIGRlZmluZXMgYW4gaW50ZXJmYWNlIGEgY2xpZW50IGNhbiB1dGlsaXplIHRvIGdlbmVyYXRlIGFuCgkvLyBhcHBsaWNhdGlvbi1kZWZpbmVkIGNvbmNyZXRlIHRyYW5zYWN0aW9uIHR5cGUuIFRoZSB0eXBlIHJldHVybmVkIG11c3QKCS8vIGltcGxlbWVudCBUeEJ1aWxkZXIuCglUeENvbmZpZyBpbnRlcmZhY2UgewoJCVR4RW5jb2RpbmdDb25maWcKCgkJTmV3VHhCdWlsZGVyKCkgVHhCdWlsZGVyCgkJV3JhcFR4QnVpbGRlcihzZGsuVHgpIChUeEJ1aWxkZXIsIGVycm9yKQoJCVNpZ25Nb2RlSGFuZGxlcigpIHNpZ25pbmcuU2lnbk1vZGVIYW5kbGVyCgl9"}})],1),e._v(" "),a("p",[a("code",[e._v("TxConfig")]),e._v(" is an app-wide configuration for managing transactions. Most importantly, it holds the information about whether to sign each transaction with "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(". By calling "),a("code",[e._v("txBuilder := txConfig.NewTxBuilder()")]),e._v(", a new "),a("code",[e._v("TxBuilder")]),e._v(" will be created with the appropriate sign mode.")]),e._v(" "),a("p",[e._v("Once "),a("code",[e._v("TxBuilder")]),e._v(" is correctly populated with the setters exposed above, "),a("code",[e._v("TxConfig")]),e._v(" will also take care of correctly encoding the bytes (again, either using "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v("). Here's a pseudo-code snippet of how to generate and encode a transaction, using the "),a("code",[e._v("TxEncoder()")]),e._v(" method:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhCdWlsZGVyIDo9IHR4Q29uZmlnLk5ld1R4QnVpbGRlcigpCnR4QnVpbGRlci5TZXRNc2dzKC4uLikgLy8gYW5kIG90aGVyIHNldHRlcnMgb24gdHhCdWlsZGVyCgpieiwgZXJyIDo9IHR4Q29uZmlnLlR4RW5jb2RlcigpKHR4QnVpbGRlci5HZXRUeCgpKQovLyBieiBhcmUgYnl0ZXMgdG8gYmUgYnJvYWRjYXN0ZWQgb3ZlciB0aGUgbmV0d29yawo="}}),e._v(" "),a("h3",{attrs:{id:"broadcasting-the-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-the-transaction"}},[e._v("#")]),e._v(" Broadcasting the Transaction")]),e._v(" "),a("p",[e._v("Once the transaction bytes are generated, there are currently three ways of broadcasting it.")]),e._v(" "),a("h4",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("p",[e._v("Application developers create entrypoints to the application by creating a "),a("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("command-line interface")]),e._v(" and/or "),a("RouterLink",{attrs:{to:"/interfaces/rest.html"}},[e._v("REST interface")]),e._v(", typically found in the application's "),a("code",[e._v("./cmd")]),e._v(" folder. These interfaces allow users to interact with the application through command-line.")],1),e._v(" "),a("p",[e._v("For the "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#cli"}},[e._v("command-line interface")]),e._v(", module developers create subcommands to add as children to the application top-level transaction command "),a("code",[e._v("TxCmd")]),e._v(". CLI commands actually bundle all the steps of transaction processing into one simple command: creating messages, generating transactions and broadcasting. For concrete examples, see the "),a("RouterLink",{attrs:{to:"/run-node/interact-node.html"}},[e._v("Interacting with a Node")]),e._v(" section. An example transaction made using CLI looks like:")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBzZW5kICRNWV9WQUxJREFUT1JfQUREUkVTUyAkUkVDSVBJRU5UIDEwMDBzdGFrZQo="}}),e._v(" "),a("h4",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),a("OutboundLink")],1),e._v(" is introduced in Cosmos SDK 0.40 as the main component for the SDK's RPC layer. The principal usage of gRPC is in the context of modules' "),a("a",{attrs:{href:"../building-modules"}},[a("code",[e._v("Query")]),e._v(" services")]),e._v(". However, the SDK also exposes a few other module-agnostic gRPC services, one of them being the "),a("code",[e._v("Tx")]),e._v(" service:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"c3ludGF4ID0gJnF1b3Q7cHJvdG8zJnF1b3Q7OwpwYWNrYWdlIGNvc21vcy50eC52MWJldGExOwoKaW1wb3J0ICZxdW90O2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucHJvdG8mcXVvdDs7CmltcG9ydCAmcXVvdDtjb3Ntb3MvYmFzZS9hYmNpL3YxYmV0YTEvYWJjaS5wcm90byZxdW90OzsKaW1wb3J0ICZxdW90O2Nvc21vcy90eC92MWJldGExL3R4LnByb3RvJnF1b3Q7OwoKb3B0aW9uIGdvX3BhY2thZ2UgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7OwoKLy8gU2VydmljZSBkZWZpbmVzIGEgZ1JQQyBzZXJ2aWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRyYW5zYWN0aW9ucy4Kc2VydmljZSBTZXJ2aWNlIHsKICAgIC8vIFNpbXVsYXRlIHNpbXVsYXRlcyBleGVjdXRpbmcgYSB0cmFuc2FjdGlvbiBmb3IgZXN0aW1hdGluZyBnYXMgdXNhZ2UuCiAgICBycGMgU2ltdWxhdGUoU2ltdWxhdGVSZXF1ZXN0KSByZXR1cm5zIChTaW11bGF0ZVJlc3BvbnNlKSB7CiAgICAgICAgb3B0aW9uIChnb29nbGUuYXBpLmh0dHApLnBvc3QgPSAmcXVvdDsvY29zbW9zL3R4L3YxYmV0YTEvc2ltdWxhdGUmcXVvdDs7CiAgICB9CiAgICAvLyBHZXRUeCBmZXRjaGVzIGEgdHggYnkgaGFzaC4KICAgIHJwYyBHZXRUeChHZXRUeFJlcXVlc3QpIHJldHVybnMgKEdldFR4UmVzcG9uc2UpIHsKICAgICAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2Nvc21vcy90eC92MWJldGExL3R4L3toYXNofSZxdW90OzsKICAgIH0KfQoKLy8gU2ltdWxhdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBTZXJ2aWNlLlNpbXVsYXRlCi8vIFJQQyBtZXRob2QuCm1lc3NhZ2UgU2ltdWxhdGVSZXF1ZXN0IHsKICAgIC8vIHR4IGlzIHRoZSB0cmFuc2FjdGlvbiB0byBzaW11bGF0ZS4KICAgIGNvc21vcy50eC52MWJldGExLlR4IHR4ID0gMTsKfQogIAovLyBTaW11bGF0ZVJlc3BvbnNlIGlzIHRoZSByZXNwb25zZSB0eXBlIGZvciB0aGUKLy8gU2VydmljZS5TaW11bGF0ZVJQQyBtZXRob2QuCm1lc3NhZ2UgU2ltdWxhdGVSZXNwb25zZSB7CiAgICAvLyBnYXNfaW5mbyBpcyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgZ2FzIHVzZWQgaW4gdGhlIHNpbXVsYXRpb24uCiAgICBjb3Ntb3MuYmFzZS5hYmNpLnYxYmV0YTEuR2FzSW5mbyBnYXNfaW5mbyA9IDE7CiAgICAvLyByZXN1bHQgaXMgdGhlIHJlc3VsdCBvZiB0aGUgc2ltdWxhdGlvbi4KICAgIGNvc21vcy5iYXNlLmFiY2kudjFiZXRhMS5SZXN1bHQgcmVzdWx0ID0gMjsKfQoKLy8gR2V0VHggaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFNlcnZpY2UuR2V0VHgKLy8gUlBDIG1ldGhvZC4KbWVzc2FnZSBHZXRUeFJlcXVlc3QgewogICAgLy8gaGFzaCBpcyB0aGUgdHggaGFzaCB0byBxdWVyeSwgZW5jb2RlZCBhcyBhIGhleCBzdHJpbmcuCiAgIHN0cmluZyBoYXNoID0gMTsKfQogIAovLyBHZXRUeFJlc3BvbnNlIGlzIHRoZSByZXNwb25zZSB0eXBlIGZvciB0aGUgU2VydmljZS5HZXRUeCBtZXRob2QuCm1lc3NhZ2UgR2V0VHhSZXNwb25zZSB7CiAgICAvLyB0eCBpcyB0aGUgcXVlcmllZCB0cmFuc2FjdGlvbi4KICAgIGNvc21vcy50eC52MWJldGExLlR4IHR4ID0gMTsKfQo="}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Tx")]),e._v(" service exposes a handful of utility functions, such as simulating a transaction or querying a transaction, and also one method to broadcast transactions.")]),e._v(" "),a("p",[e._v("Examples of broadcasting and simulating a transaction are shown "),a("RouterLink",{attrs:{to:"/run-node/txs.html#programmatically-with-go"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[e._v("#")]),e._v(" REST")]),e._v(" "),a("p",[e._v("Each gRPC method has its corresponding REST endpoint, generated using "),a("a",{attrs:{href:"https://github.com/grpc-ecosystem/grpc-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC-gateway"),a("OutboundLink")],1),e._v(". Therefore, instead of using gRPC, you can also use HTTP to broadcast the same transaction, on the "),a("code",[e._v("POST /cosmos/tx/v1beta1/txs")]),e._v(" endpoint.")]),e._v(" "),a("p",[e._v("An example can be seen "),a("RouterLink",{attrs:{to:"/run-node/txs.html#using-rest"}},[e._v("here")])],1),e._v(" "),a("h4",{attrs:{id:"tendermint-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-rpc"}},[e._v("#")]),e._v(" Tendermint RPC")]),e._v(" "),a("p",[e._v("The three methods presented above are actually higher abstractions over the Tendermint RPC "),a("code",[e._v("/broadcast_tx_{async,sync,commit}")]),e._v(" endpoints, documented "),a("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/#/Tx",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". This means that you can use the Tendermint RPC endpoints directly to broadcast the transaction, if you wish so.")]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about the "),a("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);