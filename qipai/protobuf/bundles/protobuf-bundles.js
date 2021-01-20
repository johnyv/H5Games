var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.protobuff = (function() {

        /**
         * Namespace protobuff.
         * @memberof com
         * @namespace
         */
        var protobuff = {};

        protobuff.data = (function() {

            /**
             * Namespace data.
             * @memberof com.protobuff
             * @namespace
             */
            var data = {};

            data.CardModule = (function() {

                /**
                 * Properties of a CardModule.
                 * @memberof com.protobuff.data
                 * @interface ICardModule
                 * @property {number|null} [color] CardModule color
                 * @property {number|null} [value] CardModule value
                 */

                /**
                 * Constructs a new CardModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a CardModule.
                 * @implements ICardModule
                 * @constructor
                 * @param {com.protobuff.data.ICardModule=} [properties] Properties to set
                 */
                function CardModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CardModule color.
                 * @member {number} color
                 * @memberof com.protobuff.data.CardModule
                 * @instance
                 */
                CardModule.prototype.color = 0;

                /**
                 * CardModule value.
                 * @member {number} value
                 * @memberof com.protobuff.data.CardModule
                 * @instance
                 */
                CardModule.prototype.value = 0;

                /**
                 * Creates a new CardModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.CardModule
                 * @static
                 * @param {com.protobuff.data.ICardModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.CardModule} CardModule instance
                 */
                CardModule.create = function create(properties) {
                    return new CardModule(properties);
                };

                /**
                 * Encodes the specified CardModule message. Does not implicitly {@link com.protobuff.data.CardModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.CardModule
                 * @static
                 * @param {com.protobuff.data.ICardModule} message CardModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CardModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.color != null && message.hasOwnProperty("color"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.color);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
                    return writer;
                };

                /**
                 * Encodes the specified CardModule message, length delimited. Does not implicitly {@link com.protobuff.data.CardModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.CardModule
                 * @static
                 * @param {com.protobuff.data.ICardModule} message CardModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CardModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CardModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.CardModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.CardModule} CardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CardModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.CardModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.color = reader.int32();
                            break;
                        case 2:
                            message.value = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CardModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.CardModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.CardModule} CardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CardModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CardModule message.
                 * @function verify
                 * @memberof com.protobuff.data.CardModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CardModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isInteger(message.color))
                            return "color: integer expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };

                return CardModule;
            })();

            data.RoleRoomModule = (function() {

                /**
                 * Properties of a RoleRoomModule.
                 * @memberof com.protobuff.data
                 * @interface IRoleRoomModule
                 * @property {number|null} [roleId] RoleRoomModule roleId
                 * @property {string|null} [nickName] RoleRoomModule nickName
                 * @property {string|null} [imgurl] RoleRoomModule imgurl
                 * @property {number|null} [copper] RoleRoomModule copper
                 * @property {number|null} [index] RoleRoomModule index
                 * @property {number|null} [status] RoleRoomModule status
                 * @property {number|null} [changeCopper] RoleRoomModule changeCopper
                 * @property {number|null} [settleStatus] RoleRoomModule settleStatus
                 * @property {number|null} [settleResult] RoleRoomModule settleResult
                 * @property {Array.<com.protobuff.data.ICardModule>|null} [cardList] RoleRoomModule cardList
                 */

                /**
                 * Constructs a new RoleRoomModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RoleRoomModule.
                 * @implements IRoleRoomModule
                 * @constructor
                 * @param {com.protobuff.data.IRoleRoomModule=} [properties] Properties to set
                 */
                function RoleRoomModule(properties) {
                    this.cardList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoleRoomModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.roleId = 0;

                /**
                 * RoleRoomModule nickName.
                 * @member {string} nickName
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.nickName = "";

                /**
                 * RoleRoomModule imgurl.
                 * @member {string} imgurl
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.imgurl = "";

                /**
                 * RoleRoomModule copper.
                 * @member {number} copper
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.copper = 0;

                /**
                 * RoleRoomModule index.
                 * @member {number} index
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.index = 0;

                /**
                 * RoleRoomModule status.
                 * @member {number} status
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.status = 0;

                /**
                 * RoleRoomModule changeCopper.
                 * @member {number} changeCopper
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.changeCopper = 0;

                /**
                 * RoleRoomModule settleStatus.
                 * @member {number} settleStatus
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.settleStatus = 0;

                /**
                 * RoleRoomModule settleResult.
                 * @member {number} settleResult
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.settleResult = 0;

                /**
                 * RoleRoomModule cardList.
                 * @member {Array.<com.protobuff.data.ICardModule>} cardList
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @instance
                 */
                RoleRoomModule.prototype.cardList = $util.emptyArray;

                /**
                 * Creates a new RoleRoomModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @static
                 * @param {com.protobuff.data.IRoleRoomModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RoleRoomModule} RoleRoomModule instance
                 */
                RoleRoomModule.create = function create(properties) {
                    return new RoleRoomModule(properties);
                };

                /**
                 * Encodes the specified RoleRoomModule message. Does not implicitly {@link com.protobuff.data.RoleRoomModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @static
                 * @param {com.protobuff.data.IRoleRoomModule} message RoleRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleRoomModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.imgurl);
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.copper);
                    if (message.index != null && message.hasOwnProperty("index"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.index);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
                    if (message.changeCopper != null && message.hasOwnProperty("changeCopper"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.changeCopper);
                    if (message.settleStatus != null && message.hasOwnProperty("settleStatus"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.settleStatus);
                    if (message.settleResult != null && message.hasOwnProperty("settleResult"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.settleResult);
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.com.protobuff.data.CardModule.encode(message.cardList[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RoleRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleRoomModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @static
                 * @param {com.protobuff.data.IRoleRoomModule} message RoleRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleRoomModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoleRoomModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RoleRoomModule} RoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleRoomModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RoleRoomModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.nickName = reader.string();
                            break;
                        case 3:
                            message.imgurl = reader.string();
                            break;
                        case 4:
                            message.copper = reader.int32();
                            break;
                        case 5:
                            message.index = reader.int32();
                            break;
                        case 6:
                            message.status = reader.int32();
                            break;
                        case 7:
                            message.changeCopper = reader.int32();
                            break;
                        case 8:
                            message.settleStatus = reader.int32();
                            break;
                        case 9:
                            message.settleResult = reader.int32();
                            break;
                        case 10:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.com.protobuff.data.CardModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoleRoomModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RoleRoomModule} RoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleRoomModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoleRoomModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RoleRoomModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoleRoomModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        if (!$util.isString(message.nickName))
                            return "nickName: string expected";
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        if (!$util.isString(message.imgurl))
                            return "imgurl: string expected";
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        if (!$util.isInteger(message.copper))
                            return "copper: integer expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    if (message.changeCopper != null && message.hasOwnProperty("changeCopper"))
                        if (!$util.isInteger(message.changeCopper))
                            return "changeCopper: integer expected";
                    if (message.settleStatus != null && message.hasOwnProperty("settleStatus"))
                        if (!$util.isInteger(message.settleStatus))
                            return "settleStatus: integer expected";
                    if (message.settleResult != null && message.hasOwnProperty("settleResult"))
                        if (!$util.isInteger(message.settleResult))
                            return "settleResult: integer expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.com.protobuff.data.CardModule.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    return null;
                };

                return RoleRoomModule;
            })();

            data.RequestMatchModule = (function() {

                /**
                 * Properties of a RequestMatchModule.
                 * @memberof com.protobuff.data
                 * @interface IRequestMatchModule
                 * @property {number|null} [type] RequestMatchModule type
                 */

                /**
                 * Constructs a new RequestMatchModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RequestMatchModule.
                 * @implements IRequestMatchModule
                 * @constructor
                 * @param {com.protobuff.data.IRequestMatchModule=} [properties] Properties to set
                 */
                function RequestMatchModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RequestMatchModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.RequestMatchModule
                 * @instance
                 */
                RequestMatchModule.prototype.type = 0;

                /**
                 * Creates a new RequestMatchModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RequestMatchModule
                 * @static
                 * @param {com.protobuff.data.IRequestMatchModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RequestMatchModule} RequestMatchModule instance
                 */
                RequestMatchModule.create = function create(properties) {
                    return new RequestMatchModule(properties);
                };

                /**
                 * Encodes the specified RequestMatchModule message. Does not implicitly {@link com.protobuff.data.RequestMatchModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RequestMatchModule
                 * @static
                 * @param {com.protobuff.data.IRequestMatchModule} message RequestMatchModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestMatchModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified RequestMatchModule message, length delimited. Does not implicitly {@link com.protobuff.data.RequestMatchModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RequestMatchModule
                 * @static
                 * @param {com.protobuff.data.IRequestMatchModule} message RequestMatchModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestMatchModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RequestMatchModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RequestMatchModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RequestMatchModule} RequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestMatchModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RequestMatchModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RequestMatchModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RequestMatchModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RequestMatchModule} RequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestMatchModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RequestMatchModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RequestMatchModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RequestMatchModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return RequestMatchModule;
            })();

            data.RequestMatchResultModule = (function() {

                /**
                 * Properties of a RequestMatchResultModule.
                 * @memberof com.protobuff.data
                 * @interface IRequestMatchResultModule
                 * @property {number|null} [type] RequestMatchResultModule type
                 * @property {number|null} [result] RequestMatchResultModule result
                 */

                /**
                 * Constructs a new RequestMatchResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RequestMatchResultModule.
                 * @implements IRequestMatchResultModule
                 * @constructor
                 * @param {com.protobuff.data.IRequestMatchResultModule=} [properties] Properties to set
                 */
                function RequestMatchResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RequestMatchResultModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @instance
                 */
                RequestMatchResultModule.prototype.type = 0;

                /**
                 * RequestMatchResultModule result.
                 * @member {number} result
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @instance
                 */
                RequestMatchResultModule.prototype.result = 0;

                /**
                 * Creates a new RequestMatchResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.IRequestMatchResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RequestMatchResultModule} RequestMatchResultModule instance
                 */
                RequestMatchResultModule.create = function create(properties) {
                    return new RequestMatchResultModule(properties);
                };

                /**
                 * Encodes the specified RequestMatchResultModule message. Does not implicitly {@link com.protobuff.data.RequestMatchResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.IRequestMatchResultModule} message RequestMatchResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestMatchResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.result != null && message.hasOwnProperty("result"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                    return writer;
                };

                /**
                 * Encodes the specified RequestMatchResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.RequestMatchResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.IRequestMatchResultModule} message RequestMatchResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequestMatchResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RequestMatchResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RequestMatchResultModule} RequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestMatchResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RequestMatchResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.result = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RequestMatchResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RequestMatchResultModule} RequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequestMatchResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RequestMatchResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RequestMatchResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RequestMatchResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.result != null && message.hasOwnProperty("result"))
                        if (!$util.isInteger(message.result))
                            return "result: integer expected";
                    return null;
                };

                return RequestMatchResultModule;
            })();

            data.QuitModule = (function() {

                /**
                 * Properties of a QuitModule.
                 * @memberof com.protobuff.data
                 * @interface IQuitModule
                 */

                /**
                 * Constructs a new QuitModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a QuitModule.
                 * @implements IQuitModule
                 * @constructor
                 * @param {com.protobuff.data.IQuitModule=} [properties] Properties to set
                 */
                function QuitModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new QuitModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.QuitModule
                 * @static
                 * @param {com.protobuff.data.IQuitModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.QuitModule} QuitModule instance
                 */
                QuitModule.create = function create(properties) {
                    return new QuitModule(properties);
                };

                /**
                 * Encodes the specified QuitModule message. Does not implicitly {@link com.protobuff.data.QuitModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.QuitModule
                 * @static
                 * @param {com.protobuff.data.IQuitModule} message QuitModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuitModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified QuitModule message, length delimited. Does not implicitly {@link com.protobuff.data.QuitModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.QuitModule
                 * @static
                 * @param {com.protobuff.data.IQuitModule} message QuitModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuitModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QuitModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.QuitModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.QuitModule} QuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuitModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.QuitModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QuitModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.QuitModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.QuitModule} QuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuitModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QuitModule message.
                 * @function verify
                 * @memberof com.protobuff.data.QuitModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QuitModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return QuitModule;
            })();

            data.QuitResultModule = (function() {

                /**
                 * Properties of a QuitResultModule.
                 * @memberof com.protobuff.data
                 * @interface IQuitResultModule
                 */

                /**
                 * Constructs a new QuitResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a QuitResultModule.
                 * @implements IQuitResultModule
                 * @constructor
                 * @param {com.protobuff.data.IQuitResultModule=} [properties] Properties to set
                 */
                function QuitResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new QuitResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.QuitResultModule
                 * @static
                 * @param {com.protobuff.data.IQuitResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.QuitResultModule} QuitResultModule instance
                 */
                QuitResultModule.create = function create(properties) {
                    return new QuitResultModule(properties);
                };

                /**
                 * Encodes the specified QuitResultModule message. Does not implicitly {@link com.protobuff.data.QuitResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.QuitResultModule
                 * @static
                 * @param {com.protobuff.data.IQuitResultModule} message QuitResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuitResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified QuitResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.QuitResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.QuitResultModule
                 * @static
                 * @param {com.protobuff.data.IQuitResultModule} message QuitResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QuitResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QuitResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.QuitResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.QuitResultModule} QuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuitResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.QuitResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QuitResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.QuitResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.QuitResultModule} QuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QuitResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QuitResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.QuitResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QuitResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return QuitResultModule;
            })();

            data.EnterRoomModule = (function() {

                /**
                 * Properties of an EnterRoomModule.
                 * @memberof com.protobuff.data
                 * @interface IEnterRoomModule
                 * @property {Array.<com.protobuff.data.IRoleRoomModule>|null} [roleList] EnterRoomModule roleList
                 */

                /**
                 * Constructs a new EnterRoomModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents an EnterRoomModule.
                 * @implements IEnterRoomModule
                 * @constructor
                 * @param {com.protobuff.data.IEnterRoomModule=} [properties] Properties to set
                 */
                function EnterRoomModule(properties) {
                    this.roleList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EnterRoomModule roleList.
                 * @member {Array.<com.protobuff.data.IRoleRoomModule>} roleList
                 * @memberof com.protobuff.data.EnterRoomModule
                 * @instance
                 */
                EnterRoomModule.prototype.roleList = $util.emptyArray;

                /**
                 * Creates a new EnterRoomModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.EnterRoomModule
                 * @static
                 * @param {com.protobuff.data.IEnterRoomModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.EnterRoomModule} EnterRoomModule instance
                 */
                EnterRoomModule.create = function create(properties) {
                    return new EnterRoomModule(properties);
                };

                /**
                 * Encodes the specified EnterRoomModule message. Does not implicitly {@link com.protobuff.data.EnterRoomModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.EnterRoomModule
                 * @static
                 * @param {com.protobuff.data.IEnterRoomModule} message EnterRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnterRoomModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleList != null && message.roleList.length)
                        for (var i = 0; i < message.roleList.length; ++i)
                            $root.com.protobuff.data.RoleRoomModule.encode(message.roleList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified EnterRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.EnterRoomModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.EnterRoomModule
                 * @static
                 * @param {com.protobuff.data.IEnterRoomModule} message EnterRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnterRoomModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EnterRoomModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.EnterRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.EnterRoomModule} EnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnterRoomModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.EnterRoomModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.roleList && message.roleList.length))
                                message.roleList = [];
                            message.roleList.push($root.com.protobuff.data.RoleRoomModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EnterRoomModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.EnterRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.EnterRoomModule} EnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnterRoomModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EnterRoomModule message.
                 * @function verify
                 * @memberof com.protobuff.data.EnterRoomModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnterRoomModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleList != null && message.hasOwnProperty("roleList")) {
                        if (!Array.isArray(message.roleList))
                            return "roleList: array expected";
                        for (var i = 0; i < message.roleList.length; ++i) {
                            var error = $root.com.protobuff.data.RoleRoomModule.verify(message.roleList[i]);
                            if (error)
                                return "roleList." + error;
                        }
                    }
                    return null;
                };

                return EnterRoomModule;
            })();

            data.RoleChangeModule = (function() {

                /**
                 * Properties of a RoleChangeModule.
                 * @memberof com.protobuff.data
                 * @interface IRoleChangeModule
                 * @property {number|null} [type] RoleChangeModule type
                 * @property {com.protobuff.data.IRoleRoomModule|null} [role] RoleChangeModule role
                 */

                /**
                 * Constructs a new RoleChangeModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RoleChangeModule.
                 * @implements IRoleChangeModule
                 * @constructor
                 * @param {com.protobuff.data.IRoleChangeModule=} [properties] Properties to set
                 */
                function RoleChangeModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoleChangeModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @instance
                 */
                RoleChangeModule.prototype.type = 0;

                /**
                 * RoleChangeModule role.
                 * @member {com.protobuff.data.IRoleRoomModule|null|undefined} role
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @instance
                 */
                RoleChangeModule.prototype.role = null;

                /**
                 * Creates a new RoleChangeModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @static
                 * @param {com.protobuff.data.IRoleChangeModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RoleChangeModule} RoleChangeModule instance
                 */
                RoleChangeModule.create = function create(properties) {
                    return new RoleChangeModule(properties);
                };

                /**
                 * Encodes the specified RoleChangeModule message. Does not implicitly {@link com.protobuff.data.RoleChangeModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @static
                 * @param {com.protobuff.data.IRoleChangeModule} message RoleChangeModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleChangeModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.role != null && message.hasOwnProperty("role"))
                        $root.com.protobuff.data.RoleRoomModule.encode(message.role, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RoleChangeModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleChangeModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @static
                 * @param {com.protobuff.data.IRoleChangeModule} message RoleChangeModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleChangeModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoleChangeModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RoleChangeModule} RoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleChangeModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RoleChangeModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.role = $root.com.protobuff.data.RoleRoomModule.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoleChangeModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RoleChangeModule} RoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleChangeModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoleChangeModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RoleChangeModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoleChangeModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.role != null && message.hasOwnProperty("role")) {
                        var error = $root.com.protobuff.data.RoleRoomModule.verify(message.role);
                        if (error)
                            return "role." + error;
                    }
                    return null;
                };

                return RoleChangeModule;
            })();

            data.StartModule = (function() {

                /**
                 * Properties of a StartModule.
                 * @memberof com.protobuff.data
                 * @interface IStartModule
                 * @property {Array.<com.protobuff.data.ICardModule>|null} [cardList] StartModule cardList
                 * @property {number|null} [count] StartModule count
                 */

                /**
                 * Constructs a new StartModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a StartModule.
                 * @implements IStartModule
                 * @constructor
                 * @param {com.protobuff.data.IStartModule=} [properties] Properties to set
                 */
                function StartModule(properties) {
                    this.cardList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StartModule cardList.
                 * @member {Array.<com.protobuff.data.ICardModule>} cardList
                 * @memberof com.protobuff.data.StartModule
                 * @instance
                 */
                StartModule.prototype.cardList = $util.emptyArray;

                /**
                 * StartModule count.
                 * @member {number} count
                 * @memberof com.protobuff.data.StartModule
                 * @instance
                 */
                StartModule.prototype.count = 0;

                /**
                 * Creates a new StartModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.StartModule
                 * @static
                 * @param {com.protobuff.data.IStartModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.StartModule} StartModule instance
                 */
                StartModule.create = function create(properties) {
                    return new StartModule(properties);
                };

                /**
                 * Encodes the specified StartModule message. Does not implicitly {@link com.protobuff.data.StartModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.StartModule
                 * @static
                 * @param {com.protobuff.data.IStartModule} message StartModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StartModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.com.protobuff.data.CardModule.encode(message.cardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.count != null && message.hasOwnProperty("count"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                    return writer;
                };

                /**
                 * Encodes the specified StartModule message, length delimited. Does not implicitly {@link com.protobuff.data.StartModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.StartModule
                 * @static
                 * @param {com.protobuff.data.IStartModule} message StartModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StartModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StartModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.StartModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.StartModule} StartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StartModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.StartModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.com.protobuff.data.CardModule.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.count = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StartModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.StartModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.StartModule} StartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StartModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StartModule message.
                 * @function verify
                 * @memberof com.protobuff.data.StartModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StartModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.com.protobuff.data.CardModule.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    if (message.count != null && message.hasOwnProperty("count"))
                        if (!$util.isInteger(message.count))
                            return "count: integer expected";
                    return null;
                };

                return StartModule;
            })();

            data.GrabModule = (function() {

                /**
                 * Properties of a GrabModule.
                 * @memberof com.protobuff.data
                 * @interface IGrabModule
                 * @property {number|null} [roleId] GrabModule roleId
                 * @property {number|null} [type] GrabModule type
                 * @property {number|null} [waitTime] GrabModule waitTime
                 */

                /**
                 * Constructs a new GrabModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a GrabModule.
                 * @implements IGrabModule
                 * @constructor
                 * @param {com.protobuff.data.IGrabModule=} [properties] Properties to set
                 */
                function GrabModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GrabModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.GrabModule
                 * @instance
                 */
                GrabModule.prototype.roleId = 0;

                /**
                 * GrabModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.GrabModule
                 * @instance
                 */
                GrabModule.prototype.type = 0;

                /**
                 * GrabModule waitTime.
                 * @member {number} waitTime
                 * @memberof com.protobuff.data.GrabModule
                 * @instance
                 */
                GrabModule.prototype.waitTime = 0;

                /**
                 * Creates a new GrabModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.GrabModule
                 * @static
                 * @param {com.protobuff.data.IGrabModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.GrabModule} GrabModule instance
                 */
                GrabModule.create = function create(properties) {
                    return new GrabModule(properties);
                };

                /**
                 * Encodes the specified GrabModule message. Does not implicitly {@link com.protobuff.data.GrabModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.GrabModule
                 * @static
                 * @param {com.protobuff.data.IGrabModule} message GrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GrabModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.waitTime);
                    return writer;
                };

                /**
                 * Encodes the specified GrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.GrabModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.GrabModule
                 * @static
                 * @param {com.protobuff.data.IGrabModule} message GrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GrabModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GrabModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.GrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.GrabModule} GrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GrabModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.GrabModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        case 3:
                            message.waitTime = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GrabModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.GrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.GrabModule} GrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GrabModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GrabModule message.
                 * @function verify
                 * @memberof com.protobuff.data.GrabModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GrabModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        if (!$util.isInteger(message.waitTime))
                            return "waitTime: integer expected";
                    return null;
                };

                return GrabModule;
            })();

            data.DoGrabModule = (function() {

                /**
                 * Properties of a DoGrabModule.
                 * @memberof com.protobuff.data
                 * @interface IDoGrabModule
                 * @property {number|null} [type] DoGrabModule type
                 */

                /**
                 * Constructs a new DoGrabModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a DoGrabModule.
                 * @implements IDoGrabModule
                 * @constructor
                 * @param {com.protobuff.data.IDoGrabModule=} [properties] Properties to set
                 */
                function DoGrabModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DoGrabModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.DoGrabModule
                 * @instance
                 */
                DoGrabModule.prototype.type = 0;

                /**
                 * Creates a new DoGrabModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.DoGrabModule
                 * @static
                 * @param {com.protobuff.data.IDoGrabModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.DoGrabModule} DoGrabModule instance
                 */
                DoGrabModule.create = function create(properties) {
                    return new DoGrabModule(properties);
                };

                /**
                 * Encodes the specified DoGrabModule message. Does not implicitly {@link com.protobuff.data.DoGrabModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.DoGrabModule
                 * @static
                 * @param {com.protobuff.data.IDoGrabModule} message DoGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoGrabModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified DoGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.DoGrabModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.DoGrabModule
                 * @static
                 * @param {com.protobuff.data.IDoGrabModule} message DoGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoGrabModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DoGrabModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.DoGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.DoGrabModule} DoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoGrabModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.DoGrabModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DoGrabModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.DoGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.DoGrabModule} DoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoGrabModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DoGrabModule message.
                 * @function verify
                 * @memberof com.protobuff.data.DoGrabModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DoGrabModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return DoGrabModule;
            })();

            data.RoleGrabModule = (function() {

                /**
                 * Properties of a RoleGrabModule.
                 * @memberof com.protobuff.data
                 * @interface IRoleGrabModule
                 * @property {number|null} [roleId] RoleGrabModule roleId
                 * @property {number|null} [type] RoleGrabModule type
                 */

                /**
                 * Constructs a new RoleGrabModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RoleGrabModule.
                 * @implements IRoleGrabModule
                 * @constructor
                 * @param {com.protobuff.data.IRoleGrabModule=} [properties] Properties to set
                 */
                function RoleGrabModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoleGrabModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @instance
                 */
                RoleGrabModule.prototype.roleId = 0;

                /**
                 * RoleGrabModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @instance
                 */
                RoleGrabModule.prototype.type = 0;

                /**
                 * Creates a new RoleGrabModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @static
                 * @param {com.protobuff.data.IRoleGrabModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RoleGrabModule} RoleGrabModule instance
                 */
                RoleGrabModule.create = function create(properties) {
                    return new RoleGrabModule(properties);
                };

                /**
                 * Encodes the specified RoleGrabModule message. Does not implicitly {@link com.protobuff.data.RoleGrabModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @static
                 * @param {com.protobuff.data.IRoleGrabModule} message RoleGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleGrabModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified RoleGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleGrabModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @static
                 * @param {com.protobuff.data.IRoleGrabModule} message RoleGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleGrabModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoleGrabModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RoleGrabModule} RoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleGrabModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RoleGrabModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoleGrabModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RoleGrabModule} RoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleGrabModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoleGrabModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RoleGrabModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoleGrabModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return RoleGrabModule;
            })();

            data.LandModule = (function() {

                /**
                 * Properties of a LandModule.
                 * @memberof com.protobuff.data
                 * @interface ILandModule
                 * @property {number|null} [landId] LandModule landId
                 * @property {Array.<com.protobuff.data.ICardModule>|null} [cardList] LandModule cardList
                 */

                /**
                 * Constructs a new LandModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a LandModule.
                 * @implements ILandModule
                 * @constructor
                 * @param {com.protobuff.data.ILandModule=} [properties] Properties to set
                 */
                function LandModule(properties) {
                    this.cardList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LandModule landId.
                 * @member {number} landId
                 * @memberof com.protobuff.data.LandModule
                 * @instance
                 */
                LandModule.prototype.landId = 0;

                /**
                 * LandModule cardList.
                 * @member {Array.<com.protobuff.data.ICardModule>} cardList
                 * @memberof com.protobuff.data.LandModule
                 * @instance
                 */
                LandModule.prototype.cardList = $util.emptyArray;

                /**
                 * Creates a new LandModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.LandModule
                 * @static
                 * @param {com.protobuff.data.ILandModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.LandModule} LandModule instance
                 */
                LandModule.create = function create(properties) {
                    return new LandModule(properties);
                };

                /**
                 * Encodes the specified LandModule message. Does not implicitly {@link com.protobuff.data.LandModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.LandModule
                 * @static
                 * @param {com.protobuff.data.ILandModule} message LandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LandModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.landId);
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.com.protobuff.data.CardModule.encode(message.cardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified LandModule message, length delimited. Does not implicitly {@link com.protobuff.data.LandModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.LandModule
                 * @static
                 * @param {com.protobuff.data.ILandModule} message LandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LandModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LandModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.LandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.LandModule} LandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LandModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.LandModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.landId = reader.int32();
                            break;
                        case 2:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.com.protobuff.data.CardModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LandModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.LandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.LandModule} LandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LandModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LandModule message.
                 * @function verify
                 * @memberof com.protobuff.data.LandModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LandModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        if (!$util.isInteger(message.landId))
                            return "landId: integer expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.com.protobuff.data.CardModule.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    return null;
                };

                return LandModule;
            })();

            data.RoomCritModule = (function() {

                /**
                 * Properties of a RoomCritModule.
                 * @memberof com.protobuff.data
                 * @interface IRoomCritModule
                 * @property {number|null} [bottom] RoomCritModule bottom
                 * @property {number|null} [point] RoomCritModule point
                 * @property {number|null} [crit] RoomCritModule crit
                 */

                /**
                 * Constructs a new RoomCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RoomCritModule.
                 * @implements IRoomCritModule
                 * @constructor
                 * @param {com.protobuff.data.IRoomCritModule=} [properties] Properties to set
                 */
                function RoomCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoomCritModule bottom.
                 * @member {number} bottom
                 * @memberof com.protobuff.data.RoomCritModule
                 * @instance
                 */
                RoomCritModule.prototype.bottom = 0;

                /**
                 * RoomCritModule point.
                 * @member {number} point
                 * @memberof com.protobuff.data.RoomCritModule
                 * @instance
                 */
                RoomCritModule.prototype.point = 0;

                /**
                 * RoomCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.RoomCritModule
                 * @instance
                 */
                RoomCritModule.prototype.crit = 0;

                /**
                 * Creates a new RoomCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RoomCritModule
                 * @static
                 * @param {com.protobuff.data.IRoomCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RoomCritModule} RoomCritModule instance
                 */
                RoomCritModule.create = function create(properties) {
                    return new RoomCritModule(properties);
                };

                /**
                 * Encodes the specified RoomCritModule message. Does not implicitly {@link com.protobuff.data.RoomCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RoomCritModule
                 * @static
                 * @param {com.protobuff.data.IRoomCritModule} message RoomCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoomCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.bottom != null && message.hasOwnProperty("bottom"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bottom);
                    if (message.point != null && message.hasOwnProperty("point"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.point);
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified RoomCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoomCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RoomCritModule
                 * @static
                 * @param {com.protobuff.data.IRoomCritModule} message RoomCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoomCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoomCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RoomCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RoomCritModule} RoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoomCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RoomCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.bottom = reader.int32();
                            break;
                        case 2:
                            message.point = reader.int32();
                            break;
                        case 3:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoomCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RoomCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RoomCritModule} RoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoomCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoomCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RoomCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoomCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.bottom != null && message.hasOwnProperty("bottom"))
                        if (!$util.isInteger(message.bottom))
                            return "bottom: integer expected";
                    if (message.point != null && message.hasOwnProperty("point"))
                        if (!$util.isInteger(message.point))
                            return "point: integer expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return RoomCritModule;
            })();

            data.GoModule = (function() {

                /**
                 * Properties of a GoModule.
                 * @memberof com.protobuff.data
                 * @interface IGoModule
                 * @property {number|null} [roleId] GoModule roleId
                 * @property {number|null} [type] GoModule type
                 * @property {number|null} [waitTime] GoModule waitTime
                 */

                /**
                 * Constructs a new GoModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a GoModule.
                 * @implements IGoModule
                 * @constructor
                 * @param {com.protobuff.data.IGoModule=} [properties] Properties to set
                 */
                function GoModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GoModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.GoModule
                 * @instance
                 */
                GoModule.prototype.roleId = 0;

                /**
                 * GoModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.GoModule
                 * @instance
                 */
                GoModule.prototype.type = 0;

                /**
                 * GoModule waitTime.
                 * @member {number} waitTime
                 * @memberof com.protobuff.data.GoModule
                 * @instance
                 */
                GoModule.prototype.waitTime = 0;

                /**
                 * Creates a new GoModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.GoModule
                 * @static
                 * @param {com.protobuff.data.IGoModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.GoModule} GoModule instance
                 */
                GoModule.create = function create(properties) {
                    return new GoModule(properties);
                };

                /**
                 * Encodes the specified GoModule message. Does not implicitly {@link com.protobuff.data.GoModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.GoModule
                 * @static
                 * @param {com.protobuff.data.IGoModule} message GoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GoModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.waitTime);
                    return writer;
                };

                /**
                 * Encodes the specified GoModule message, length delimited. Does not implicitly {@link com.protobuff.data.GoModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.GoModule
                 * @static
                 * @param {com.protobuff.data.IGoModule} message GoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GoModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GoModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.GoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.GoModule} GoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GoModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.GoModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        case 3:
                            message.waitTime = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GoModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.GoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.GoModule} GoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GoModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GoModule message.
                 * @function verify
                 * @memberof com.protobuff.data.GoModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GoModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        if (!$util.isInteger(message.waitTime))
                            return "waitTime: integer expected";
                    return null;
                };

                return GoModule;
            })();

            data.StartGoModule = (function() {

                /**
                 * Properties of a StartGoModule.
                 * @memberof com.protobuff.data
                 * @interface IStartGoModule
                 * @property {Array.<com.protobuff.data.ICardModule>|null} [cardList] StartGoModule cardList
                 */

                /**
                 * Constructs a new StartGoModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a StartGoModule.
                 * @implements IStartGoModule
                 * @constructor
                 * @param {com.protobuff.data.IStartGoModule=} [properties] Properties to set
                 */
                function StartGoModule(properties) {
                    this.cardList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StartGoModule cardList.
                 * @member {Array.<com.protobuff.data.ICardModule>} cardList
                 * @memberof com.protobuff.data.StartGoModule
                 * @instance
                 */
                StartGoModule.prototype.cardList = $util.emptyArray;

                /**
                 * Creates a new StartGoModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.StartGoModule
                 * @static
                 * @param {com.protobuff.data.IStartGoModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.StartGoModule} StartGoModule instance
                 */
                StartGoModule.create = function create(properties) {
                    return new StartGoModule(properties);
                };

                /**
                 * Encodes the specified StartGoModule message. Does not implicitly {@link com.protobuff.data.StartGoModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.StartGoModule
                 * @static
                 * @param {com.protobuff.data.IStartGoModule} message StartGoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StartGoModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.com.protobuff.data.CardModule.encode(message.cardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified StartGoModule message, length delimited. Does not implicitly {@link com.protobuff.data.StartGoModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.StartGoModule
                 * @static
                 * @param {com.protobuff.data.IStartGoModule} message StartGoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StartGoModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StartGoModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.StartGoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.StartGoModule} StartGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StartGoModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.StartGoModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.com.protobuff.data.CardModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StartGoModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.StartGoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.StartGoModule} StartGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StartGoModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StartGoModule message.
                 * @function verify
                 * @memberof com.protobuff.data.StartGoModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StartGoModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.com.protobuff.data.CardModule.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    return null;
                };

                return StartGoModule;
            })();

            data.StartGoResultModule = (function() {

                /**
                 * Properties of a StartGoResultModule.
                 * @memberof com.protobuff.data
                 * @interface IStartGoResultModule
                 * @property {number|null} [result] StartGoResultModule result
                 */

                /**
                 * Constructs a new StartGoResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a StartGoResultModule.
                 * @implements IStartGoResultModule
                 * @constructor
                 * @param {com.protobuff.data.IStartGoResultModule=} [properties] Properties to set
                 */
                function StartGoResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StartGoResultModule result.
                 * @member {number} result
                 * @memberof com.protobuff.data.StartGoResultModule
                 * @instance
                 */
                StartGoResultModule.prototype.result = 0;

                /**
                 * Creates a new StartGoResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.StartGoResultModule
                 * @static
                 * @param {com.protobuff.data.IStartGoResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.StartGoResultModule} StartGoResultModule instance
                 */
                StartGoResultModule.create = function create(properties) {
                    return new StartGoResultModule(properties);
                };

                /**
                 * Encodes the specified StartGoResultModule message. Does not implicitly {@link com.protobuff.data.StartGoResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.StartGoResultModule
                 * @static
                 * @param {com.protobuff.data.IStartGoResultModule} message StartGoResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StartGoResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.result != null && message.hasOwnProperty("result"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                    return writer;
                };

                /**
                 * Encodes the specified StartGoResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.StartGoResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.StartGoResultModule
                 * @static
                 * @param {com.protobuff.data.IStartGoResultModule} message StartGoResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StartGoResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StartGoResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.StartGoResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.StartGoResultModule} StartGoResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StartGoResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.StartGoResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.result = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StartGoResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.StartGoResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.StartGoResultModule} StartGoResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StartGoResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StartGoResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.StartGoResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StartGoResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.result != null && message.hasOwnProperty("result"))
                        if (!$util.isInteger(message.result))
                            return "result: integer expected";
                    return null;
                };

                return StartGoResultModule;
            })();

            data.RoleStarGoModule = (function() {

                /**
                 * Properties of a RoleStarGoModule.
                 * @memberof com.protobuff.data
                 * @interface IRoleStarGoModule
                 * @property {number|null} [roleId] RoleStarGoModule roleId
                 * @property {number|null} [type] RoleStarGoModule type
                 * @property {Array.<com.protobuff.data.ICardModule>|null} [cardList] RoleStarGoModule cardList
                 */

                /**
                 * Constructs a new RoleStarGoModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RoleStarGoModule.
                 * @implements IRoleStarGoModule
                 * @constructor
                 * @param {com.protobuff.data.IRoleStarGoModule=} [properties] Properties to set
                 */
                function RoleStarGoModule(properties) {
                    this.cardList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoleStarGoModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @instance
                 */
                RoleStarGoModule.prototype.roleId = 0;

                /**
                 * RoleStarGoModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @instance
                 */
                RoleStarGoModule.prototype.type = 0;

                /**
                 * RoleStarGoModule cardList.
                 * @member {Array.<com.protobuff.data.ICardModule>} cardList
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @instance
                 */
                RoleStarGoModule.prototype.cardList = $util.emptyArray;

                /**
                 * Creates a new RoleStarGoModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @static
                 * @param {com.protobuff.data.IRoleStarGoModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RoleStarGoModule} RoleStarGoModule instance
                 */
                RoleStarGoModule.create = function create(properties) {
                    return new RoleStarGoModule(properties);
                };

                /**
                 * Encodes the specified RoleStarGoModule message. Does not implicitly {@link com.protobuff.data.RoleStarGoModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @static
                 * @param {com.protobuff.data.IRoleStarGoModule} message RoleStarGoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleStarGoModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.com.protobuff.data.CardModule.encode(message.cardList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RoleStarGoModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleStarGoModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @static
                 * @param {com.protobuff.data.IRoleStarGoModule} message RoleStarGoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleStarGoModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoleStarGoModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RoleStarGoModule} RoleStarGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleStarGoModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RoleStarGoModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        case 3:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.com.protobuff.data.CardModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoleStarGoModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RoleStarGoModule} RoleStarGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleStarGoModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoleStarGoModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RoleStarGoModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoleStarGoModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.com.protobuff.data.CardModule.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    return null;
                };

                return RoleStarGoModule;
            })();

            data.ResultModule = (function() {

                /**
                 * Properties of a ResultModule.
                 * @memberof com.protobuff.data
                 * @interface IResultModule
                 * @property {number|null} [result] ResultModule result
                 */

                /**
                 * Constructs a new ResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a ResultModule.
                 * @implements IResultModule
                 * @constructor
                 * @param {com.protobuff.data.IResultModule=} [properties] Properties to set
                 */
                function ResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResultModule result.
                 * @member {number} result
                 * @memberof com.protobuff.data.ResultModule
                 * @instance
                 */
                ResultModule.prototype.result = 0;

                /**
                 * Creates a new ResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.ResultModule
                 * @static
                 * @param {com.protobuff.data.IResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.ResultModule} ResultModule instance
                 */
                ResultModule.create = function create(properties) {
                    return new ResultModule(properties);
                };

                /**
                 * Encodes the specified ResultModule message. Does not implicitly {@link com.protobuff.data.ResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.ResultModule
                 * @static
                 * @param {com.protobuff.data.IResultModule} message ResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.result != null && message.hasOwnProperty("result"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                    return writer;
                };

                /**
                 * Encodes the specified ResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.ResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.ResultModule
                 * @static
                 * @param {com.protobuff.data.IResultModule} message ResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.ResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.ResultModule} ResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.ResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.result = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.ResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.ResultModule} ResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.ResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.result != null && message.hasOwnProperty("result"))
                        if (!$util.isInteger(message.result))
                            return "result: integer expected";
                    return null;
                };

                return ResultModule;
            })();

            data.SettlementModule = (function() {

                /**
                 * Properties of a SettlementModule.
                 * @memberof com.protobuff.data
                 * @interface ISettlementModule
                 * @property {number|null} [isSingle] SettlementModule isSingle
                 * @property {number|null} [isLand] SettlementModule isLand
                 * @property {Array.<com.protobuff.data.IRoleRoomModule>|null} [roleList] SettlementModule roleList
                 */

                /**
                 * Constructs a new SettlementModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a SettlementModule.
                 * @implements ISettlementModule
                 * @constructor
                 * @param {com.protobuff.data.ISettlementModule=} [properties] Properties to set
                 */
                function SettlementModule(properties) {
                    this.roleList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SettlementModule isSingle.
                 * @member {number} isSingle
                 * @memberof com.protobuff.data.SettlementModule
                 * @instance
                 */
                SettlementModule.prototype.isSingle = 0;

                /**
                 * SettlementModule isLand.
                 * @member {number} isLand
                 * @memberof com.protobuff.data.SettlementModule
                 * @instance
                 */
                SettlementModule.prototype.isLand = 0;

                /**
                 * SettlementModule roleList.
                 * @member {Array.<com.protobuff.data.IRoleRoomModule>} roleList
                 * @memberof com.protobuff.data.SettlementModule
                 * @instance
                 */
                SettlementModule.prototype.roleList = $util.emptyArray;

                /**
                 * Creates a new SettlementModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.SettlementModule
                 * @static
                 * @param {com.protobuff.data.ISettlementModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.SettlementModule} SettlementModule instance
                 */
                SettlementModule.create = function create(properties) {
                    return new SettlementModule(properties);
                };

                /**
                 * Encodes the specified SettlementModule message. Does not implicitly {@link com.protobuff.data.SettlementModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.SettlementModule
                 * @static
                 * @param {com.protobuff.data.ISettlementModule} message SettlementModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SettlementModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isSingle != null && message.hasOwnProperty("isSingle"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isSingle);
                    if (message.isLand != null && message.hasOwnProperty("isLand"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.isLand);
                    if (message.roleList != null && message.roleList.length)
                        for (var i = 0; i < message.roleList.length; ++i)
                            $root.com.protobuff.data.RoleRoomModule.encode(message.roleList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SettlementModule message, length delimited. Does not implicitly {@link com.protobuff.data.SettlementModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.SettlementModule
                 * @static
                 * @param {com.protobuff.data.ISettlementModule} message SettlementModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SettlementModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SettlementModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.SettlementModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.SettlementModule} SettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SettlementModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.SettlementModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.isSingle = reader.int32();
                            break;
                        case 2:
                            message.isLand = reader.int32();
                            break;
                        case 3:
                            if (!(message.roleList && message.roleList.length))
                                message.roleList = [];
                            message.roleList.push($root.com.protobuff.data.RoleRoomModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SettlementModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.SettlementModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.SettlementModule} SettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SettlementModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SettlementModule message.
                 * @function verify
                 * @memberof com.protobuff.data.SettlementModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SettlementModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isSingle != null && message.hasOwnProperty("isSingle"))
                        if (!$util.isInteger(message.isSingle))
                            return "isSingle: integer expected";
                    if (message.isLand != null && message.hasOwnProperty("isLand"))
                        if (!$util.isInteger(message.isLand))
                            return "isLand: integer expected";
                    if (message.roleList != null && message.hasOwnProperty("roleList")) {
                        if (!Array.isArray(message.roleList))
                            return "roleList: array expected";
                        for (var i = 0; i < message.roleList.length; ++i) {
                            var error = $root.com.protobuff.data.RoleRoomModule.verify(message.roleList[i]);
                            if (error)
                                return "roleList." + error;
                        }
                    }
                    return null;
                };

                return SettlementModule;
            })();

            data.RolePrepareModule = (function() {

                /**
                 * Properties of a RolePrepareModule.
                 * @memberof com.protobuff.data
                 * @interface IRolePrepareModule
                 * @property {number|null} [status] RolePrepareModule status
                 */

                /**
                 * Constructs a new RolePrepareModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RolePrepareModule.
                 * @implements IRolePrepareModule
                 * @constructor
                 * @param {com.protobuff.data.IRolePrepareModule=} [properties] Properties to set
                 */
                function RolePrepareModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RolePrepareModule status.
                 * @member {number} status
                 * @memberof com.protobuff.data.RolePrepareModule
                 * @instance
                 */
                RolePrepareModule.prototype.status = 0;

                /**
                 * Creates a new RolePrepareModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RolePrepareModule
                 * @static
                 * @param {com.protobuff.data.IRolePrepareModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RolePrepareModule} RolePrepareModule instance
                 */
                RolePrepareModule.create = function create(properties) {
                    return new RolePrepareModule(properties);
                };

                /**
                 * Encodes the specified RolePrepareModule message. Does not implicitly {@link com.protobuff.data.RolePrepareModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RolePrepareModule
                 * @static
                 * @param {com.protobuff.data.IRolePrepareModule} message RolePrepareModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RolePrepareModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified RolePrepareModule message, length delimited. Does not implicitly {@link com.protobuff.data.RolePrepareModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RolePrepareModule
                 * @static
                 * @param {com.protobuff.data.IRolePrepareModule} message RolePrepareModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RolePrepareModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RolePrepareModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RolePrepareModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RolePrepareModule} RolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RolePrepareModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RolePrepareModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RolePrepareModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RolePrepareModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RolePrepareModule} RolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RolePrepareModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RolePrepareModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RolePrepareModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RolePrepareModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    return null;
                };

                return RolePrepareModule;
            })();

            data.AddCritModule = (function() {

                /**
                 * Properties of an AddCritModule.
                 * @memberof com.protobuff.data
                 * @interface IAddCritModule
                 * @property {number|null} [roleId] AddCritModule roleId
                 * @property {number|null} [waitTime] AddCritModule waitTime
                 */

                /**
                 * Constructs a new AddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents an AddCritModule.
                 * @implements IAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.IAddCritModule=} [properties] Properties to set
                 */
                function AddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AddCritModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.AddCritModule
                 * @instance
                 */
                AddCritModule.prototype.roleId = 0;

                /**
                 * AddCritModule waitTime.
                 * @member {number} waitTime
                 * @memberof com.protobuff.data.AddCritModule
                 * @instance
                 */
                AddCritModule.prototype.waitTime = 0;

                /**
                 * Creates a new AddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.AddCritModule
                 * @static
                 * @param {com.protobuff.data.IAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.AddCritModule} AddCritModule instance
                 */
                AddCritModule.create = function create(properties) {
                    return new AddCritModule(properties);
                };

                /**
                 * Encodes the specified AddCritModule message. Does not implicitly {@link com.protobuff.data.AddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.AddCritModule
                 * @static
                 * @param {com.protobuff.data.IAddCritModule} message AddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.waitTime);
                    return writer;
                };

                /**
                 * Encodes the specified AddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.AddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.AddCritModule
                 * @static
                 * @param {com.protobuff.data.IAddCritModule} message AddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.AddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.AddCritModule} AddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.AddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.waitTime = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.AddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.AddCritModule} AddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.AddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        if (!$util.isInteger(message.waitTime))
                            return "waitTime: integer expected";
                    return null;
                };

                return AddCritModule;
            })();

            data.DoAddCritModule = (function() {

                /**
                 * Properties of a DoAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface IDoAddCritModule
                 * @property {number|null} [crit] DoAddCritModule crit
                 */

                /**
                 * Constructs a new DoAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a DoAddCritModule.
                 * @implements IDoAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.IDoAddCritModule=} [properties] Properties to set
                 */
                function DoAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DoAddCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.DoAddCritModule
                 * @instance
                 */
                DoAddCritModule.prototype.crit = 0;

                /**
                 * Creates a new DoAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.DoAddCritModule
                 * @static
                 * @param {com.protobuff.data.IDoAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.DoAddCritModule} DoAddCritModule instance
                 */
                DoAddCritModule.create = function create(properties) {
                    return new DoAddCritModule(properties);
                };

                /**
                 * Encodes the specified DoAddCritModule message. Does not implicitly {@link com.protobuff.data.DoAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.DoAddCritModule
                 * @static
                 * @param {com.protobuff.data.IDoAddCritModule} message DoAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified DoAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.DoAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.DoAddCritModule
                 * @static
                 * @param {com.protobuff.data.IDoAddCritModule} message DoAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DoAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.DoAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.DoAddCritModule} DoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.DoAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DoAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.DoAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.DoAddCritModule} DoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DoAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.DoAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DoAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return DoAddCritModule;
            })();

            data.RoleAddCritModule = (function() {

                /**
                 * Properties of a RoleAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface IRoleAddCritModule
                 * @property {number|null} [roleId] RoleAddCritModule roleId
                 * @property {number|null} [crit] RoleAddCritModule crit
                 */

                /**
                 * Constructs a new RoleAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RoleAddCritModule.
                 * @implements IRoleAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.IRoleAddCritModule=} [properties] Properties to set
                 */
                function RoleAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoleAddCritModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @instance
                 */
                RoleAddCritModule.prototype.roleId = 0;

                /**
                 * RoleAddCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @instance
                 */
                RoleAddCritModule.prototype.crit = 0;

                /**
                 * Creates a new RoleAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.IRoleAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RoleAddCritModule} RoleAddCritModule instance
                 */
                RoleAddCritModule.create = function create(properties) {
                    return new RoleAddCritModule(properties);
                };

                /**
                 * Encodes the specified RoleAddCritModule message. Does not implicitly {@link com.protobuff.data.RoleAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.IRoleAddCritModule} message RoleAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified RoleAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.IRoleAddCritModule} message RoleAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoleAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RoleAddCritModule} RoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RoleAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoleAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RoleAddCritModule} RoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoleAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RoleAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoleAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return RoleAddCritModule;
            })();

            data.SendChatMessageModule = (function() {

                /**
                 * Properties of a SendChatMessageModule.
                 * @memberof com.protobuff.data
                 * @interface ISendChatMessageModule
                 * @property {number|null} [chatType] SendChatMessageModule chatType
                 * @property {number|null} [rId] SendChatMessageModule rId
                 * @property {string|null} [content] SendChatMessageModule content
                 */

                /**
                 * Constructs a new SendChatMessageModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a SendChatMessageModule.
                 * @implements ISendChatMessageModule
                 * @constructor
                 * @param {com.protobuff.data.ISendChatMessageModule=} [properties] Properties to set
                 */
                function SendChatMessageModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SendChatMessageModule chatType.
                 * @member {number} chatType
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @instance
                 */
                SendChatMessageModule.prototype.chatType = 0;

                /**
                 * SendChatMessageModule rId.
                 * @member {number} rId
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @instance
                 */
                SendChatMessageModule.prototype.rId = 0;

                /**
                 * SendChatMessageModule content.
                 * @member {string} content
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @instance
                 */
                SendChatMessageModule.prototype.content = "";

                /**
                 * Creates a new SendChatMessageModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @static
                 * @param {com.protobuff.data.ISendChatMessageModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.SendChatMessageModule} SendChatMessageModule instance
                 */
                SendChatMessageModule.create = function create(properties) {
                    return new SendChatMessageModule(properties);
                };

                /**
                 * Encodes the specified SendChatMessageModule message. Does not implicitly {@link com.protobuff.data.SendChatMessageModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @static
                 * @param {com.protobuff.data.ISendChatMessageModule} message SendChatMessageModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SendChatMessageModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
                    if (message.rId != null && message.hasOwnProperty("rId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rId);
                    if (message.content != null && message.hasOwnProperty("content"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                    return writer;
                };

                /**
                 * Encodes the specified SendChatMessageModule message, length delimited. Does not implicitly {@link com.protobuff.data.SendChatMessageModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @static
                 * @param {com.protobuff.data.ISendChatMessageModule} message SendChatMessageModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SendChatMessageModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SendChatMessageModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.SendChatMessageModule} SendChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SendChatMessageModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.SendChatMessageModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.chatType = reader.int32();
                            break;
                        case 2:
                            message.rId = reader.int32();
                            break;
                        case 3:
                            message.content = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SendChatMessageModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.SendChatMessageModule} SendChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SendChatMessageModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SendChatMessageModule message.
                 * @function verify
                 * @memberof com.protobuff.data.SendChatMessageModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SendChatMessageModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        if (!$util.isInteger(message.chatType))
                            return "chatType: integer expected";
                    if (message.rId != null && message.hasOwnProperty("rId"))
                        if (!$util.isInteger(message.rId))
                            return "rId: integer expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    return null;
                };

                return SendChatMessageModule;
            })();

            data.ReceiveChatMessageModule = (function() {

                /**
                 * Properties of a ReceiveChatMessageModule.
                 * @memberof com.protobuff.data
                 * @interface IReceiveChatMessageModule
                 * @property {number|null} [chatType] ReceiveChatMessageModule chatType
                 * @property {number|null} [sId] ReceiveChatMessageModule sId
                 * @property {string|null} [sNickName] ReceiveChatMessageModule sNickName
                 * @property {number|null} [rId] ReceiveChatMessageModule rId
                 * @property {string|null} [content] ReceiveChatMessageModule content
                 */

                /**
                 * Constructs a new ReceiveChatMessageModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a ReceiveChatMessageModule.
                 * @implements IReceiveChatMessageModule
                 * @constructor
                 * @param {com.protobuff.data.IReceiveChatMessageModule=} [properties] Properties to set
                 */
                function ReceiveChatMessageModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReceiveChatMessageModule chatType.
                 * @member {number} chatType
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @instance
                 */
                ReceiveChatMessageModule.prototype.chatType = 0;

                /**
                 * ReceiveChatMessageModule sId.
                 * @member {number} sId
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @instance
                 */
                ReceiveChatMessageModule.prototype.sId = 0;

                /**
                 * ReceiveChatMessageModule sNickName.
                 * @member {string} sNickName
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @instance
                 */
                ReceiveChatMessageModule.prototype.sNickName = "";

                /**
                 * ReceiveChatMessageModule rId.
                 * @member {number} rId
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @instance
                 */
                ReceiveChatMessageModule.prototype.rId = 0;

                /**
                 * ReceiveChatMessageModule content.
                 * @member {string} content
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @instance
                 */
                ReceiveChatMessageModule.prototype.content = "";

                /**
                 * Creates a new ReceiveChatMessageModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @static
                 * @param {com.protobuff.data.IReceiveChatMessageModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.ReceiveChatMessageModule} ReceiveChatMessageModule instance
                 */
                ReceiveChatMessageModule.create = function create(properties) {
                    return new ReceiveChatMessageModule(properties);
                };

                /**
                 * Encodes the specified ReceiveChatMessageModule message. Does not implicitly {@link com.protobuff.data.ReceiveChatMessageModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @static
                 * @param {com.protobuff.data.IReceiveChatMessageModule} message ReceiveChatMessageModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiveChatMessageModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
                    if (message.sId != null && message.hasOwnProperty("sId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sId);
                    if (message.sNickName != null && message.hasOwnProperty("sNickName"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.sNickName);
                    if (message.rId != null && message.hasOwnProperty("rId"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rId);
                    if (message.content != null && message.hasOwnProperty("content"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
                    return writer;
                };

                /**
                 * Encodes the specified ReceiveChatMessageModule message, length delimited. Does not implicitly {@link com.protobuff.data.ReceiveChatMessageModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @static
                 * @param {com.protobuff.data.IReceiveChatMessageModule} message ReceiveChatMessageModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReceiveChatMessageModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReceiveChatMessageModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.ReceiveChatMessageModule} ReceiveChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReceiveChatMessageModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.ReceiveChatMessageModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.chatType = reader.int32();
                            break;
                        case 2:
                            message.sId = reader.int32();
                            break;
                        case 3:
                            message.sNickName = reader.string();
                            break;
                        case 4:
                            message.rId = reader.int32();
                            break;
                        case 5:
                            message.content = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReceiveChatMessageModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.ReceiveChatMessageModule} ReceiveChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReceiveChatMessageModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReceiveChatMessageModule message.
                 * @function verify
                 * @memberof com.protobuff.data.ReceiveChatMessageModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReceiveChatMessageModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chatType != null && message.hasOwnProperty("chatType"))
                        if (!$util.isInteger(message.chatType))
                            return "chatType: integer expected";
                    if (message.sId != null && message.hasOwnProperty("sId"))
                        if (!$util.isInteger(message.sId))
                            return "sId: integer expected";
                    if (message.sNickName != null && message.hasOwnProperty("sNickName"))
                        if (!$util.isString(message.sNickName))
                            return "sNickName: string expected";
                    if (message.rId != null && message.hasOwnProperty("rId"))
                        if (!$util.isInteger(message.rId))
                            return "rId: integer expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    return null;
                };

                return ReceiveChatMessageModule;
            })();

            data.TipsModule = (function() {

                /**
                 * Properties of a TipsModule.
                 * @memberof com.protobuff.data
                 * @interface ITipsModule
                 * @property {number|null} [type] TipsModule type
                 * @property {string|null} [tips] TipsModule tips
                 */

                /**
                 * Constructs a new TipsModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a TipsModule.
                 * @implements ITipsModule
                 * @constructor
                 * @param {com.protobuff.data.ITipsModule=} [properties] Properties to set
                 */
                function TipsModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TipsModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.TipsModule
                 * @instance
                 */
                TipsModule.prototype.type = 0;

                /**
                 * TipsModule tips.
                 * @member {string} tips
                 * @memberof com.protobuff.data.TipsModule
                 * @instance
                 */
                TipsModule.prototype.tips = "";

                /**
                 * Creates a new TipsModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.TipsModule
                 * @static
                 * @param {com.protobuff.data.ITipsModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.TipsModule} TipsModule instance
                 */
                TipsModule.create = function create(properties) {
                    return new TipsModule(properties);
                };

                /**
                 * Encodes the specified TipsModule message. Does not implicitly {@link com.protobuff.data.TipsModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.TipsModule
                 * @static
                 * @param {com.protobuff.data.ITipsModule} message TipsModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TipsModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.tips != null && message.hasOwnProperty("tips"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.tips);
                    return writer;
                };

                /**
                 * Encodes the specified TipsModule message, length delimited. Does not implicitly {@link com.protobuff.data.TipsModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.TipsModule
                 * @static
                 * @param {com.protobuff.data.ITipsModule} message TipsModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TipsModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TipsModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.TipsModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.TipsModule} TipsModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TipsModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.TipsModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.tips = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TipsModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.TipsModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.TipsModule} TipsModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TipsModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TipsModule message.
                 * @function verify
                 * @memberof com.protobuff.data.TipsModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TipsModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.tips != null && message.hasOwnProperty("tips"))
                        if (!$util.isString(message.tips))
                            return "tips: string expected";
                    return null;
                };

                return TipsModule;
            })();

            data.ResultErrorModule = (function() {

                /**
                 * Properties of a ResultErrorModule.
                 * @memberof com.protobuff.data
                 * @interface IResultErrorModule
                 * @property {number|null} [packetType] ResultErrorModule packetType
                 * @property {number|null} [errorCode] ResultErrorModule errorCode
                 */

                /**
                 * Constructs a new ResultErrorModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a ResultErrorModule.
                 * @implements IResultErrorModule
                 * @constructor
                 * @param {com.protobuff.data.IResultErrorModule=} [properties] Properties to set
                 */
                function ResultErrorModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ResultErrorModule packetType.
                 * @member {number} packetType
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @instance
                 */
                ResultErrorModule.prototype.packetType = 0;

                /**
                 * ResultErrorModule errorCode.
                 * @member {number} errorCode
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @instance
                 */
                ResultErrorModule.prototype.errorCode = 0;

                /**
                 * Creates a new ResultErrorModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @static
                 * @param {com.protobuff.data.IResultErrorModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.ResultErrorModule} ResultErrorModule instance
                 */
                ResultErrorModule.create = function create(properties) {
                    return new ResultErrorModule(properties);
                };

                /**
                 * Encodes the specified ResultErrorModule message. Does not implicitly {@link com.protobuff.data.ResultErrorModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @static
                 * @param {com.protobuff.data.IResultErrorModule} message ResultErrorModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResultErrorModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packetType != null && message.hasOwnProperty("packetType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.packetType);
                    if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCode);
                    return writer;
                };

                /**
                 * Encodes the specified ResultErrorModule message, length delimited. Does not implicitly {@link com.protobuff.data.ResultErrorModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @static
                 * @param {com.protobuff.data.IResultErrorModule} message ResultErrorModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResultErrorModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ResultErrorModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.ResultErrorModule} ResultErrorModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResultErrorModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.ResultErrorModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packetType = reader.int32();
                            break;
                        case 2:
                            message.errorCode = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ResultErrorModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.ResultErrorModule} ResultErrorModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResultErrorModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ResultErrorModule message.
                 * @function verify
                 * @memberof com.protobuff.data.ResultErrorModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResultErrorModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.packetType != null && message.hasOwnProperty("packetType"))
                        if (!$util.isInteger(message.packetType))
                            return "packetType: integer expected";
                    if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                        if (!$util.isInteger(message.errorCode))
                            return "errorCode: integer expected";
                    return null;
                };

                return ResultErrorModule;
            })();

            data.HeartModule = (function() {

                /**
                 * Properties of a HeartModule.
                 * @memberof com.protobuff.data
                 * @interface IHeartModule
                 */

                /**
                 * Constructs a new HeartModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HeartModule.
                 * @implements IHeartModule
                 * @constructor
                 * @param {com.protobuff.data.IHeartModule=} [properties] Properties to set
                 */
                function HeartModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new HeartModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HeartModule
                 * @static
                 * @param {com.protobuff.data.IHeartModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HeartModule} HeartModule instance
                 */
                HeartModule.create = function create(properties) {
                    return new HeartModule(properties);
                };

                /**
                 * Encodes the specified HeartModule message. Does not implicitly {@link com.protobuff.data.HeartModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HeartModule
                 * @static
                 * @param {com.protobuff.data.IHeartModule} message HeartModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeartModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified HeartModule message, length delimited. Does not implicitly {@link com.protobuff.data.HeartModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HeartModule
                 * @static
                 * @param {com.protobuff.data.IHeartModule} message HeartModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeartModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HeartModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HeartModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HeartModule} HeartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeartModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HeartModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HeartModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HeartModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HeartModule} HeartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeartModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HeartModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HeartModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HeartModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return HeartModule;
            })();

            data.HeartResultModule = (function() {

                /**
                 * Properties of a HeartResultModule.
                 * @memberof com.protobuff.data
                 * @interface IHeartResultModule
                 * @property {number|Long|null} [system_currtime] HeartResultModule system_currtime
                 */

                /**
                 * Constructs a new HeartResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HeartResultModule.
                 * @implements IHeartResultModule
                 * @constructor
                 * @param {com.protobuff.data.IHeartResultModule=} [properties] Properties to set
                 */
                function HeartResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HeartResultModule system_currtime.
                 * @member {number|Long} system_currtime
                 * @memberof com.protobuff.data.HeartResultModule
                 * @instance
                 */
                HeartResultModule.prototype.system_currtime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new HeartResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HeartResultModule
                 * @static
                 * @param {com.protobuff.data.IHeartResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HeartResultModule} HeartResultModule instance
                 */
                HeartResultModule.create = function create(properties) {
                    return new HeartResultModule(properties);
                };

                /**
                 * Encodes the specified HeartResultModule message. Does not implicitly {@link com.protobuff.data.HeartResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HeartResultModule
                 * @static
                 * @param {com.protobuff.data.IHeartResultModule} message HeartResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeartResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.system_currtime != null && message.hasOwnProperty("system_currtime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.system_currtime);
                    return writer;
                };

                /**
                 * Encodes the specified HeartResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.HeartResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HeartResultModule
                 * @static
                 * @param {com.protobuff.data.IHeartResultModule} message HeartResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeartResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HeartResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HeartResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HeartResultModule} HeartResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeartResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HeartResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.system_currtime = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HeartResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HeartResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HeartResultModule} HeartResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeartResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HeartResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HeartResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HeartResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.system_currtime != null && message.hasOwnProperty("system_currtime"))
                        if (!$util.isInteger(message.system_currtime) && !(message.system_currtime && $util.isInteger(message.system_currtime.low) && $util.isInteger(message.system_currtime.high)))
                            return "system_currtime: integer|Long expected";
                    return null;
                };

                return HeartResultModule;
            })();

            data.CurrencyInfoModule = (function() {

                /**
                 * Properties of a CurrencyInfoModule.
                 * @memberof com.protobuff.data
                 * @interface ICurrencyInfoModule
                 * @property {number|null} [gold] CurrencyInfoModule gold
                 * @property {number|null} [copper] CurrencyInfoModule copper
                 */

                /**
                 * Constructs a new CurrencyInfoModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a CurrencyInfoModule.
                 * @implements ICurrencyInfoModule
                 * @constructor
                 * @param {com.protobuff.data.ICurrencyInfoModule=} [properties] Properties to set
                 */
                function CurrencyInfoModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CurrencyInfoModule gold.
                 * @member {number} gold
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @instance
                 */
                CurrencyInfoModule.prototype.gold = 0;

                /**
                 * CurrencyInfoModule copper.
                 * @member {number} copper
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @instance
                 */
                CurrencyInfoModule.prototype.copper = 0;

                /**
                 * Creates a new CurrencyInfoModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @static
                 * @param {com.protobuff.data.ICurrencyInfoModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.CurrencyInfoModule} CurrencyInfoModule instance
                 */
                CurrencyInfoModule.create = function create(properties) {
                    return new CurrencyInfoModule(properties);
                };

                /**
                 * Encodes the specified CurrencyInfoModule message. Does not implicitly {@link com.protobuff.data.CurrencyInfoModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @static
                 * @param {com.protobuff.data.ICurrencyInfoModule} message CurrencyInfoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CurrencyInfoModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.gold != null && message.hasOwnProperty("gold"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gold);
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.copper);
                    return writer;
                };

                /**
                 * Encodes the specified CurrencyInfoModule message, length delimited. Does not implicitly {@link com.protobuff.data.CurrencyInfoModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @static
                 * @param {com.protobuff.data.ICurrencyInfoModule} message CurrencyInfoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CurrencyInfoModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CurrencyInfoModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.CurrencyInfoModule} CurrencyInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CurrencyInfoModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.CurrencyInfoModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.gold = reader.int32();
                            break;
                        case 3:
                            message.copper = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CurrencyInfoModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.CurrencyInfoModule} CurrencyInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CurrencyInfoModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CurrencyInfoModule message.
                 * @function verify
                 * @memberof com.protobuff.data.CurrencyInfoModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CurrencyInfoModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.gold != null && message.hasOwnProperty("gold"))
                        if (!$util.isInteger(message.gold))
                            return "gold: integer expected";
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        if (!$util.isInteger(message.copper))
                            return "copper: integer expected";
                    return null;
                };

                return CurrencyInfoModule;
            })();

            data.KickOffRoleModule = (function() {

                /**
                 * Properties of a KickOffRoleModule.
                 * @memberof com.protobuff.data
                 * @interface IKickOffRoleModule
                 * @property {number|null} [kickType] KickOffRoleModule kickType
                 */

                /**
                 * Constructs a new KickOffRoleModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a KickOffRoleModule.
                 * @implements IKickOffRoleModule
                 * @constructor
                 * @param {com.protobuff.data.IKickOffRoleModule=} [properties] Properties to set
                 */
                function KickOffRoleModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * KickOffRoleModule kickType.
                 * @member {number} kickType
                 * @memberof com.protobuff.data.KickOffRoleModule
                 * @instance
                 */
                KickOffRoleModule.prototype.kickType = 0;

                /**
                 * Creates a new KickOffRoleModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.KickOffRoleModule
                 * @static
                 * @param {com.protobuff.data.IKickOffRoleModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.KickOffRoleModule} KickOffRoleModule instance
                 */
                KickOffRoleModule.create = function create(properties) {
                    return new KickOffRoleModule(properties);
                };

                /**
                 * Encodes the specified KickOffRoleModule message. Does not implicitly {@link com.protobuff.data.KickOffRoleModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.KickOffRoleModule
                 * @static
                 * @param {com.protobuff.data.IKickOffRoleModule} message KickOffRoleModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                KickOffRoleModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kickType != null && message.hasOwnProperty("kickType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.kickType);
                    return writer;
                };

                /**
                 * Encodes the specified KickOffRoleModule message, length delimited. Does not implicitly {@link com.protobuff.data.KickOffRoleModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.KickOffRoleModule
                 * @static
                 * @param {com.protobuff.data.IKickOffRoleModule} message KickOffRoleModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                KickOffRoleModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a KickOffRoleModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.KickOffRoleModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.KickOffRoleModule} KickOffRoleModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                KickOffRoleModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.KickOffRoleModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.kickType = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a KickOffRoleModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.KickOffRoleModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.KickOffRoleModule} KickOffRoleModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                KickOffRoleModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a KickOffRoleModule message.
                 * @function verify
                 * @memberof com.protobuff.data.KickOffRoleModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                KickOffRoleModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kickType != null && message.hasOwnProperty("kickType"))
                        if (!$util.isInteger(message.kickType))
                            return "kickType: integer expected";
                    return null;
                };

                return KickOffRoleModule;
            })();

            data.DisConnectionModule = (function() {

                /**
                 * Properties of a DisConnectionModule.
                 * @memberof com.protobuff.data
                 * @interface IDisConnectionModule
                 */

                /**
                 * Constructs a new DisConnectionModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a DisConnectionModule.
                 * @implements IDisConnectionModule
                 * @constructor
                 * @param {com.protobuff.data.IDisConnectionModule=} [properties] Properties to set
                 */
                function DisConnectionModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DisConnectionModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.DisConnectionModule
                 * @static
                 * @param {com.protobuff.data.IDisConnectionModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.DisConnectionModule} DisConnectionModule instance
                 */
                DisConnectionModule.create = function create(properties) {
                    return new DisConnectionModule(properties);
                };

                /**
                 * Encodes the specified DisConnectionModule message. Does not implicitly {@link com.protobuff.data.DisConnectionModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.DisConnectionModule
                 * @static
                 * @param {com.protobuff.data.IDisConnectionModule} message DisConnectionModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DisConnectionModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DisConnectionModule message, length delimited. Does not implicitly {@link com.protobuff.data.DisConnectionModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.DisConnectionModule
                 * @static
                 * @param {com.protobuff.data.IDisConnectionModule} message DisConnectionModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DisConnectionModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DisConnectionModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.DisConnectionModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.DisConnectionModule} DisConnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DisConnectionModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.DisConnectionModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DisConnectionModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.DisConnectionModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.DisConnectionModule} DisConnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DisConnectionModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DisConnectionModule message.
                 * @function verify
                 * @memberof com.protobuff.data.DisConnectionModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DisConnectionModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return DisConnectionModule;
            })();

            data.LoginModule = (function() {

                /**
                 * Properties of a LoginModule.
                 * @memberof com.protobuff.data
                 * @interface ILoginModule
                 * @property {string|null} [openId] LoginModule openId
                 * @property {string|null} [channelId] LoginModule channelId
                 * @property {string|null} [nickname] LoginModule nickname
                 * @property {string|null} [imgurl] LoginModule imgurl
                 * @property {number|null} [sex] LoginModule sex
                 * @property {string|null} [device] LoginModule device
                 */

                /**
                 * Constructs a new LoginModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a LoginModule.
                 * @implements ILoginModule
                 * @constructor
                 * @param {com.protobuff.data.ILoginModule=} [properties] Properties to set
                 */
                function LoginModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LoginModule openId.
                 * @member {string} openId
                 * @memberof com.protobuff.data.LoginModule
                 * @instance
                 */
                LoginModule.prototype.openId = "";

                /**
                 * LoginModule channelId.
                 * @member {string} channelId
                 * @memberof com.protobuff.data.LoginModule
                 * @instance
                 */
                LoginModule.prototype.channelId = "";

                /**
                 * LoginModule nickname.
                 * @member {string} nickname
                 * @memberof com.protobuff.data.LoginModule
                 * @instance
                 */
                LoginModule.prototype.nickname = "";

                /**
                 * LoginModule imgurl.
                 * @member {string} imgurl
                 * @memberof com.protobuff.data.LoginModule
                 * @instance
                 */
                LoginModule.prototype.imgurl = "";

                /**
                 * LoginModule sex.
                 * @member {number} sex
                 * @memberof com.protobuff.data.LoginModule
                 * @instance
                 */
                LoginModule.prototype.sex = 0;

                /**
                 * LoginModule device.
                 * @member {string} device
                 * @memberof com.protobuff.data.LoginModule
                 * @instance
                 */
                LoginModule.prototype.device = "";

                /**
                 * Creates a new LoginModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.LoginModule
                 * @static
                 * @param {com.protobuff.data.ILoginModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.LoginModule} LoginModule instance
                 */
                LoginModule.create = function create(properties) {
                    return new LoginModule(properties);
                };

                /**
                 * Encodes the specified LoginModule message. Does not implicitly {@link com.protobuff.data.LoginModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.LoginModule
                 * @static
                 * @param {com.protobuff.data.ILoginModule} message LoginModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.openId != null && message.hasOwnProperty("openId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.openId);
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelId);
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.imgurl);
                    if (message.sex != null && message.hasOwnProperty("sex"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sex);
                    if (message.device != null && message.hasOwnProperty("device"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.device);
                    return writer;
                };

                /**
                 * Encodes the specified LoginModule message, length delimited. Does not implicitly {@link com.protobuff.data.LoginModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.LoginModule
                 * @static
                 * @param {com.protobuff.data.ILoginModule} message LoginModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LoginModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.LoginModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.LoginModule} LoginModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.LoginModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.openId = reader.string();
                            break;
                        case 2:
                            message.channelId = reader.string();
                            break;
                        case 3:
                            message.nickname = reader.string();
                            break;
                        case 4:
                            message.imgurl = reader.string();
                            break;
                        case 5:
                            message.sex = reader.int32();
                            break;
                        case 8:
                            message.device = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LoginModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.LoginModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.LoginModule} LoginModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LoginModule message.
                 * @function verify
                 * @memberof com.protobuff.data.LoginModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LoginModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.openId != null && message.hasOwnProperty("openId"))
                        if (!$util.isString(message.openId))
                            return "openId: string expected";
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (!$util.isString(message.channelId))
                            return "channelId: string expected";
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        if (!$util.isString(message.nickname))
                            return "nickname: string expected";
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        if (!$util.isString(message.imgurl))
                            return "imgurl: string expected";
                    if (message.sex != null && message.hasOwnProperty("sex"))
                        if (!$util.isInteger(message.sex))
                            return "sex: integer expected";
                    if (message.device != null && message.hasOwnProperty("device"))
                        if (!$util.isString(message.device))
                            return "device: string expected";
                    return null;
                };

                return LoginModule;
            })();

            data.LoginResultModule = (function() {

                /**
                 * Properties of a LoginResultModule.
                 * @memberof com.protobuff.data
                 * @interface ILoginResultModule
                 * @property {number|null} [loginResult] LoginResultModule loginResult
                 * @property {string|null} [loginDesc] LoginResultModule loginDesc
                 */

                /**
                 * Constructs a new LoginResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a LoginResultModule.
                 * @implements ILoginResultModule
                 * @constructor
                 * @param {com.protobuff.data.ILoginResultModule=} [properties] Properties to set
                 */
                function LoginResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LoginResultModule loginResult.
                 * @member {number} loginResult
                 * @memberof com.protobuff.data.LoginResultModule
                 * @instance
                 */
                LoginResultModule.prototype.loginResult = 0;

                /**
                 * LoginResultModule loginDesc.
                 * @member {string} loginDesc
                 * @memberof com.protobuff.data.LoginResultModule
                 * @instance
                 */
                LoginResultModule.prototype.loginDesc = "";

                /**
                 * Creates a new LoginResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.LoginResultModule
                 * @static
                 * @param {com.protobuff.data.ILoginResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.LoginResultModule} LoginResultModule instance
                 */
                LoginResultModule.create = function create(properties) {
                    return new LoginResultModule(properties);
                };

                /**
                 * Encodes the specified LoginResultModule message. Does not implicitly {@link com.protobuff.data.LoginResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.LoginResultModule
                 * @static
                 * @param {com.protobuff.data.ILoginResultModule} message LoginResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.loginResult != null && message.hasOwnProperty("loginResult"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.loginResult);
                    if (message.loginDesc != null && message.hasOwnProperty("loginDesc"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.loginDesc);
                    return writer;
                };

                /**
                 * Encodes the specified LoginResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.LoginResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.LoginResultModule
                 * @static
                 * @param {com.protobuff.data.ILoginResultModule} message LoginResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LoginResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.LoginResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.LoginResultModule} LoginResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.LoginResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.loginResult = reader.int32();
                            break;
                        case 2:
                            message.loginDesc = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LoginResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.LoginResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.LoginResultModule} LoginResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LoginResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.LoginResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LoginResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.loginResult != null && message.hasOwnProperty("loginResult"))
                        if (!$util.isInteger(message.loginResult))
                            return "loginResult: integer expected";
                    if (message.loginDesc != null && message.hasOwnProperty("loginDesc"))
                        if (!$util.isString(message.loginDesc))
                            return "loginDesc: string expected";
                    return null;
                };

                return LoginResultModule;
            })();

            data.RoleInfoModule = (function() {

                /**
                 * Properties of a RoleInfoModule.
                 * @memberof com.protobuff.data
                 * @interface IRoleInfoModule
                 * @property {number|null} [roleId] RoleInfoModule roleId
                 * @property {string|null} [nickName] RoleInfoModule nickName
                 * @property {string|null} [imgurl] RoleInfoModule imgurl
                 * @property {number|null} [level] RoleInfoModule level
                 * @property {string|null} [reconnection] RoleInfoModule reconnection
                 * @property {number|null} [age] RoleInfoModule age
                 * @property {number|null} [gold] RoleInfoModule gold
                 * @property {number|null} [copper] RoleInfoModule copper
                 */

                /**
                 * Constructs a new RoleInfoModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a RoleInfoModule.
                 * @implements IRoleInfoModule
                 * @constructor
                 * @param {com.protobuff.data.IRoleInfoModule=} [properties] Properties to set
                 */
                function RoleInfoModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoleInfoModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.roleId = 0;

                /**
                 * RoleInfoModule nickName.
                 * @member {string} nickName
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.nickName = "";

                /**
                 * RoleInfoModule imgurl.
                 * @member {string} imgurl
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.imgurl = "";

                /**
                 * RoleInfoModule level.
                 * @member {number} level
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.level = 0;

                /**
                 * RoleInfoModule reconnection.
                 * @member {string} reconnection
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.reconnection = "";

                /**
                 * RoleInfoModule age.
                 * @member {number} age
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.age = 0;

                /**
                 * RoleInfoModule gold.
                 * @member {number} gold
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.gold = 0;

                /**
                 * RoleInfoModule copper.
                 * @member {number} copper
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @instance
                 */
                RoleInfoModule.prototype.copper = 0;

                /**
                 * Creates a new RoleInfoModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @static
                 * @param {com.protobuff.data.IRoleInfoModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.RoleInfoModule} RoleInfoModule instance
                 */
                RoleInfoModule.create = function create(properties) {
                    return new RoleInfoModule(properties);
                };

                /**
                 * Encodes the specified RoleInfoModule message. Does not implicitly {@link com.protobuff.data.RoleInfoModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @static
                 * @param {com.protobuff.data.IRoleInfoModule} message RoleInfoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleInfoModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.imgurl);
                    if (message.level != null && message.hasOwnProperty("level"))
                        writer.uint32(/* id 4, wireType 5 =*/37).sfixed32(message.level);
                    if (message.reconnection != null && message.hasOwnProperty("reconnection"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.reconnection);
                    if (message.age != null && message.hasOwnProperty("age"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.age);
                    if (message.gold != null && message.hasOwnProperty("gold"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.gold);
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.copper);
                    return writer;
                };

                /**
                 * Encodes the specified RoleInfoModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleInfoModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @static
                 * @param {com.protobuff.data.IRoleInfoModule} message RoleInfoModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoleInfoModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoleInfoModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.RoleInfoModule} RoleInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleInfoModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.RoleInfoModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.nickName = reader.string();
                            break;
                        case 3:
                            message.imgurl = reader.string();
                            break;
                        case 4:
                            message.level = reader.sfixed32();
                            break;
                        case 5:
                            message.reconnection = reader.string();
                            break;
                        case 6:
                            message.age = reader.int32();
                            break;
                        case 7:
                            message.gold = reader.int32();
                            break;
                        case 8:
                            message.copper = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoleInfoModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.RoleInfoModule} RoleInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoleInfoModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoleInfoModule message.
                 * @function verify
                 * @memberof com.protobuff.data.RoleInfoModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoleInfoModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        if (!$util.isString(message.nickName))
                            return "nickName: string expected";
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        if (!$util.isString(message.imgurl))
                            return "imgurl: string expected";
                    if (message.level != null && message.hasOwnProperty("level"))
                        if (!$util.isInteger(message.level))
                            return "level: integer expected";
                    if (message.reconnection != null && message.hasOwnProperty("reconnection"))
                        if (!$util.isString(message.reconnection))
                            return "reconnection: string expected";
                    if (message.age != null && message.hasOwnProperty("age"))
                        if (!$util.isInteger(message.age))
                            return "age: integer expected";
                    if (message.gold != null && message.hasOwnProperty("gold"))
                        if (!$util.isInteger(message.gold))
                            return "gold: integer expected";
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        if (!$util.isInteger(message.copper))
                            return "copper: integer expected";
                    return null;
                };

                return RoleInfoModule;
            })();

            data.ReconnectionModule = (function() {

                /**
                 * Properties of a ReconnectionModule.
                 * @memberof com.protobuff.data
                 * @interface IReconnectionModule
                 * @property {string|null} [reconnection] ReconnectionModule reconnection
                 */

                /**
                 * Constructs a new ReconnectionModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a ReconnectionModule.
                 * @implements IReconnectionModule
                 * @constructor
                 * @param {com.protobuff.data.IReconnectionModule=} [properties] Properties to set
                 */
                function ReconnectionModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReconnectionModule reconnection.
                 * @member {string} reconnection
                 * @memberof com.protobuff.data.ReconnectionModule
                 * @instance
                 */
                ReconnectionModule.prototype.reconnection = "";

                /**
                 * Creates a new ReconnectionModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.ReconnectionModule
                 * @static
                 * @param {com.protobuff.data.IReconnectionModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.ReconnectionModule} ReconnectionModule instance
                 */
                ReconnectionModule.create = function create(properties) {
                    return new ReconnectionModule(properties);
                };

                /**
                 * Encodes the specified ReconnectionModule message. Does not implicitly {@link com.protobuff.data.ReconnectionModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.ReconnectionModule
                 * @static
                 * @param {com.protobuff.data.IReconnectionModule} message ReconnectionModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReconnectionModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.reconnection != null && message.hasOwnProperty("reconnection"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.reconnection);
                    return writer;
                };

                /**
                 * Encodes the specified ReconnectionModule message, length delimited. Does not implicitly {@link com.protobuff.data.ReconnectionModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.ReconnectionModule
                 * @static
                 * @param {com.protobuff.data.IReconnectionModule} message ReconnectionModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReconnectionModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReconnectionModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.ReconnectionModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.ReconnectionModule} ReconnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReconnectionModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.ReconnectionModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.reconnection = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReconnectionModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.ReconnectionModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.ReconnectionModule} ReconnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReconnectionModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReconnectionModule message.
                 * @function verify
                 * @memberof com.protobuff.data.ReconnectionModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReconnectionModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.reconnection != null && message.hasOwnProperty("reconnection"))
                        if (!$util.isString(message.reconnection))
                            return "reconnection: string expected";
                    return null;
                };

                return ReconnectionModule;
            })();

            data.ReconnectionResult = (function() {

                /**
                 * Properties of a ReconnectionResult.
                 * @memberof com.protobuff.data
                 * @interface IReconnectionResult
                 * @property {number|null} [type] ReconnectionResult type
                 */

                /**
                 * Constructs a new ReconnectionResult.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a ReconnectionResult.
                 * @implements IReconnectionResult
                 * @constructor
                 * @param {com.protobuff.data.IReconnectionResult=} [properties] Properties to set
                 */
                function ReconnectionResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReconnectionResult type.
                 * @member {number} type
                 * @memberof com.protobuff.data.ReconnectionResult
                 * @instance
                 */
                ReconnectionResult.prototype.type = 0;

                /**
                 * Creates a new ReconnectionResult instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.ReconnectionResult
                 * @static
                 * @param {com.protobuff.data.IReconnectionResult=} [properties] Properties to set
                 * @returns {com.protobuff.data.ReconnectionResult} ReconnectionResult instance
                 */
                ReconnectionResult.create = function create(properties) {
                    return new ReconnectionResult(properties);
                };

                /**
                 * Encodes the specified ReconnectionResult message. Does not implicitly {@link com.protobuff.data.ReconnectionResult.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.ReconnectionResult
                 * @static
                 * @param {com.protobuff.data.IReconnectionResult} message ReconnectionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReconnectionResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified ReconnectionResult message, length delimited. Does not implicitly {@link com.protobuff.data.ReconnectionResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.ReconnectionResult
                 * @static
                 * @param {com.protobuff.data.IReconnectionResult} message ReconnectionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReconnectionResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReconnectionResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.ReconnectionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.ReconnectionResult} ReconnectionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReconnectionResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.ReconnectionResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReconnectionResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.ReconnectionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.ReconnectionResult} ReconnectionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReconnectionResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReconnectionResult message.
                 * @function verify
                 * @memberof com.protobuff.data.ReconnectionResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReconnectionResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return ReconnectionResult;
            })();

            data.HdNiuNiuCardModule = (function() {

                /**
                 * Properties of a HdNiuNiuCardModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuCardModule
                 * @property {Array.<number>|null} [cards] HdNiuNiuCardModule cards
                 */

                /**
                 * Constructs a new HdNiuNiuCardModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuCardModule.
                 * @implements IHdNiuNiuCardModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuCardModule=} [properties] Properties to set
                 */
                function HdNiuNiuCardModule(properties) {
                    this.cards = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuCardModule cards.
                 * @member {Array.<number>} cards
                 * @memberof com.protobuff.data.HdNiuNiuCardModule
                 * @instance
                 */
                HdNiuNiuCardModule.prototype.cards = $util.emptyArray;

                /**
                 * Creates a new HdNiuNiuCardModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuCardModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuCardModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuCardModule} HdNiuNiuCardModule instance
                 */
                HdNiuNiuCardModule.create = function create(properties) {
                    return new HdNiuNiuCardModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuCardModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuCardModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuCardModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuCardModule} message HdNiuNiuCardModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuCardModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cards != null && message.cards.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.cards.length; ++i)
                            writer.int32(message.cards[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuCardModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuCardModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuCardModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuCardModule} message HdNiuNiuCardModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuCardModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuCardModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuCardModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuCardModule} HdNiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuCardModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuCardModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.cards && message.cards.length))
                                message.cards = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.cards.push(reader.int32());
                            } else
                                message.cards.push(reader.int32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuCardModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuCardModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuCardModule} HdNiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuCardModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuCardModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuCardModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuCardModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cards != null && message.hasOwnProperty("cards")) {
                        if (!Array.isArray(message.cards))
                            return "cards: array expected";
                        for (var i = 0; i < message.cards.length; ++i)
                            if (!$util.isInteger(message.cards[i]))
                                return "cards: integer[] expected";
                    }
                    return null;
                };

                return HdNiuNiuCardModule;
            })();

            data.HdNiuNiuRoleRoomModule = (function() {

                /**
                 * Properties of a HdNiuNiuRoleRoomModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuRoleRoomModule
                 * @property {number|null} [roleId] HdNiuNiuRoleRoomModule roleId
                 * @property {string|null} [nickName] HdNiuNiuRoleRoomModule nickName
                 * @property {string|null} [imgurl] HdNiuNiuRoleRoomModule imgurl
                 * @property {number|null} [copper] HdNiuNiuRoleRoomModule copper
                 * @property {number|null} [status] HdNiuNiuRoleRoomModule status
                 * @property {number|null} [changeCopper] HdNiuNiuRoleRoomModule changeCopper
                 * @property {number|null} [settleStatus] HdNiuNiuRoleRoomModule settleStatus
                 */

                /**
                 * Constructs a new HdNiuNiuRoleRoomModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuRoleRoomModule.
                 * @implements IHdNiuNiuRoleRoomModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuRoleRoomModule=} [properties] Properties to set
                 */
                function HdNiuNiuRoleRoomModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuRoleRoomModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @instance
                 */
                HdNiuNiuRoleRoomModule.prototype.roleId = 0;

                /**
                 * HdNiuNiuRoleRoomModule nickName.
                 * @member {string} nickName
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @instance
                 */
                HdNiuNiuRoleRoomModule.prototype.nickName = "";

                /**
                 * HdNiuNiuRoleRoomModule imgurl.
                 * @member {string} imgurl
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @instance
                 */
                HdNiuNiuRoleRoomModule.prototype.imgurl = "";

                /**
                 * HdNiuNiuRoleRoomModule copper.
                 * @member {number} copper
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @instance
                 */
                HdNiuNiuRoleRoomModule.prototype.copper = 0;

                /**
                 * HdNiuNiuRoleRoomModule status.
                 * @member {number} status
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @instance
                 */
                HdNiuNiuRoleRoomModule.prototype.status = 0;

                /**
                 * HdNiuNiuRoleRoomModule changeCopper.
                 * @member {number} changeCopper
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @instance
                 */
                HdNiuNiuRoleRoomModule.prototype.changeCopper = 0;

                /**
                 * HdNiuNiuRoleRoomModule settleStatus.
                 * @member {number} settleStatus
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @instance
                 */
                HdNiuNiuRoleRoomModule.prototype.settleStatus = 0;

                /**
                 * Creates a new HdNiuNiuRoleRoomModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleRoomModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuRoleRoomModule} HdNiuNiuRoleRoomModule instance
                 */
                HdNiuNiuRoleRoomModule.create = function create(properties) {
                    return new HdNiuNiuRoleRoomModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuRoleRoomModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleRoomModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleRoomModule} message HdNiuNiuRoleRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoleRoomModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.imgurl);
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.copper);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
                    if (message.changeCopper != null && message.hasOwnProperty("changeCopper"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.changeCopper);
                    if (message.settleStatus != null && message.hasOwnProperty("settleStatus"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.settleStatus);
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuRoleRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleRoomModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleRoomModule} message HdNiuNiuRoleRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoleRoomModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuRoleRoomModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuRoleRoomModule} HdNiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoleRoomModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuRoleRoomModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.nickName = reader.string();
                            break;
                        case 3:
                            message.imgurl = reader.string();
                            break;
                        case 4:
                            message.copper = reader.int32();
                            break;
                        case 6:
                            message.status = reader.int32();
                            break;
                        case 7:
                            message.changeCopper = reader.int32();
                            break;
                        case 8:
                            message.settleStatus = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuRoleRoomModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuRoleRoomModule} HdNiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoleRoomModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuRoleRoomModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuRoleRoomModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuRoleRoomModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        if (!$util.isString(message.nickName))
                            return "nickName: string expected";
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        if (!$util.isString(message.imgurl))
                            return "imgurl: string expected";
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        if (!$util.isInteger(message.copper))
                            return "copper: integer expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    if (message.changeCopper != null && message.hasOwnProperty("changeCopper"))
                        if (!$util.isInteger(message.changeCopper))
                            return "changeCopper: integer expected";
                    if (message.settleStatus != null && message.hasOwnProperty("settleStatus"))
                        if (!$util.isInteger(message.settleStatus))
                            return "settleStatus: integer expected";
                    return null;
                };

                return HdNiuNiuRoleRoomModule;
            })();

            data.HdNiuNiuRequestMatchModule = (function() {

                /**
                 * Properties of a HdNiuNiuRequestMatchModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuRequestMatchModule
                 * @property {number|null} [type] HdNiuNiuRequestMatchModule type
                 */

                /**
                 * Constructs a new HdNiuNiuRequestMatchModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuRequestMatchModule.
                 * @implements IHdNiuNiuRequestMatchModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchModule=} [properties] Properties to set
                 */
                function HdNiuNiuRequestMatchModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuRequestMatchModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchModule
                 * @instance
                 */
                HdNiuNiuRequestMatchModule.prototype.type = 0;

                /**
                 * Creates a new HdNiuNiuRequestMatchModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuRequestMatchModule} HdNiuNiuRequestMatchModule instance
                 */
                HdNiuNiuRequestMatchModule.create = function create(properties) {
                    return new HdNiuNiuRequestMatchModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuRequestMatchModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchModule} message HdNiuNiuRequestMatchModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRequestMatchModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuRequestMatchModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchModule} message HdNiuNiuRequestMatchModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRequestMatchModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuRequestMatchModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuRequestMatchModule} HdNiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRequestMatchModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuRequestMatchModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuRequestMatchModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuRequestMatchModule} HdNiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRequestMatchModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuRequestMatchModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuRequestMatchModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return HdNiuNiuRequestMatchModule;
            })();

            data.HdNiuNiuRequestMatchResultModule = (function() {

                /**
                 * Properties of a HdNiuNiuRequestMatchResultModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuRequestMatchResultModule
                 * @property {number|null} [type] HdNiuNiuRequestMatchResultModule type
                 * @property {number|null} [result] HdNiuNiuRequestMatchResultModule result
                 */

                /**
                 * Constructs a new HdNiuNiuRequestMatchResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuRequestMatchResultModule.
                 * @implements IHdNiuNiuRequestMatchResultModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchResultModule=} [properties] Properties to set
                 */
                function HdNiuNiuRequestMatchResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuRequestMatchResultModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @instance
                 */
                HdNiuNiuRequestMatchResultModule.prototype.type = 0;

                /**
                 * HdNiuNiuRequestMatchResultModule result.
                 * @member {number} result
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @instance
                 */
                HdNiuNiuRequestMatchResultModule.prototype.result = 0;

                /**
                 * Creates a new HdNiuNiuRequestMatchResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuRequestMatchResultModule} HdNiuNiuRequestMatchResultModule instance
                 */
                HdNiuNiuRequestMatchResultModule.create = function create(properties) {
                    return new HdNiuNiuRequestMatchResultModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuRequestMatchResultModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchResultModule} message HdNiuNiuRequestMatchResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRequestMatchResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.result != null && message.hasOwnProperty("result"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuRequestMatchResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRequestMatchResultModule} message HdNiuNiuRequestMatchResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRequestMatchResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuRequestMatchResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuRequestMatchResultModule} HdNiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRequestMatchResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuRequestMatchResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.result = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuRequestMatchResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuRequestMatchResultModule} HdNiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRequestMatchResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuRequestMatchResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuRequestMatchResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuRequestMatchResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.result != null && message.hasOwnProperty("result"))
                        if (!$util.isInteger(message.result))
                            return "result: integer expected";
                    return null;
                };

                return HdNiuNiuRequestMatchResultModule;
            })();

            data.HdNiuNiuQuitModule = (function() {

                /**
                 * Properties of a HdNiuNiuQuitModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuQuitModule
                 */

                /**
                 * Constructs a new HdNiuNiuQuitModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuQuitModule.
                 * @implements IHdNiuNiuQuitModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuQuitModule=} [properties] Properties to set
                 */
                function HdNiuNiuQuitModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new HdNiuNiuQuitModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuQuitModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuQuitModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuQuitModule} HdNiuNiuQuitModule instance
                 */
                HdNiuNiuQuitModule.create = function create(properties) {
                    return new HdNiuNiuQuitModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuQuitModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuQuitModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuQuitModule} message HdNiuNiuQuitModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuQuitModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuQuitModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuQuitModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuQuitModule} message HdNiuNiuQuitModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuQuitModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuQuitModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuQuitModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuQuitModule} HdNiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuQuitModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuQuitModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuQuitModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuQuitModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuQuitModule} HdNiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuQuitModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuQuitModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuQuitModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuQuitModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return HdNiuNiuQuitModule;
            })();

            data.HdNiuNiuQuitResultModule = (function() {

                /**
                 * Properties of a HdNiuNiuQuitResultModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuQuitResultModule
                 */

                /**
                 * Constructs a new HdNiuNiuQuitResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuQuitResultModule.
                 * @implements IHdNiuNiuQuitResultModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuQuitResultModule=} [properties] Properties to set
                 */
                function HdNiuNiuQuitResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new HdNiuNiuQuitResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuQuitResultModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuQuitResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuQuitResultModule} HdNiuNiuQuitResultModule instance
                 */
                HdNiuNiuQuitResultModule.create = function create(properties) {
                    return new HdNiuNiuQuitResultModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuQuitResultModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuQuitResultModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuQuitResultModule} message HdNiuNiuQuitResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuQuitResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuQuitResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuQuitResultModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuQuitResultModule} message HdNiuNiuQuitResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuQuitResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuQuitResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuQuitResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuQuitResultModule} HdNiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuQuitResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuQuitResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuQuitResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuQuitResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuQuitResultModule} HdNiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuQuitResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuQuitResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuQuitResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuQuitResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return HdNiuNiuQuitResultModule;
            })();

            data.HdNiuNiuEnterRoomModule = (function() {

                /**
                 * Properties of a HdNiuNiuEnterRoomModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuEnterRoomModule
                 * @property {number|null} [waittime] HdNiuNiuEnterRoomModule waittime
                 * @property {number|null} [landId] HdNiuNiuEnterRoomModule landId
                 * @property {number|null} [landCrit] HdNiuNiuEnterRoomModule landCrit
                 * @property {Array.<number>|null} [landList] HdNiuNiuEnterRoomModule landList
                 * @property {Array.<com.protobuff.data.IHdNiuNiuRoleRoomModule>|null} [roleList] HdNiuNiuEnterRoomModule roleList
                 */

                /**
                 * Constructs a new HdNiuNiuEnterRoomModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuEnterRoomModule.
                 * @implements IHdNiuNiuEnterRoomModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuEnterRoomModule=} [properties] Properties to set
                 */
                function HdNiuNiuEnterRoomModule(properties) {
                    this.landList = [];
                    this.roleList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuEnterRoomModule waittime.
                 * @member {number} waittime
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @instance
                 */
                HdNiuNiuEnterRoomModule.prototype.waittime = 0;

                /**
                 * HdNiuNiuEnterRoomModule landId.
                 * @member {number} landId
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @instance
                 */
                HdNiuNiuEnterRoomModule.prototype.landId = 0;

                /**
                 * HdNiuNiuEnterRoomModule landCrit.
                 * @member {number} landCrit
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @instance
                 */
                HdNiuNiuEnterRoomModule.prototype.landCrit = 0;

                /**
                 * HdNiuNiuEnterRoomModule landList.
                 * @member {Array.<number>} landList
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @instance
                 */
                HdNiuNiuEnterRoomModule.prototype.landList = $util.emptyArray;

                /**
                 * HdNiuNiuEnterRoomModule roleList.
                 * @member {Array.<com.protobuff.data.IHdNiuNiuRoleRoomModule>} roleList
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @instance
                 */
                HdNiuNiuEnterRoomModule.prototype.roleList = $util.emptyArray;

                /**
                 * Creates a new HdNiuNiuEnterRoomModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuEnterRoomModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuEnterRoomModule} HdNiuNiuEnterRoomModule instance
                 */
                HdNiuNiuEnterRoomModule.create = function create(properties) {
                    return new HdNiuNiuEnterRoomModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuEnterRoomModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuEnterRoomModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuEnterRoomModule} message HdNiuNiuEnterRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuEnterRoomModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.waittime != null && message.hasOwnProperty("waittime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.waittime);
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.landId);
                    if (message.landCrit != null && message.hasOwnProperty("landCrit"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.landCrit);
                    if (message.landList != null && message.landList.length) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork();
                        for (var i = 0; i < message.landList.length; ++i)
                            writer.int32(message.landList[i]);
                        writer.ldelim();
                    }
                    if (message.roleList != null && message.roleList.length)
                        for (var i = 0; i < message.roleList.length; ++i)
                            $root.com.protobuff.data.HdNiuNiuRoleRoomModule.encode(message.roleList[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuEnterRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuEnterRoomModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuEnterRoomModule} message HdNiuNiuEnterRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuEnterRoomModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuEnterRoomModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuEnterRoomModule} HdNiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuEnterRoomModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuEnterRoomModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.waittime = reader.int32();
                            break;
                        case 2:
                            message.landId = reader.int32();
                            break;
                        case 3:
                            message.landCrit = reader.int32();
                            break;
                        case 4:
                            if (!(message.landList && message.landList.length))
                                message.landList = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.landList.push(reader.int32());
                            } else
                                message.landList.push(reader.int32());
                            break;
                        case 5:
                            if (!(message.roleList && message.roleList.length))
                                message.roleList = [];
                            message.roleList.push($root.com.protobuff.data.HdNiuNiuRoleRoomModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuEnterRoomModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuEnterRoomModule} HdNiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuEnterRoomModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuEnterRoomModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuEnterRoomModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuEnterRoomModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.waittime != null && message.hasOwnProperty("waittime"))
                        if (!$util.isInteger(message.waittime))
                            return "waittime: integer expected";
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        if (!$util.isInteger(message.landId))
                            return "landId: integer expected";
                    if (message.landCrit != null && message.hasOwnProperty("landCrit"))
                        if (!$util.isInteger(message.landCrit))
                            return "landCrit: integer expected";
                    if (message.landList != null && message.hasOwnProperty("landList")) {
                        if (!Array.isArray(message.landList))
                            return "landList: array expected";
                        for (var i = 0; i < message.landList.length; ++i)
                            if (!$util.isInteger(message.landList[i]))
                                return "landList: integer[] expected";
                    }
                    if (message.roleList != null && message.hasOwnProperty("roleList")) {
                        if (!Array.isArray(message.roleList))
                            return "roleList: array expected";
                        for (var i = 0; i < message.roleList.length; ++i) {
                            var error = $root.com.protobuff.data.HdNiuNiuRoleRoomModule.verify(message.roleList[i]);
                            if (error)
                                return "roleList." + error;
                        }
                    }
                    return null;
                };

                return HdNiuNiuEnterRoomModule;
            })();

            data.HdNiuNiuRoleChangeModule = (function() {

                /**
                 * Properties of a HdNiuNiuRoleChangeModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuRoleChangeModule
                 * @property {number|null} [type] HdNiuNiuRoleChangeModule type
                 * @property {com.protobuff.data.IHdNiuNiuRoleRoomModule|null} [role] HdNiuNiuRoleChangeModule role
                 */

                /**
                 * Constructs a new HdNiuNiuRoleChangeModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuRoleChangeModule.
                 * @implements IHdNiuNiuRoleChangeModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuRoleChangeModule=} [properties] Properties to set
                 */
                function HdNiuNiuRoleChangeModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuRoleChangeModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @instance
                 */
                HdNiuNiuRoleChangeModule.prototype.type = 0;

                /**
                 * HdNiuNiuRoleChangeModule role.
                 * @member {com.protobuff.data.IHdNiuNiuRoleRoomModule|null|undefined} role
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @instance
                 */
                HdNiuNiuRoleChangeModule.prototype.role = null;

                /**
                 * Creates a new HdNiuNiuRoleChangeModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleChangeModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuRoleChangeModule} HdNiuNiuRoleChangeModule instance
                 */
                HdNiuNiuRoleChangeModule.create = function create(properties) {
                    return new HdNiuNiuRoleChangeModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuRoleChangeModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleChangeModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleChangeModule} message HdNiuNiuRoleChangeModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoleChangeModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.role != null && message.hasOwnProperty("role"))
                        $root.com.protobuff.data.HdNiuNiuRoleRoomModule.encode(message.role, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuRoleChangeModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleChangeModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleChangeModule} message HdNiuNiuRoleChangeModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoleChangeModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuRoleChangeModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuRoleChangeModule} HdNiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoleChangeModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuRoleChangeModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.role = $root.com.protobuff.data.HdNiuNiuRoleRoomModule.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuRoleChangeModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuRoleChangeModule} HdNiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoleChangeModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuRoleChangeModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuRoleChangeModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuRoleChangeModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.role != null && message.hasOwnProperty("role")) {
                        var error = $root.com.protobuff.data.HdNiuNiuRoleRoomModule.verify(message.role);
                        if (error)
                            return "role." + error;
                    }
                    return null;
                };

                return HdNiuNiuRoleChangeModule;
            })();

            data.HdLandModule = (function() {

                /**
                 * Properties of a HdLandModule.
                 * @memberof com.protobuff.data
                 * @interface IHdLandModule
                 * @property {number|null} [landId] HdLandModule landId
                 * @property {number|null} [landCrit] HdLandModule landCrit
                 */

                /**
                 * Constructs a new HdLandModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdLandModule.
                 * @implements IHdLandModule
                 * @constructor
                 * @param {com.protobuff.data.IHdLandModule=} [properties] Properties to set
                 */
                function HdLandModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdLandModule landId.
                 * @member {number} landId
                 * @memberof com.protobuff.data.HdLandModule
                 * @instance
                 */
                HdLandModule.prototype.landId = 0;

                /**
                 * HdLandModule landCrit.
                 * @member {number} landCrit
                 * @memberof com.protobuff.data.HdLandModule
                 * @instance
                 */
                HdLandModule.prototype.landCrit = 0;

                /**
                 * Creates a new HdLandModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdLandModule
                 * @static
                 * @param {com.protobuff.data.IHdLandModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdLandModule} HdLandModule instance
                 */
                HdLandModule.create = function create(properties) {
                    return new HdLandModule(properties);
                };

                /**
                 * Encodes the specified HdLandModule message. Does not implicitly {@link com.protobuff.data.HdLandModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdLandModule
                 * @static
                 * @param {com.protobuff.data.IHdLandModule} message HdLandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdLandModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.landId);
                    if (message.landCrit != null && message.hasOwnProperty("landCrit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.landCrit);
                    return writer;
                };

                /**
                 * Encodes the specified HdLandModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdLandModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdLandModule
                 * @static
                 * @param {com.protobuff.data.IHdLandModule} message HdLandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdLandModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdLandModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdLandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdLandModule} HdLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdLandModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdLandModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.landId = reader.int32();
                            break;
                        case 2:
                            message.landCrit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdLandModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdLandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdLandModule} HdLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdLandModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdLandModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdLandModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdLandModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        if (!$util.isInteger(message.landId))
                            return "landId: integer expected";
                    if (message.landCrit != null && message.hasOwnProperty("landCrit"))
                        if (!$util.isInteger(message.landCrit))
                            return "landCrit: integer expected";
                    return null;
                };

                return HdLandModule;
            })();

            data.HdAddLandModule = (function() {

                /**
                 * Properties of a HdAddLandModule.
                 * @memberof com.protobuff.data
                 * @interface IHdAddLandModule
                 * @property {number|null} [crit] HdAddLandModule crit
                 */

                /**
                 * Constructs a new HdAddLandModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdAddLandModule.
                 * @implements IHdAddLandModule
                 * @constructor
                 * @param {com.protobuff.data.IHdAddLandModule=} [properties] Properties to set
                 */
                function HdAddLandModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdAddLandModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.HdAddLandModule
                 * @instance
                 */
                HdAddLandModule.prototype.crit = 0;

                /**
                 * Creates a new HdAddLandModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdAddLandModule
                 * @static
                 * @param {com.protobuff.data.IHdAddLandModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdAddLandModule} HdAddLandModule instance
                 */
                HdAddLandModule.create = function create(properties) {
                    return new HdAddLandModule(properties);
                };

                /**
                 * Encodes the specified HdAddLandModule message. Does not implicitly {@link com.protobuff.data.HdAddLandModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdAddLandModule
                 * @static
                 * @param {com.protobuff.data.IHdAddLandModule} message HdAddLandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdAddLandModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified HdAddLandModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdAddLandModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdAddLandModule
                 * @static
                 * @param {com.protobuff.data.IHdAddLandModule} message HdAddLandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdAddLandModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdAddLandModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdAddLandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdAddLandModule} HdAddLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdAddLandModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdAddLandModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdAddLandModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdAddLandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdAddLandModule} HdAddLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdAddLandModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdAddLandModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdAddLandModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdAddLandModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return HdAddLandModule;
            })();

            data.HdLandListModule = (function() {

                /**
                 * Properties of a HdLandListModule.
                 * @memberof com.protobuff.data
                 * @interface IHdLandListModule
                 * @property {Array.<number>|null} [landList] HdLandListModule landList
                 */

                /**
                 * Constructs a new HdLandListModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdLandListModule.
                 * @implements IHdLandListModule
                 * @constructor
                 * @param {com.protobuff.data.IHdLandListModule=} [properties] Properties to set
                 */
                function HdLandListModule(properties) {
                    this.landList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdLandListModule landList.
                 * @member {Array.<number>} landList
                 * @memberof com.protobuff.data.HdLandListModule
                 * @instance
                 */
                HdLandListModule.prototype.landList = $util.emptyArray;

                /**
                 * Creates a new HdLandListModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdLandListModule
                 * @static
                 * @param {com.protobuff.data.IHdLandListModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdLandListModule} HdLandListModule instance
                 */
                HdLandListModule.create = function create(properties) {
                    return new HdLandListModule(properties);
                };

                /**
                 * Encodes the specified HdLandListModule message. Does not implicitly {@link com.protobuff.data.HdLandListModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdLandListModule
                 * @static
                 * @param {com.protobuff.data.IHdLandListModule} message HdLandListModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdLandListModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.landList != null && message.landList.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.landList.length; ++i)
                            writer.int32(message.landList[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified HdLandListModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdLandListModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdLandListModule
                 * @static
                 * @param {com.protobuff.data.IHdLandListModule} message HdLandListModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdLandListModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdLandListModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdLandListModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdLandListModule} HdLandListModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdLandListModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdLandListModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.landList && message.landList.length))
                                message.landList = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.landList.push(reader.int32());
                            } else
                                message.landList.push(reader.int32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdLandListModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdLandListModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdLandListModule} HdLandListModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdLandListModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdLandListModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdLandListModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdLandListModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.landList != null && message.hasOwnProperty("landList")) {
                        if (!Array.isArray(message.landList))
                            return "landList: array expected";
                        for (var i = 0; i < message.landList.length; ++i)
                            if (!$util.isInteger(message.landList[i]))
                                return "landList: integer[] expected";
                    }
                    return null;
                };

                return HdLandListModule;
            })();

            data.HdNiuNiuAddCritModule = (function() {

                /**
                 * Properties of a HdNiuNiuAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuAddCritModule
                 * @property {number|null} [waitTime] HdNiuNiuAddCritModule waitTime
                 */

                /**
                 * Constructs a new HdNiuNiuAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuAddCritModule.
                 * @implements IHdNiuNiuAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuAddCritModule=} [properties] Properties to set
                 */
                function HdNiuNiuAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuAddCritModule waitTime.
                 * @member {number} waitTime
                 * @memberof com.protobuff.data.HdNiuNiuAddCritModule
                 * @instance
                 */
                HdNiuNiuAddCritModule.prototype.waitTime = 0;

                /**
                 * Creates a new HdNiuNiuAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuAddCritModule} HdNiuNiuAddCritModule instance
                 */
                HdNiuNiuAddCritModule.create = function create(properties) {
                    return new HdNiuNiuAddCritModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuAddCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuAddCritModule} message HdNiuNiuAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.waitTime);
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuAddCritModule} message HdNiuNiuAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuAddCritModule} HdNiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.waitTime = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuAddCritModule} HdNiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        if (!$util.isInteger(message.waitTime))
                            return "waitTime: integer expected";
                    return null;
                };

                return HdNiuNiuAddCritModule;
            })();

            data.HdNiuNiuDoAddCritModule = (function() {

                /**
                 * Properties of a HdNiuNiuDoAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuDoAddCritModule
                 * @property {number|null} [index] HdNiuNiuDoAddCritModule index
                 * @property {number|null} [crit] HdNiuNiuDoAddCritModule crit
                 */

                /**
                 * Constructs a new HdNiuNiuDoAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuDoAddCritModule.
                 * @implements IHdNiuNiuDoAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuDoAddCritModule=} [properties] Properties to set
                 */
                function HdNiuNiuDoAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuDoAddCritModule index.
                 * @member {number} index
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @instance
                 */
                HdNiuNiuDoAddCritModule.prototype.index = 0;

                /**
                 * HdNiuNiuDoAddCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @instance
                 */
                HdNiuNiuDoAddCritModule.prototype.crit = 0;

                /**
                 * Creates a new HdNiuNiuDoAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuDoAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuDoAddCritModule} HdNiuNiuDoAddCritModule instance
                 */
                HdNiuNiuDoAddCritModule.create = function create(properties) {
                    return new HdNiuNiuDoAddCritModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuDoAddCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuDoAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuDoAddCritModule} message HdNiuNiuDoAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuDoAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && message.hasOwnProperty("index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuDoAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuDoAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuDoAddCritModule} message HdNiuNiuDoAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuDoAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuDoAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuDoAddCritModule} HdNiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuDoAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuDoAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.index = reader.int32();
                            break;
                        case 2:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuDoAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuDoAddCritModule} HdNiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuDoAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuDoAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuDoAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuDoAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return HdNiuNiuDoAddCritModule;
            })();

            data.HdNiuNiuRoleAddCritModule = (function() {

                /**
                 * Properties of a HdNiuNiuRoleAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuRoleAddCritModule
                 * @property {number|null} [roleId] HdNiuNiuRoleAddCritModule roleId
                 * @property {number|null} [index] HdNiuNiuRoleAddCritModule index
                 * @property {number|null} [crit] HdNiuNiuRoleAddCritModule crit
                 */

                /**
                 * Constructs a new HdNiuNiuRoleAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuRoleAddCritModule.
                 * @implements IHdNiuNiuRoleAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuRoleAddCritModule=} [properties] Properties to set
                 */
                function HdNiuNiuRoleAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuRoleAddCritModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @instance
                 */
                HdNiuNiuRoleAddCritModule.prototype.roleId = 0;

                /**
                 * HdNiuNiuRoleAddCritModule index.
                 * @member {number} index
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @instance
                 */
                HdNiuNiuRoleAddCritModule.prototype.index = 0;

                /**
                 * HdNiuNiuRoleAddCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @instance
                 */
                HdNiuNiuRoleAddCritModule.prototype.crit = 0;

                /**
                 * Creates a new HdNiuNiuRoleAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuRoleAddCritModule} HdNiuNiuRoleAddCritModule instance
                 */
                HdNiuNiuRoleAddCritModule.create = function create(properties) {
                    return new HdNiuNiuRoleAddCritModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuRoleAddCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleAddCritModule} message HdNiuNiuRoleAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoleAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.index != null && message.hasOwnProperty("index"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuRoleAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoleAddCritModule} message HdNiuNiuRoleAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoleAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuRoleAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuRoleAddCritModule} HdNiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoleAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuRoleAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.index = reader.int32();
                            break;
                        case 3:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuRoleAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuRoleAddCritModule} HdNiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoleAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuRoleAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuRoleAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuRoleAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return HdNiuNiuRoleAddCritModule;
            })();

            data.HdNiuNiuRoomCritModule = (function() {

                /**
                 * Properties of a HdNiuNiuRoomCritModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuRoomCritModule
                 * @property {number|null} [roleId] HdNiuNiuRoomCritModule roleId
                 * @property {Object.<string,number>|null} [crit] HdNiuNiuRoomCritModule crit
                 */

                /**
                 * Constructs a new HdNiuNiuRoomCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuRoomCritModule.
                 * @implements IHdNiuNiuRoomCritModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuRoomCritModule=} [properties] Properties to set
                 */
                function HdNiuNiuRoomCritModule(properties) {
                    this.crit = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuRoomCritModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @instance
                 */
                HdNiuNiuRoomCritModule.prototype.roleId = 0;

                /**
                 * HdNiuNiuRoomCritModule crit.
                 * @member {Object.<string,number>} crit
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @instance
                 */
                HdNiuNiuRoomCritModule.prototype.crit = $util.emptyObject;

                /**
                 * Creates a new HdNiuNiuRoomCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoomCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuRoomCritModule} HdNiuNiuRoomCritModule instance
                 */
                HdNiuNiuRoomCritModule.create = function create(properties) {
                    return new HdNiuNiuRoomCritModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuRoomCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoomCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoomCritModule} message HdNiuNiuRoomCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoomCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        for (var keys = Object.keys(message.crit), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.crit[keys[i]]).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuRoomCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoomCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRoomCritModule} message HdNiuNiuRoomCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRoomCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuRoomCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuRoomCritModule} HdNiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoomCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuRoomCritModule(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            reader.skip().pos++;
                            if (message.crit === $util.emptyObject)
                                message.crit = {};
                            key = reader.int32();
                            reader.pos++;
                            message.crit[key] = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuRoomCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuRoomCritModule} HdNiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRoomCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuRoomCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuRoomCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuRoomCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.crit != null && message.hasOwnProperty("crit")) {
                        if (!$util.isObject(message.crit))
                            return "crit: object expected";
                        var key = Object.keys(message.crit);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "crit: integer key{k:int32} expected";
                            if (!$util.isInteger(message.crit[key[i]]))
                                return "crit: integer{k:int32} expected";
                        }
                    }
                    return null;
                };

                return HdNiuNiuRoomCritModule;
            })();

            data.HdNiuNiuSettlementModule = (function() {

                /**
                 * Properties of a HdNiuNiuSettlementModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuSettlementModule
                 * @property {Object.<string,com.protobuff.data.IHdNiuNiuCardModule>|null} [cardMap] HdNiuNiuSettlementModule cardMap
                 * @property {Object.<string,number>|null} [cardType] HdNiuNiuSettlementModule cardType
                 * @property {Array.<com.protobuff.data.IHdNiuNiuRoleRoomModule>|null} [roleList] HdNiuNiuSettlementModule roleList
                 */

                /**
                 * Constructs a new HdNiuNiuSettlementModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuSettlementModule.
                 * @implements IHdNiuNiuSettlementModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuSettlementModule=} [properties] Properties to set
                 */
                function HdNiuNiuSettlementModule(properties) {
                    this.cardMap = {};
                    this.cardType = {};
                    this.roleList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuSettlementModule cardMap.
                 * @member {Object.<string,com.protobuff.data.IHdNiuNiuCardModule>} cardMap
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @instance
                 */
                HdNiuNiuSettlementModule.prototype.cardMap = $util.emptyObject;

                /**
                 * HdNiuNiuSettlementModule cardType.
                 * @member {Object.<string,number>} cardType
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @instance
                 */
                HdNiuNiuSettlementModule.prototype.cardType = $util.emptyObject;

                /**
                 * HdNiuNiuSettlementModule roleList.
                 * @member {Array.<com.protobuff.data.IHdNiuNiuRoleRoomModule>} roleList
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @instance
                 */
                HdNiuNiuSettlementModule.prototype.roleList = $util.emptyArray;

                /**
                 * Creates a new HdNiuNiuSettlementModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuSettlementModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuSettlementModule} HdNiuNiuSettlementModule instance
                 */
                HdNiuNiuSettlementModule.create = function create(properties) {
                    return new HdNiuNiuSettlementModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuSettlementModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuSettlementModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuSettlementModule} message HdNiuNiuSettlementModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuSettlementModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cardMap != null && message.hasOwnProperty("cardMap"))
                        for (var keys = Object.keys(message.cardMap), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.com.protobuff.data.HdNiuNiuCardModule.encode(message.cardMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.cardType != null && message.hasOwnProperty("cardType"))
                        for (var keys = Object.keys(message.cardType), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.cardType[keys[i]]).ldelim();
                    if (message.roleList != null && message.roleList.length)
                        for (var i = 0; i < message.roleList.length; ++i)
                            $root.com.protobuff.data.HdNiuNiuRoleRoomModule.encode(message.roleList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuSettlementModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuSettlementModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuSettlementModule} message HdNiuNiuSettlementModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuSettlementModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuSettlementModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuSettlementModule} HdNiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuSettlementModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuSettlementModule(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            reader.skip().pos++;
                            if (message.cardMap === $util.emptyObject)
                                message.cardMap = {};
                            key = reader.int32();
                            reader.pos++;
                            message.cardMap[key] = $root.com.protobuff.data.HdNiuNiuCardModule.decode(reader, reader.uint32());
                            break;
                        case 2:
                            reader.skip().pos++;
                            if (message.cardType === $util.emptyObject)
                                message.cardType = {};
                            key = reader.int32();
                            reader.pos++;
                            message.cardType[key] = reader.int32();
                            break;
                        case 3:
                            if (!(message.roleList && message.roleList.length))
                                message.roleList = [];
                            message.roleList.push($root.com.protobuff.data.HdNiuNiuRoleRoomModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuSettlementModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuSettlementModule} HdNiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuSettlementModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuSettlementModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuSettlementModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuSettlementModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cardMap != null && message.hasOwnProperty("cardMap")) {
                        if (!$util.isObject(message.cardMap))
                            return "cardMap: object expected";
                        var key = Object.keys(message.cardMap);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "cardMap: integer key{k:int32} expected";
                            {
                                var error = $root.com.protobuff.data.HdNiuNiuCardModule.verify(message.cardMap[key[i]]);
                                if (error)
                                    return "cardMap." + error;
                            }
                        }
                    }
                    if (message.cardType != null && message.hasOwnProperty("cardType")) {
                        if (!$util.isObject(message.cardType))
                            return "cardType: object expected";
                        var key = Object.keys(message.cardType);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "cardType: integer key{k:int32} expected";
                            if (!$util.isInteger(message.cardType[key[i]]))
                                return "cardType: integer{k:int32} expected";
                        }
                    }
                    if (message.roleList != null && message.hasOwnProperty("roleList")) {
                        if (!Array.isArray(message.roleList))
                            return "roleList: array expected";
                        for (var i = 0; i < message.roleList.length; ++i) {
                            var error = $root.com.protobuff.data.HdNiuNiuRoleRoomModule.verify(message.roleList[i]);
                            if (error)
                                return "roleList." + error;
                        }
                    }
                    return null;
                };

                return HdNiuNiuSettlementModule;
            })();

            data.HdNiuNiuRolePrepareModule = (function() {

                /**
                 * Properties of a HdNiuNiuRolePrepareModule.
                 * @memberof com.protobuff.data
                 * @interface IHdNiuNiuRolePrepareModule
                 * @property {number|null} [status] HdNiuNiuRolePrepareModule status
                 */

                /**
                 * Constructs a new HdNiuNiuRolePrepareModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a HdNiuNiuRolePrepareModule.
                 * @implements IHdNiuNiuRolePrepareModule
                 * @constructor
                 * @param {com.protobuff.data.IHdNiuNiuRolePrepareModule=} [properties] Properties to set
                 */
                function HdNiuNiuRolePrepareModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HdNiuNiuRolePrepareModule status.
                 * @member {number} status
                 * @memberof com.protobuff.data.HdNiuNiuRolePrepareModule
                 * @instance
                 */
                HdNiuNiuRolePrepareModule.prototype.status = 0;

                /**
                 * Creates a new HdNiuNiuRolePrepareModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.HdNiuNiuRolePrepareModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRolePrepareModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.HdNiuNiuRolePrepareModule} HdNiuNiuRolePrepareModule instance
                 */
                HdNiuNiuRolePrepareModule.create = function create(properties) {
                    return new HdNiuNiuRolePrepareModule(properties);
                };

                /**
                 * Encodes the specified HdNiuNiuRolePrepareModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRolePrepareModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.HdNiuNiuRolePrepareModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRolePrepareModule} message HdNiuNiuRolePrepareModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRolePrepareModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified HdNiuNiuRolePrepareModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRolePrepareModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRolePrepareModule
                 * @static
                 * @param {com.protobuff.data.IHdNiuNiuRolePrepareModule} message HdNiuNiuRolePrepareModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HdNiuNiuRolePrepareModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HdNiuNiuRolePrepareModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.HdNiuNiuRolePrepareModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.HdNiuNiuRolePrepareModule} HdNiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRolePrepareModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.HdNiuNiuRolePrepareModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HdNiuNiuRolePrepareModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.HdNiuNiuRolePrepareModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.HdNiuNiuRolePrepareModule} HdNiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HdNiuNiuRolePrepareModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HdNiuNiuRolePrepareModule message.
                 * @function verify
                 * @memberof com.protobuff.data.HdNiuNiuRolePrepareModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HdNiuNiuRolePrepareModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    return null;
                };

                return HdNiuNiuRolePrepareModule;
            })();

            data.NiuNiuCardModule = (function() {

                /**
                 * Properties of a NiuNiuCardModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuCardModule
                 * @property {number|null} [value] NiuNiuCardModule value
                 */

                /**
                 * Constructs a new NiuNiuCardModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuCardModule.
                 * @implements INiuNiuCardModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuCardModule=} [properties] Properties to set
                 */
                function NiuNiuCardModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuCardModule value.
                 * @member {number} value
                 * @memberof com.protobuff.data.NiuNiuCardModule
                 * @instance
                 */
                NiuNiuCardModule.prototype.value = 0;

                /**
                 * Creates a new NiuNiuCardModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuCardModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuCardModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuCardModule} NiuNiuCardModule instance
                 */
                NiuNiuCardModule.create = function create(properties) {
                    return new NiuNiuCardModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuCardModule message. Does not implicitly {@link com.protobuff.data.NiuNiuCardModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuCardModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuCardModule} message NiuNiuCardModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuCardModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuCardModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuCardModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuCardModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuCardModule} message NiuNiuCardModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuCardModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuCardModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuCardModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuCardModule} NiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuCardModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuCardModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuCardModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuCardModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuCardModule} NiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuCardModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuCardModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuCardModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuCardModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };

                return NiuNiuCardModule;
            })();

            data.NiuNiuRoleRoomModule = (function() {

                /**
                 * Properties of a NiuNiuRoleRoomModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRoleRoomModule
                 * @property {number|null} [roleId] NiuNiuRoleRoomModule roleId
                 * @property {string|null} [nickName] NiuNiuRoleRoomModule nickName
                 * @property {string|null} [imgurl] NiuNiuRoleRoomModule imgurl
                 * @property {number|null} [copper] NiuNiuRoleRoomModule copper
                 * @property {number|null} [index] NiuNiuRoleRoomModule index
                 * @property {number|null} [status] NiuNiuRoleRoomModule status
                 * @property {number|null} [changeCopper] NiuNiuRoleRoomModule changeCopper
                 * @property {number|null} [settleStatus] NiuNiuRoleRoomModule settleStatus
                 * @property {number|null} [settleResult] NiuNiuRoleRoomModule settleResult
                 * @property {Array.<com.protobuff.data.INiuNiuCardModule>|null} [cardList] NiuNiuRoleRoomModule cardList
                 * @property {number|null} [niuniuCardType] NiuNiuRoleRoomModule niuniuCardType
                 */

                /**
                 * Constructs a new NiuNiuRoleRoomModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRoleRoomModule.
                 * @implements INiuNiuRoleRoomModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRoleRoomModule=} [properties] Properties to set
                 */
                function NiuNiuRoleRoomModule(properties) {
                    this.cardList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRoleRoomModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.roleId = 0;

                /**
                 * NiuNiuRoleRoomModule nickName.
                 * @member {string} nickName
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.nickName = "";

                /**
                 * NiuNiuRoleRoomModule imgurl.
                 * @member {string} imgurl
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.imgurl = "";

                /**
                 * NiuNiuRoleRoomModule copper.
                 * @member {number} copper
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.copper = 0;

                /**
                 * NiuNiuRoleRoomModule index.
                 * @member {number} index
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.index = 0;

                /**
                 * NiuNiuRoleRoomModule status.
                 * @member {number} status
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.status = 0;

                /**
                 * NiuNiuRoleRoomModule changeCopper.
                 * @member {number} changeCopper
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.changeCopper = 0;

                /**
                 * NiuNiuRoleRoomModule settleStatus.
                 * @member {number} settleStatus
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.settleStatus = 0;

                /**
                 * NiuNiuRoleRoomModule settleResult.
                 * @member {number} settleResult
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.settleResult = 0;

                /**
                 * NiuNiuRoleRoomModule cardList.
                 * @member {Array.<com.protobuff.data.INiuNiuCardModule>} cardList
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.cardList = $util.emptyArray;

                /**
                 * NiuNiuRoleRoomModule niuniuCardType.
                 * @member {number} niuniuCardType
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @instance
                 */
                NiuNiuRoleRoomModule.prototype.niuniuCardType = 0;

                /**
                 * Creates a new NiuNiuRoleRoomModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleRoomModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRoleRoomModule} NiuNiuRoleRoomModule instance
                 */
                NiuNiuRoleRoomModule.create = function create(properties) {
                    return new NiuNiuRoleRoomModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRoleRoomModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleRoomModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleRoomModule} message NiuNiuRoleRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleRoomModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.imgurl);
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.copper);
                    if (message.index != null && message.hasOwnProperty("index"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.index);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
                    if (message.changeCopper != null && message.hasOwnProperty("changeCopper"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.changeCopper);
                    if (message.settleStatus != null && message.hasOwnProperty("settleStatus"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.settleStatus);
                    if (message.settleResult != null && message.hasOwnProperty("settleResult"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.settleResult);
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.com.protobuff.data.NiuNiuCardModule.encode(message.cardList[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.niuniuCardType != null && message.hasOwnProperty("niuniuCardType"))
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.niuniuCardType);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRoleRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleRoomModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleRoomModule} message NiuNiuRoleRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleRoomModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRoleRoomModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRoleRoomModule} NiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleRoomModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRoleRoomModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.nickName = reader.string();
                            break;
                        case 3:
                            message.imgurl = reader.string();
                            break;
                        case 4:
                            message.copper = reader.int32();
                            break;
                        case 5:
                            message.index = reader.int32();
                            break;
                        case 6:
                            message.status = reader.int32();
                            break;
                        case 7:
                            message.changeCopper = reader.int32();
                            break;
                        case 8:
                            message.settleStatus = reader.int32();
                            break;
                        case 9:
                            message.settleResult = reader.int32();
                            break;
                        case 10:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.com.protobuff.data.NiuNiuCardModule.decode(reader, reader.uint32()));
                            break;
                        case 11:
                            message.niuniuCardType = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRoleRoomModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRoleRoomModule} NiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleRoomModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRoleRoomModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRoleRoomModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRoleRoomModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.nickName != null && message.hasOwnProperty("nickName"))
                        if (!$util.isString(message.nickName))
                            return "nickName: string expected";
                    if (message.imgurl != null && message.hasOwnProperty("imgurl"))
                        if (!$util.isString(message.imgurl))
                            return "imgurl: string expected";
                    if (message.copper != null && message.hasOwnProperty("copper"))
                        if (!$util.isInteger(message.copper))
                            return "copper: integer expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    if (message.changeCopper != null && message.hasOwnProperty("changeCopper"))
                        if (!$util.isInteger(message.changeCopper))
                            return "changeCopper: integer expected";
                    if (message.settleStatus != null && message.hasOwnProperty("settleStatus"))
                        if (!$util.isInteger(message.settleStatus))
                            return "settleStatus: integer expected";
                    if (message.settleResult != null && message.hasOwnProperty("settleResult"))
                        if (!$util.isInteger(message.settleResult))
                            return "settleResult: integer expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.com.protobuff.data.NiuNiuCardModule.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    if (message.niuniuCardType != null && message.hasOwnProperty("niuniuCardType"))
                        if (!$util.isInteger(message.niuniuCardType))
                            return "niuniuCardType: integer expected";
                    return null;
                };

                return NiuNiuRoleRoomModule;
            })();

            data.NiuNiuRequestMatchModule = (function() {

                /**
                 * Properties of a NiuNiuRequestMatchModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRequestMatchModule
                 * @property {number|null} [type] NiuNiuRequestMatchModule type
                 */

                /**
                 * Constructs a new NiuNiuRequestMatchModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRequestMatchModule.
                 * @implements INiuNiuRequestMatchModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRequestMatchModule=} [properties] Properties to set
                 */
                function NiuNiuRequestMatchModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRequestMatchModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.NiuNiuRequestMatchModule
                 * @instance
                 */
                NiuNiuRequestMatchModule.prototype.type = 0;

                /**
                 * Creates a new NiuNiuRequestMatchModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRequestMatchModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRequestMatchModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRequestMatchModule} NiuNiuRequestMatchModule instance
                 */
                NiuNiuRequestMatchModule.create = function create(properties) {
                    return new NiuNiuRequestMatchModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRequestMatchModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRequestMatchModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRequestMatchModule} message NiuNiuRequestMatchModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRequestMatchModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRequestMatchModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRequestMatchModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRequestMatchModule} message NiuNiuRequestMatchModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRequestMatchModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRequestMatchModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRequestMatchModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRequestMatchModule} NiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRequestMatchModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRequestMatchModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRequestMatchModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRequestMatchModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRequestMatchModule} NiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRequestMatchModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRequestMatchModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRequestMatchModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRequestMatchModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return NiuNiuRequestMatchModule;
            })();

            data.NiuNiuRequestMatchResultModule = (function() {

                /**
                 * Properties of a NiuNiuRequestMatchResultModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRequestMatchResultModule
                 * @property {number|null} [type] NiuNiuRequestMatchResultModule type
                 * @property {number|null} [result] NiuNiuRequestMatchResultModule result
                 */

                /**
                 * Constructs a new NiuNiuRequestMatchResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRequestMatchResultModule.
                 * @implements INiuNiuRequestMatchResultModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRequestMatchResultModule=} [properties] Properties to set
                 */
                function NiuNiuRequestMatchResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRequestMatchResultModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @instance
                 */
                NiuNiuRequestMatchResultModule.prototype.type = 0;

                /**
                 * NiuNiuRequestMatchResultModule result.
                 * @member {number} result
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @instance
                 */
                NiuNiuRequestMatchResultModule.prototype.result = 0;

                /**
                 * Creates a new NiuNiuRequestMatchResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRequestMatchResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRequestMatchResultModule} NiuNiuRequestMatchResultModule instance
                 */
                NiuNiuRequestMatchResultModule.create = function create(properties) {
                    return new NiuNiuRequestMatchResultModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRequestMatchResultModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRequestMatchResultModule} message NiuNiuRequestMatchResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRequestMatchResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.result != null && message.hasOwnProperty("result"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRequestMatchResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRequestMatchResultModule} message NiuNiuRequestMatchResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRequestMatchResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRequestMatchResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRequestMatchResultModule} NiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRequestMatchResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRequestMatchResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.result = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRequestMatchResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRequestMatchResultModule} NiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRequestMatchResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRequestMatchResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRequestMatchResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRequestMatchResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.result != null && message.hasOwnProperty("result"))
                        if (!$util.isInteger(message.result))
                            return "result: integer expected";
                    return null;
                };

                return NiuNiuRequestMatchResultModule;
            })();

            data.NiuNiuQuitModule = (function() {

                /**
                 * Properties of a NiuNiuQuitModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuQuitModule
                 */

                /**
                 * Constructs a new NiuNiuQuitModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuQuitModule.
                 * @implements INiuNiuQuitModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuQuitModule=} [properties] Properties to set
                 */
                function NiuNiuQuitModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new NiuNiuQuitModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuQuitModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuQuitModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuQuitModule} NiuNiuQuitModule instance
                 */
                NiuNiuQuitModule.create = function create(properties) {
                    return new NiuNiuQuitModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuQuitModule message. Does not implicitly {@link com.protobuff.data.NiuNiuQuitModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuQuitModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuQuitModule} message NiuNiuQuitModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuQuitModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuQuitModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuQuitModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuQuitModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuQuitModule} message NiuNiuQuitModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuQuitModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuQuitModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuQuitModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuQuitModule} NiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuQuitModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuQuitModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuQuitModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuQuitModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuQuitModule} NiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuQuitModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuQuitModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuQuitModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuQuitModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return NiuNiuQuitModule;
            })();

            data.NiuNiuQuitResultModule = (function() {

                /**
                 * Properties of a NiuNiuQuitResultModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuQuitResultModule
                 */

                /**
                 * Constructs a new NiuNiuQuitResultModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuQuitResultModule.
                 * @implements INiuNiuQuitResultModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuQuitResultModule=} [properties] Properties to set
                 */
                function NiuNiuQuitResultModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new NiuNiuQuitResultModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuQuitResultModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuQuitResultModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuQuitResultModule} NiuNiuQuitResultModule instance
                 */
                NiuNiuQuitResultModule.create = function create(properties) {
                    return new NiuNiuQuitResultModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuQuitResultModule message. Does not implicitly {@link com.protobuff.data.NiuNiuQuitResultModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuQuitResultModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuQuitResultModule} message NiuNiuQuitResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuQuitResultModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuQuitResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuQuitResultModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuQuitResultModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuQuitResultModule} message NiuNiuQuitResultModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuQuitResultModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuQuitResultModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuQuitResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuQuitResultModule} NiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuQuitResultModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuQuitResultModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuQuitResultModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuQuitResultModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuQuitResultModule} NiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuQuitResultModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuQuitResultModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuQuitResultModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuQuitResultModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                return NiuNiuQuitResultModule;
            })();

            data.NiuNiuEnterRoomModule = (function() {

                /**
                 * Properties of a NiuNiuEnterRoomModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuEnterRoomModule
                 * @property {number|null} [waittime] NiuNiuEnterRoomModule waittime
                 * @property {Array.<com.protobuff.data.INiuNiuRoleRoomModule>|null} [roleList] NiuNiuEnterRoomModule roleList
                 */

                /**
                 * Constructs a new NiuNiuEnterRoomModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuEnterRoomModule.
                 * @implements INiuNiuEnterRoomModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuEnterRoomModule=} [properties] Properties to set
                 */
                function NiuNiuEnterRoomModule(properties) {
                    this.roleList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuEnterRoomModule waittime.
                 * @member {number} waittime
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @instance
                 */
                NiuNiuEnterRoomModule.prototype.waittime = 0;

                /**
                 * NiuNiuEnterRoomModule roleList.
                 * @member {Array.<com.protobuff.data.INiuNiuRoleRoomModule>} roleList
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @instance
                 */
                NiuNiuEnterRoomModule.prototype.roleList = $util.emptyArray;

                /**
                 * Creates a new NiuNiuEnterRoomModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuEnterRoomModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuEnterRoomModule} NiuNiuEnterRoomModule instance
                 */
                NiuNiuEnterRoomModule.create = function create(properties) {
                    return new NiuNiuEnterRoomModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuEnterRoomModule message. Does not implicitly {@link com.protobuff.data.NiuNiuEnterRoomModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuEnterRoomModule} message NiuNiuEnterRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuEnterRoomModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.waittime != null && message.hasOwnProperty("waittime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.waittime);
                    if (message.roleList != null && message.roleList.length)
                        for (var i = 0; i < message.roleList.length; ++i)
                            $root.com.protobuff.data.NiuNiuRoleRoomModule.encode(message.roleList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuEnterRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuEnterRoomModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuEnterRoomModule} message NiuNiuEnterRoomModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuEnterRoomModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuEnterRoomModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuEnterRoomModule} NiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuEnterRoomModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuEnterRoomModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.waittime = reader.int32();
                            break;
                        case 2:
                            if (!(message.roleList && message.roleList.length))
                                message.roleList = [];
                            message.roleList.push($root.com.protobuff.data.NiuNiuRoleRoomModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuEnterRoomModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuEnterRoomModule} NiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuEnterRoomModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuEnterRoomModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuEnterRoomModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuEnterRoomModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.waittime != null && message.hasOwnProperty("waittime"))
                        if (!$util.isInteger(message.waittime))
                            return "waittime: integer expected";
                    if (message.roleList != null && message.hasOwnProperty("roleList")) {
                        if (!Array.isArray(message.roleList))
                            return "roleList: array expected";
                        for (var i = 0; i < message.roleList.length; ++i) {
                            var error = $root.com.protobuff.data.NiuNiuRoleRoomModule.verify(message.roleList[i]);
                            if (error)
                                return "roleList." + error;
                        }
                    }
                    return null;
                };

                return NiuNiuEnterRoomModule;
            })();

            data.NiuNiuRoleChangeModule = (function() {

                /**
                 * Properties of a NiuNiuRoleChangeModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRoleChangeModule
                 * @property {number|null} [type] NiuNiuRoleChangeModule type
                 * @property {com.protobuff.data.INiuNiuRoleRoomModule|null} [role] NiuNiuRoleChangeModule role
                 */

                /**
                 * Constructs a new NiuNiuRoleChangeModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRoleChangeModule.
                 * @implements INiuNiuRoleChangeModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRoleChangeModule=} [properties] Properties to set
                 */
                function NiuNiuRoleChangeModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRoleChangeModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @instance
                 */
                NiuNiuRoleChangeModule.prototype.type = 0;

                /**
                 * NiuNiuRoleChangeModule role.
                 * @member {com.protobuff.data.INiuNiuRoleRoomModule|null|undefined} role
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @instance
                 */
                NiuNiuRoleChangeModule.prototype.role = null;

                /**
                 * Creates a new NiuNiuRoleChangeModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleChangeModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRoleChangeModule} NiuNiuRoleChangeModule instance
                 */
                NiuNiuRoleChangeModule.create = function create(properties) {
                    return new NiuNiuRoleChangeModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRoleChangeModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleChangeModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleChangeModule} message NiuNiuRoleChangeModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleChangeModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.role != null && message.hasOwnProperty("role"))
                        $root.com.protobuff.data.NiuNiuRoleRoomModule.encode(message.role, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRoleChangeModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleChangeModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleChangeModule} message NiuNiuRoleChangeModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleChangeModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRoleChangeModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRoleChangeModule} NiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleChangeModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRoleChangeModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.role = $root.com.protobuff.data.NiuNiuRoleRoomModule.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRoleChangeModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRoleChangeModule} NiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleChangeModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRoleChangeModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRoleChangeModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRoleChangeModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.role != null && message.hasOwnProperty("role")) {
                        var error = $root.com.protobuff.data.NiuNiuRoleRoomModule.verify(message.role);
                        if (error)
                            return "role." + error;
                    }
                    return null;
                };

                return NiuNiuRoleChangeModule;
            })();

            data.NiuNiuStartModule = (function() {

                /**
                 * Properties of a NiuNiuStartModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuStartModule
                 * @property {number|null} [isFirst] NiuNiuStartModule isFirst
                 * @property {Array.<com.protobuff.data.INiuNiuCardModule>|null} [cardList] NiuNiuStartModule cardList
                 */

                /**
                 * Constructs a new NiuNiuStartModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuStartModule.
                 * @implements INiuNiuStartModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuStartModule=} [properties] Properties to set
                 */
                function NiuNiuStartModule(properties) {
                    this.cardList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuStartModule isFirst.
                 * @member {number} isFirst
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @instance
                 */
                NiuNiuStartModule.prototype.isFirst = 0;

                /**
                 * NiuNiuStartModule cardList.
                 * @member {Array.<com.protobuff.data.INiuNiuCardModule>} cardList
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @instance
                 */
                NiuNiuStartModule.prototype.cardList = $util.emptyArray;

                /**
                 * Creates a new NiuNiuStartModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuStartModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuStartModule} NiuNiuStartModule instance
                 */
                NiuNiuStartModule.create = function create(properties) {
                    return new NiuNiuStartModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuStartModule message. Does not implicitly {@link com.protobuff.data.NiuNiuStartModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuStartModule} message NiuNiuStartModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuStartModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isFirst != null && message.hasOwnProperty("isFirst"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isFirst);
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.com.protobuff.data.NiuNiuCardModule.encode(message.cardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuStartModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuStartModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuStartModule} message NiuNiuStartModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuStartModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuStartModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuStartModule} NiuNiuStartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuStartModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuStartModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.isFirst = reader.int32();
                            break;
                        case 2:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.com.protobuff.data.NiuNiuCardModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuStartModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuStartModule} NiuNiuStartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuStartModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuStartModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuStartModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuStartModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isFirst != null && message.hasOwnProperty("isFirst"))
                        if (!$util.isInteger(message.isFirst))
                            return "isFirst: integer expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.com.protobuff.data.NiuNiuCardModule.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    return null;
                };

                return NiuNiuStartModule;
            })();

            data.NiuNiuGrabModule = (function() {

                /**
                 * Properties of a NiuNiuGrabModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuGrabModule
                 * @property {number|null} [waitTime] NiuNiuGrabModule waitTime
                 */

                /**
                 * Constructs a new NiuNiuGrabModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuGrabModule.
                 * @implements INiuNiuGrabModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuGrabModule=} [properties] Properties to set
                 */
                function NiuNiuGrabModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuGrabModule waitTime.
                 * @member {number} waitTime
                 * @memberof com.protobuff.data.NiuNiuGrabModule
                 * @instance
                 */
                NiuNiuGrabModule.prototype.waitTime = 0;

                /**
                 * Creates a new NiuNiuGrabModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuGrabModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuGrabModule} NiuNiuGrabModule instance
                 */
                NiuNiuGrabModule.create = function create(properties) {
                    return new NiuNiuGrabModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuGrabModule message. Does not implicitly {@link com.protobuff.data.NiuNiuGrabModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuGrabModule} message NiuNiuGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuGrabModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.waitTime);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuGrabModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuGrabModule} message NiuNiuGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuGrabModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuGrabModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuGrabModule} NiuNiuGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuGrabModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuGrabModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.waitTime = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuGrabModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuGrabModule} NiuNiuGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuGrabModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuGrabModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuGrabModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuGrabModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        if (!$util.isInteger(message.waitTime))
                            return "waitTime: integer expected";
                    return null;
                };

                return NiuNiuGrabModule;
            })();

            data.NiuNiuDoGrabModule = (function() {

                /**
                 * Properties of a NiuNiuDoGrabModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuDoGrabModule
                 * @property {number|null} [type] NiuNiuDoGrabModule type
                 */

                /**
                 * Constructs a new NiuNiuDoGrabModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuDoGrabModule.
                 * @implements INiuNiuDoGrabModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuDoGrabModule=} [properties] Properties to set
                 */
                function NiuNiuDoGrabModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuDoGrabModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.NiuNiuDoGrabModule
                 * @instance
                 */
                NiuNiuDoGrabModule.prototype.type = 0;

                /**
                 * Creates a new NiuNiuDoGrabModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuDoGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuDoGrabModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuDoGrabModule} NiuNiuDoGrabModule instance
                 */
                NiuNiuDoGrabModule.create = function create(properties) {
                    return new NiuNiuDoGrabModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuDoGrabModule message. Does not implicitly {@link com.protobuff.data.NiuNiuDoGrabModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuDoGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuDoGrabModule} message NiuNiuDoGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuDoGrabModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuDoGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuDoGrabModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuDoGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuDoGrabModule} message NiuNiuDoGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuDoGrabModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuDoGrabModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuDoGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuDoGrabModule} NiuNiuDoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuDoGrabModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuDoGrabModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuDoGrabModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuDoGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuDoGrabModule} NiuNiuDoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuDoGrabModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuDoGrabModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuDoGrabModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuDoGrabModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return NiuNiuDoGrabModule;
            })();

            data.NiuNiuRoleGrabModule = (function() {

                /**
                 * Properties of a NiuNiuRoleGrabModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRoleGrabModule
                 * @property {number|null} [roleId] NiuNiuRoleGrabModule roleId
                 * @property {number|null} [type] NiuNiuRoleGrabModule type
                 */

                /**
                 * Constructs a new NiuNiuRoleGrabModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRoleGrabModule.
                 * @implements INiuNiuRoleGrabModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRoleGrabModule=} [properties] Properties to set
                 */
                function NiuNiuRoleGrabModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRoleGrabModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @instance
                 */
                NiuNiuRoleGrabModule.prototype.roleId = 0;

                /**
                 * NiuNiuRoleGrabModule type.
                 * @member {number} type
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @instance
                 */
                NiuNiuRoleGrabModule.prototype.type = 0;

                /**
                 * Creates a new NiuNiuRoleGrabModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleGrabModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRoleGrabModule} NiuNiuRoleGrabModule instance
                 */
                NiuNiuRoleGrabModule.create = function create(properties) {
                    return new NiuNiuRoleGrabModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRoleGrabModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleGrabModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleGrabModule} message NiuNiuRoleGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleGrabModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRoleGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleGrabModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleGrabModule} message NiuNiuRoleGrabModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleGrabModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRoleGrabModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRoleGrabModule} NiuNiuRoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleGrabModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRoleGrabModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRoleGrabModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRoleGrabModule} NiuNiuRoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleGrabModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRoleGrabModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRoleGrabModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRoleGrabModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    return null;
                };

                return NiuNiuRoleGrabModule;
            })();

            data.NiuNiuLandModule = (function() {

                /**
                 * Properties of a NiuNiuLandModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuLandModule
                 * @property {number|null} [landId] NiuNiuLandModule landId
                 */

                /**
                 * Constructs a new NiuNiuLandModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuLandModule.
                 * @implements INiuNiuLandModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuLandModule=} [properties] Properties to set
                 */
                function NiuNiuLandModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuLandModule landId.
                 * @member {number} landId
                 * @memberof com.protobuff.data.NiuNiuLandModule
                 * @instance
                 */
                NiuNiuLandModule.prototype.landId = 0;

                /**
                 * Creates a new NiuNiuLandModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuLandModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuLandModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuLandModule} NiuNiuLandModule instance
                 */
                NiuNiuLandModule.create = function create(properties) {
                    return new NiuNiuLandModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuLandModule message. Does not implicitly {@link com.protobuff.data.NiuNiuLandModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuLandModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuLandModule} message NiuNiuLandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuLandModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.landId);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuLandModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuLandModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuLandModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuLandModule} message NiuNiuLandModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuLandModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuLandModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuLandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuLandModule} NiuNiuLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuLandModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuLandModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.landId = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuLandModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuLandModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuLandModule} NiuNiuLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuLandModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuLandModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuLandModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuLandModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.landId != null && message.hasOwnProperty("landId"))
                        if (!$util.isInteger(message.landId))
                            return "landId: integer expected";
                    return null;
                };

                return NiuNiuLandModule;
            })();

            data.NiuNiuAddCritModule = (function() {

                /**
                 * Properties of a NiuNiuAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuAddCritModule
                 * @property {number|null} [waitTime] NiuNiuAddCritModule waitTime
                 */

                /**
                 * Constructs a new NiuNiuAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuAddCritModule.
                 * @implements INiuNiuAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuAddCritModule=} [properties] Properties to set
                 */
                function NiuNiuAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuAddCritModule waitTime.
                 * @member {number} waitTime
                 * @memberof com.protobuff.data.NiuNiuAddCritModule
                 * @instance
                 */
                NiuNiuAddCritModule.prototype.waitTime = 0;

                /**
                 * Creates a new NiuNiuAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuAddCritModule} NiuNiuAddCritModule instance
                 */
                NiuNiuAddCritModule.create = function create(properties) {
                    return new NiuNiuAddCritModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuAddCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuAddCritModule} message NiuNiuAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.waitTime);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuAddCritModule} message NiuNiuAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuAddCritModule} NiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.waitTime = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuAddCritModule} NiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                        if (!$util.isInteger(message.waitTime))
                            return "waitTime: integer expected";
                    return null;
                };

                return NiuNiuAddCritModule;
            })();

            data.NiuNiuDoAddCritModule = (function() {

                /**
                 * Properties of a NiuNiuDoAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuDoAddCritModule
                 * @property {number|null} [crit] NiuNiuDoAddCritModule crit
                 */

                /**
                 * Constructs a new NiuNiuDoAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuDoAddCritModule.
                 * @implements INiuNiuDoAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuDoAddCritModule=} [properties] Properties to set
                 */
                function NiuNiuDoAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuDoAddCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.NiuNiuDoAddCritModule
                 * @instance
                 */
                NiuNiuDoAddCritModule.prototype.crit = 0;

                /**
                 * Creates a new NiuNiuDoAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuDoAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuDoAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuDoAddCritModule} NiuNiuDoAddCritModule instance
                 */
                NiuNiuDoAddCritModule.create = function create(properties) {
                    return new NiuNiuDoAddCritModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuDoAddCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuDoAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuDoAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuDoAddCritModule} message NiuNiuDoAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuDoAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuDoAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuDoAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuDoAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuDoAddCritModule} message NiuNiuDoAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuDoAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuDoAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuDoAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuDoAddCritModule} NiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuDoAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuDoAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuDoAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuDoAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuDoAddCritModule} NiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuDoAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuDoAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuDoAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuDoAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return NiuNiuDoAddCritModule;
            })();

            data.NiuNiuRoleAddCritModule = (function() {

                /**
                 * Properties of a NiuNiuRoleAddCritModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRoleAddCritModule
                 * @property {number|null} [roleId] NiuNiuRoleAddCritModule roleId
                 * @property {number|null} [crit] NiuNiuRoleAddCritModule crit
                 */

                /**
                 * Constructs a new NiuNiuRoleAddCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRoleAddCritModule.
                 * @implements INiuNiuRoleAddCritModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRoleAddCritModule=} [properties] Properties to set
                 */
                function NiuNiuRoleAddCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRoleAddCritModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @instance
                 */
                NiuNiuRoleAddCritModule.prototype.roleId = 0;

                /**
                 * NiuNiuRoleAddCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @instance
                 */
                NiuNiuRoleAddCritModule.prototype.crit = 0;

                /**
                 * Creates a new NiuNiuRoleAddCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleAddCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRoleAddCritModule} NiuNiuRoleAddCritModule instance
                 */
                NiuNiuRoleAddCritModule.create = function create(properties) {
                    return new NiuNiuRoleAddCritModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRoleAddCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleAddCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleAddCritModule} message NiuNiuRoleAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleAddCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRoleAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleAddCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoleAddCritModule} message NiuNiuRoleAddCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoleAddCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRoleAddCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRoleAddCritModule} NiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleAddCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRoleAddCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRoleAddCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRoleAddCritModule} NiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoleAddCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRoleAddCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRoleAddCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRoleAddCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return NiuNiuRoleAddCritModule;
            })();

            data.NiuNiuRoomCritModule = (function() {

                /**
                 * Properties of a NiuNiuRoomCritModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRoomCritModule
                 * @property {number|null} [roleId] NiuNiuRoomCritModule roleId
                 * @property {number|null} [crit] NiuNiuRoomCritModule crit
                 */

                /**
                 * Constructs a new NiuNiuRoomCritModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRoomCritModule.
                 * @implements INiuNiuRoomCritModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRoomCritModule=} [properties] Properties to set
                 */
                function NiuNiuRoomCritModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRoomCritModule roleId.
                 * @member {number} roleId
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @instance
                 */
                NiuNiuRoomCritModule.prototype.roleId = 0;

                /**
                 * NiuNiuRoomCritModule crit.
                 * @member {number} crit
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @instance
                 */
                NiuNiuRoomCritModule.prototype.crit = 0;

                /**
                 * Creates a new NiuNiuRoomCritModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoomCritModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRoomCritModule} NiuNiuRoomCritModule instance
                 */
                NiuNiuRoomCritModule.create = function create(properties) {
                    return new NiuNiuRoomCritModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRoomCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoomCritModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoomCritModule} message NiuNiuRoomCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoomCritModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.crit);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRoomCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoomCritModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRoomCritModule} message NiuNiuRoomCritModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRoomCritModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRoomCritModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRoomCritModule} NiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoomCritModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRoomCritModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.int32();
                            break;
                        case 2:
                            message.crit = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRoomCritModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRoomCritModule} NiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRoomCritModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRoomCritModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRoomCritModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRoomCritModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (!$util.isInteger(message.roleId))
                            return "roleId: integer expected";
                    if (message.crit != null && message.hasOwnProperty("crit"))
                        if (!$util.isInteger(message.crit))
                            return "crit: integer expected";
                    return null;
                };

                return NiuNiuRoomCritModule;
            })();

            data.NiuNiuSettlementModule = (function() {

                /**
                 * Properties of a NiuNiuSettlementModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuSettlementModule
                 * @property {Array.<com.protobuff.data.INiuNiuRoleRoomModule>|null} [roleList] NiuNiuSettlementModule roleList
                 */

                /**
                 * Constructs a new NiuNiuSettlementModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuSettlementModule.
                 * @implements INiuNiuSettlementModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuSettlementModule=} [properties] Properties to set
                 */
                function NiuNiuSettlementModule(properties) {
                    this.roleList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuSettlementModule roleList.
                 * @member {Array.<com.protobuff.data.INiuNiuRoleRoomModule>} roleList
                 * @memberof com.protobuff.data.NiuNiuSettlementModule
                 * @instance
                 */
                NiuNiuSettlementModule.prototype.roleList = $util.emptyArray;

                /**
                 * Creates a new NiuNiuSettlementModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuSettlementModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuSettlementModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuSettlementModule} NiuNiuSettlementModule instance
                 */
                NiuNiuSettlementModule.create = function create(properties) {
                    return new NiuNiuSettlementModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuSettlementModule message. Does not implicitly {@link com.protobuff.data.NiuNiuSettlementModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuSettlementModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuSettlementModule} message NiuNiuSettlementModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuSettlementModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleList != null && message.roleList.length)
                        for (var i = 0; i < message.roleList.length; ++i)
                            $root.com.protobuff.data.NiuNiuRoleRoomModule.encode(message.roleList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuSettlementModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuSettlementModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuSettlementModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuSettlementModule} message NiuNiuSettlementModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuSettlementModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuSettlementModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuSettlementModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuSettlementModule} NiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuSettlementModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuSettlementModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.roleList && message.roleList.length))
                                message.roleList = [];
                            message.roleList.push($root.com.protobuff.data.NiuNiuRoleRoomModule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuSettlementModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuSettlementModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuSettlementModule} NiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuSettlementModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuSettlementModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuSettlementModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuSettlementModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roleList != null && message.hasOwnProperty("roleList")) {
                        if (!Array.isArray(message.roleList))
                            return "roleList: array expected";
                        for (var i = 0; i < message.roleList.length; ++i) {
                            var error = $root.com.protobuff.data.NiuNiuRoleRoomModule.verify(message.roleList[i]);
                            if (error)
                                return "roleList." + error;
                        }
                    }
                    return null;
                };

                return NiuNiuSettlementModule;
            })();

            data.NiuNiuRolePrepareModule = (function() {

                /**
                 * Properties of a NiuNiuRolePrepareModule.
                 * @memberof com.protobuff.data
                 * @interface INiuNiuRolePrepareModule
                 * @property {number|null} [status] NiuNiuRolePrepareModule status
                 */

                /**
                 * Constructs a new NiuNiuRolePrepareModule.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a NiuNiuRolePrepareModule.
                 * @implements INiuNiuRolePrepareModule
                 * @constructor
                 * @param {com.protobuff.data.INiuNiuRolePrepareModule=} [properties] Properties to set
                 */
                function NiuNiuRolePrepareModule(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NiuNiuRolePrepareModule status.
                 * @member {number} status
                 * @memberof com.protobuff.data.NiuNiuRolePrepareModule
                 * @instance
                 */
                NiuNiuRolePrepareModule.prototype.status = 0;

                /**
                 * Creates a new NiuNiuRolePrepareModule instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.NiuNiuRolePrepareModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRolePrepareModule=} [properties] Properties to set
                 * @returns {com.protobuff.data.NiuNiuRolePrepareModule} NiuNiuRolePrepareModule instance
                 */
                NiuNiuRolePrepareModule.create = function create(properties) {
                    return new NiuNiuRolePrepareModule(properties);
                };

                /**
                 * Encodes the specified NiuNiuRolePrepareModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRolePrepareModule.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.NiuNiuRolePrepareModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRolePrepareModule} message NiuNiuRolePrepareModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRolePrepareModule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified NiuNiuRolePrepareModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRolePrepareModule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRolePrepareModule
                 * @static
                 * @param {com.protobuff.data.INiuNiuRolePrepareModule} message NiuNiuRolePrepareModule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiuNiuRolePrepareModule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NiuNiuRolePrepareModule message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.NiuNiuRolePrepareModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.NiuNiuRolePrepareModule} NiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRolePrepareModule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.NiuNiuRolePrepareModule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NiuNiuRolePrepareModule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.NiuNiuRolePrepareModule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.NiuNiuRolePrepareModule} NiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiuNiuRolePrepareModule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NiuNiuRolePrepareModule message.
                 * @function verify
                 * @memberof com.protobuff.data.NiuNiuRolePrepareModule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiuNiuRolePrepareModule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    return null;
                };

                return NiuNiuRolePrepareModule;
            })();

            data.PacketData = (function() {

                /**
                 * Properties of a PacketData.
                 * @memberof com.protobuff.data
                 * @interface IPacketData
                 * @property {number|null} [packetType] PacketData packetType
                 * @property {Uint8Array|null} [data] PacketData data
                 */

                /**
                 * Constructs a new PacketData.
                 * @memberof com.protobuff.data
                 * @classdesc Represents a PacketData.
                 * @implements IPacketData
                 * @constructor
                 * @param {com.protobuff.data.IPacketData=} [properties] Properties to set
                 */
                function PacketData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PacketData packetType.
                 * @member {number} packetType
                 * @memberof com.protobuff.data.PacketData
                 * @instance
                 */
                PacketData.prototype.packetType = 0;

                /**
                 * PacketData data.
                 * @member {Uint8Array} data
                 * @memberof com.protobuff.data.PacketData
                 * @instance
                 */
                PacketData.prototype.data = $util.newBuffer([]);

                /**
                 * Creates a new PacketData instance using the specified properties.
                 * @function create
                 * @memberof com.protobuff.data.PacketData
                 * @static
                 * @param {com.protobuff.data.IPacketData=} [properties] Properties to set
                 * @returns {com.protobuff.data.PacketData} PacketData instance
                 */
                PacketData.create = function create(properties) {
                    return new PacketData(properties);
                };

                /**
                 * Encodes the specified PacketData message. Does not implicitly {@link com.protobuff.data.PacketData.verify|verify} messages.
                 * @function encode
                 * @memberof com.protobuff.data.PacketData
                 * @static
                 * @param {com.protobuff.data.IPacketData} message PacketData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PacketData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packetType != null && message.hasOwnProperty("packetType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.packetType);
                    if (message.data != null && message.hasOwnProperty("data"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                    return writer;
                };

                /**
                 * Encodes the specified PacketData message, length delimited. Does not implicitly {@link com.protobuff.data.PacketData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.protobuff.data.PacketData
                 * @static
                 * @param {com.protobuff.data.IPacketData} message PacketData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PacketData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PacketData message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.protobuff.data.PacketData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.protobuff.data.PacketData} PacketData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PacketData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.protobuff.data.PacketData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packetType = reader.int32();
                            break;
                        case 2:
                            message.data = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PacketData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.protobuff.data.PacketData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.protobuff.data.PacketData} PacketData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PacketData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PacketData message.
                 * @function verify
                 * @memberof com.protobuff.data.PacketData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PacketData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.packetType != null && message.hasOwnProperty("packetType"))
                        if (!$util.isInteger(message.packetType))
                            return "packetType: integer expected";
                    if (message.data != null && message.hasOwnProperty("data"))
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                    return null;
                };

                return PacketData;
            })();

            return data;
        })();

        return protobuff;
    })();

    return com;
})();