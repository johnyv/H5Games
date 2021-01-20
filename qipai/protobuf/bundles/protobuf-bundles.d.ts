type Long = protobuf.Long;

/** Namespace com. */
declare namespace com {

    /** Namespace protobuff. */
    namespace protobuff {

        /** Namespace data. */
        namespace data {

            /** Properties of a CardModule. */
            interface ICardModule {

                /** CardModule color */
                color?: (number|null);

                /** CardModule value */
                value?: (number|null);
            }

            /** Represents a CardModule. */
            class CardModule implements ICardModule {

                /**
                 * Constructs a new CardModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ICardModule);

                /** CardModule color. */
                public color: number;

                /** CardModule value. */
                public value: number;

                /**
                 * Creates a new CardModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CardModule instance
                 */
                public static create(properties?: com.protobuff.data.ICardModule): com.protobuff.data.CardModule;

                /**
                 * Encodes the specified CardModule message. Does not implicitly {@link com.protobuff.data.CardModule.verify|verify} messages.
                 * @param message CardModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ICardModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified CardModule message, length delimited. Does not implicitly {@link com.protobuff.data.CardModule.verify|verify} messages.
                 * @param message CardModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ICardModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a CardModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.CardModule;

                /**
                 * Decodes a CardModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.CardModule;

                /**
                 * Verifies a CardModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RoleRoomModule. */
            interface IRoleRoomModule {

                /** RoleRoomModule roleId */
                roleId?: (number|null);

                /** RoleRoomModule nickName */
                nickName?: (string|null);

                /** RoleRoomModule imgurl */
                imgurl?: (string|null);

                /** RoleRoomModule copper */
                copper?: (number|null);

                /** RoleRoomModule index */
                index?: (number|null);

                /** RoleRoomModule status */
                status?: (number|null);

                /** RoleRoomModule changeCopper */
                changeCopper?: (number|null);

                /** RoleRoomModule settleStatus */
                settleStatus?: (number|null);

                /** RoleRoomModule settleResult */
                settleResult?: (number|null);

                /** RoleRoomModule cardList */
                cardList?: (com.protobuff.data.ICardModule[]|null);
            }

            /** Represents a RoleRoomModule. */
            class RoleRoomModule implements IRoleRoomModule {

                /**
                 * Constructs a new RoleRoomModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRoleRoomModule);

                /** RoleRoomModule roleId. */
                public roleId: number;

                /** RoleRoomModule nickName. */
                public nickName: string;

                /** RoleRoomModule imgurl. */
                public imgurl: string;

                /** RoleRoomModule copper. */
                public copper: number;

                /** RoleRoomModule index. */
                public index: number;

                /** RoleRoomModule status. */
                public status: number;

                /** RoleRoomModule changeCopper. */
                public changeCopper: number;

                /** RoleRoomModule settleStatus. */
                public settleStatus: number;

                /** RoleRoomModule settleResult. */
                public settleResult: number;

                /** RoleRoomModule cardList. */
                public cardList: com.protobuff.data.ICardModule[];

                /**
                 * Creates a new RoleRoomModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoleRoomModule instance
                 */
                public static create(properties?: com.protobuff.data.IRoleRoomModule): com.protobuff.data.RoleRoomModule;

                /**
                 * Encodes the specified RoleRoomModule message. Does not implicitly {@link com.protobuff.data.RoleRoomModule.verify|verify} messages.
                 * @param message RoleRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRoleRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RoleRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleRoomModule.verify|verify} messages.
                 * @param message RoleRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRoleRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RoleRoomModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RoleRoomModule;

                /**
                 * Decodes a RoleRoomModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RoleRoomModule;

                /**
                 * Verifies a RoleRoomModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RequestMatchModule. */
            interface IRequestMatchModule {

                /** RequestMatchModule type */
                type?: (number|null);
            }

            /** Represents a RequestMatchModule. */
            class RequestMatchModule implements IRequestMatchModule {

                /**
                 * Constructs a new RequestMatchModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRequestMatchModule);

                /** RequestMatchModule type. */
                public type: number;

                /**
                 * Creates a new RequestMatchModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestMatchModule instance
                 */
                public static create(properties?: com.protobuff.data.IRequestMatchModule): com.protobuff.data.RequestMatchModule;

                /**
                 * Encodes the specified RequestMatchModule message. Does not implicitly {@link com.protobuff.data.RequestMatchModule.verify|verify} messages.
                 * @param message RequestMatchModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRequestMatchModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RequestMatchModule message, length delimited. Does not implicitly {@link com.protobuff.data.RequestMatchModule.verify|verify} messages.
                 * @param message RequestMatchModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRequestMatchModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RequestMatchModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RequestMatchModule;

                /**
                 * Decodes a RequestMatchModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RequestMatchModule;

                /**
                 * Verifies a RequestMatchModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RequestMatchResultModule. */
            interface IRequestMatchResultModule {

                /** RequestMatchResultModule type */
                type?: (number|null);

                /** RequestMatchResultModule result */
                result?: (number|null);
            }

            /** Represents a RequestMatchResultModule. */
            class RequestMatchResultModule implements IRequestMatchResultModule {

                /**
                 * Constructs a new RequestMatchResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRequestMatchResultModule);

                /** RequestMatchResultModule type. */
                public type: number;

                /** RequestMatchResultModule result. */
                public result: number;

                /**
                 * Creates a new RequestMatchResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestMatchResultModule instance
                 */
                public static create(properties?: com.protobuff.data.IRequestMatchResultModule): com.protobuff.data.RequestMatchResultModule;

                /**
                 * Encodes the specified RequestMatchResultModule message. Does not implicitly {@link com.protobuff.data.RequestMatchResultModule.verify|verify} messages.
                 * @param message RequestMatchResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRequestMatchResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RequestMatchResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.RequestMatchResultModule.verify|verify} messages.
                 * @param message RequestMatchResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRequestMatchResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RequestMatchResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RequestMatchResultModule;

                /**
                 * Decodes a RequestMatchResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RequestMatchResultModule;

                /**
                 * Verifies a RequestMatchResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a QuitModule. */
            interface IQuitModule {
            }

            /** Represents a QuitModule. */
            class QuitModule implements IQuitModule {

                /**
                 * Constructs a new QuitModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IQuitModule);

                /**
                 * Creates a new QuitModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QuitModule instance
                 */
                public static create(properties?: com.protobuff.data.IQuitModule): com.protobuff.data.QuitModule;

                /**
                 * Encodes the specified QuitModule message. Does not implicitly {@link com.protobuff.data.QuitModule.verify|verify} messages.
                 * @param message QuitModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IQuitModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified QuitModule message, length delimited. Does not implicitly {@link com.protobuff.data.QuitModule.verify|verify} messages.
                 * @param message QuitModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IQuitModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a QuitModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.QuitModule;

                /**
                 * Decodes a QuitModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.QuitModule;

                /**
                 * Verifies a QuitModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a QuitResultModule. */
            interface IQuitResultModule {
            }

            /** Represents a QuitResultModule. */
            class QuitResultModule implements IQuitResultModule {

                /**
                 * Constructs a new QuitResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IQuitResultModule);

                /**
                 * Creates a new QuitResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QuitResultModule instance
                 */
                public static create(properties?: com.protobuff.data.IQuitResultModule): com.protobuff.data.QuitResultModule;

                /**
                 * Encodes the specified QuitResultModule message. Does not implicitly {@link com.protobuff.data.QuitResultModule.verify|verify} messages.
                 * @param message QuitResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IQuitResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified QuitResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.QuitResultModule.verify|verify} messages.
                 * @param message QuitResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IQuitResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a QuitResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.QuitResultModule;

                /**
                 * Decodes a QuitResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.QuitResultModule;

                /**
                 * Verifies a QuitResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of an EnterRoomModule. */
            interface IEnterRoomModule {

                /** EnterRoomModule roleList */
                roleList?: (com.protobuff.data.IRoleRoomModule[]|null);
            }

            /** Represents an EnterRoomModule. */
            class EnterRoomModule implements IEnterRoomModule {

                /**
                 * Constructs a new EnterRoomModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IEnterRoomModule);

                /** EnterRoomModule roleList. */
                public roleList: com.protobuff.data.IRoleRoomModule[];

                /**
                 * Creates a new EnterRoomModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnterRoomModule instance
                 */
                public static create(properties?: com.protobuff.data.IEnterRoomModule): com.protobuff.data.EnterRoomModule;

                /**
                 * Encodes the specified EnterRoomModule message. Does not implicitly {@link com.protobuff.data.EnterRoomModule.verify|verify} messages.
                 * @param message EnterRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IEnterRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified EnterRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.EnterRoomModule.verify|verify} messages.
                 * @param message EnterRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IEnterRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes an EnterRoomModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.EnterRoomModule;

                /**
                 * Decodes an EnterRoomModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.EnterRoomModule;

                /**
                 * Verifies an EnterRoomModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RoleChangeModule. */
            interface IRoleChangeModule {

                /** RoleChangeModule type */
                type?: (number|null);

                /** RoleChangeModule role */
                role?: (com.protobuff.data.IRoleRoomModule|null);
            }

            /** Represents a RoleChangeModule. */
            class RoleChangeModule implements IRoleChangeModule {

                /**
                 * Constructs a new RoleChangeModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRoleChangeModule);

                /** RoleChangeModule type. */
                public type: number;

                /** RoleChangeModule role. */
                public role?: (com.protobuff.data.IRoleRoomModule|null);

                /**
                 * Creates a new RoleChangeModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoleChangeModule instance
                 */
                public static create(properties?: com.protobuff.data.IRoleChangeModule): com.protobuff.data.RoleChangeModule;

                /**
                 * Encodes the specified RoleChangeModule message. Does not implicitly {@link com.protobuff.data.RoleChangeModule.verify|verify} messages.
                 * @param message RoleChangeModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRoleChangeModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RoleChangeModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleChangeModule.verify|verify} messages.
                 * @param message RoleChangeModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRoleChangeModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RoleChangeModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RoleChangeModule;

                /**
                 * Decodes a RoleChangeModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RoleChangeModule;

                /**
                 * Verifies a RoleChangeModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a StartModule. */
            interface IStartModule {

                /** StartModule cardList */
                cardList?: (com.protobuff.data.ICardModule[]|null);

                /** StartModule count */
                count?: (number|null);
            }

            /** Represents a StartModule. */
            class StartModule implements IStartModule {

                /**
                 * Constructs a new StartModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IStartModule);

                /** StartModule cardList. */
                public cardList: com.protobuff.data.ICardModule[];

                /** StartModule count. */
                public count: number;

                /**
                 * Creates a new StartModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartModule instance
                 */
                public static create(properties?: com.protobuff.data.IStartModule): com.protobuff.data.StartModule;

                /**
                 * Encodes the specified StartModule message. Does not implicitly {@link com.protobuff.data.StartModule.verify|verify} messages.
                 * @param message StartModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IStartModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified StartModule message, length delimited. Does not implicitly {@link com.protobuff.data.StartModule.verify|verify} messages.
                 * @param message StartModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IStartModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a StartModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.StartModule;

                /**
                 * Decodes a StartModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.StartModule;

                /**
                 * Verifies a StartModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a GrabModule. */
            interface IGrabModule {

                /** GrabModule roleId */
                roleId?: (number|null);

                /** GrabModule type */
                type?: (number|null);

                /** GrabModule waitTime */
                waitTime?: (number|null);
            }

            /** Represents a GrabModule. */
            class GrabModule implements IGrabModule {

                /**
                 * Constructs a new GrabModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IGrabModule);

                /** GrabModule roleId. */
                public roleId: number;

                /** GrabModule type. */
                public type: number;

                /** GrabModule waitTime. */
                public waitTime: number;

                /**
                 * Creates a new GrabModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GrabModule instance
                 */
                public static create(properties?: com.protobuff.data.IGrabModule): com.protobuff.data.GrabModule;

                /**
                 * Encodes the specified GrabModule message. Does not implicitly {@link com.protobuff.data.GrabModule.verify|verify} messages.
                 * @param message GrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified GrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.GrabModule.verify|verify} messages.
                 * @param message GrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a GrabModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.GrabModule;

                /**
                 * Decodes a GrabModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.GrabModule;

                /**
                 * Verifies a GrabModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a DoGrabModule. */
            interface IDoGrabModule {

                /** DoGrabModule type */
                type?: (number|null);
            }

            /** Represents a DoGrabModule. */
            class DoGrabModule implements IDoGrabModule {

                /**
                 * Constructs a new DoGrabModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IDoGrabModule);

                /** DoGrabModule type. */
                public type: number;

                /**
                 * Creates a new DoGrabModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DoGrabModule instance
                 */
                public static create(properties?: com.protobuff.data.IDoGrabModule): com.protobuff.data.DoGrabModule;

                /**
                 * Encodes the specified DoGrabModule message. Does not implicitly {@link com.protobuff.data.DoGrabModule.verify|verify} messages.
                 * @param message DoGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IDoGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified DoGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.DoGrabModule.verify|verify} messages.
                 * @param message DoGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IDoGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a DoGrabModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.DoGrabModule;

                /**
                 * Decodes a DoGrabModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.DoGrabModule;

                /**
                 * Verifies a DoGrabModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RoleGrabModule. */
            interface IRoleGrabModule {

                /** RoleGrabModule roleId */
                roleId?: (number|null);

                /** RoleGrabModule type */
                type?: (number|null);
            }

            /** Represents a RoleGrabModule. */
            class RoleGrabModule implements IRoleGrabModule {

                /**
                 * Constructs a new RoleGrabModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRoleGrabModule);

                /** RoleGrabModule roleId. */
                public roleId: number;

                /** RoleGrabModule type. */
                public type: number;

                /**
                 * Creates a new RoleGrabModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoleGrabModule instance
                 */
                public static create(properties?: com.protobuff.data.IRoleGrabModule): com.protobuff.data.RoleGrabModule;

                /**
                 * Encodes the specified RoleGrabModule message. Does not implicitly {@link com.protobuff.data.RoleGrabModule.verify|verify} messages.
                 * @param message RoleGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRoleGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RoleGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleGrabModule.verify|verify} messages.
                 * @param message RoleGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRoleGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RoleGrabModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RoleGrabModule;

                /**
                 * Decodes a RoleGrabModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RoleGrabModule;

                /**
                 * Verifies a RoleGrabModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a LandModule. */
            interface ILandModule {

                /** LandModule landId */
                landId?: (number|null);

                /** LandModule cardList */
                cardList?: (com.protobuff.data.ICardModule[]|null);
            }

            /** Represents a LandModule. */
            class LandModule implements ILandModule {

                /**
                 * Constructs a new LandModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ILandModule);

                /** LandModule landId. */
                public landId: number;

                /** LandModule cardList. */
                public cardList: com.protobuff.data.ICardModule[];

                /**
                 * Creates a new LandModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LandModule instance
                 */
                public static create(properties?: com.protobuff.data.ILandModule): com.protobuff.data.LandModule;

                /**
                 * Encodes the specified LandModule message. Does not implicitly {@link com.protobuff.data.LandModule.verify|verify} messages.
                 * @param message LandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ILandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified LandModule message, length delimited. Does not implicitly {@link com.protobuff.data.LandModule.verify|verify} messages.
                 * @param message LandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ILandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a LandModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.LandModule;

                /**
                 * Decodes a LandModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.LandModule;

                /**
                 * Verifies a LandModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RoomCritModule. */
            interface IRoomCritModule {

                /** RoomCritModule bottom */
                bottom?: (number|null);

                /** RoomCritModule point */
                point?: (number|null);

                /** RoomCritModule crit */
                crit?: (number|null);
            }

            /** Represents a RoomCritModule. */
            class RoomCritModule implements IRoomCritModule {

                /**
                 * Constructs a new RoomCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRoomCritModule);

                /** RoomCritModule bottom. */
                public bottom: number;

                /** RoomCritModule point. */
                public point: number;

                /** RoomCritModule crit. */
                public crit: number;

                /**
                 * Creates a new RoomCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoomCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IRoomCritModule): com.protobuff.data.RoomCritModule;

                /**
                 * Encodes the specified RoomCritModule message. Does not implicitly {@link com.protobuff.data.RoomCritModule.verify|verify} messages.
                 * @param message RoomCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRoomCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RoomCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoomCritModule.verify|verify} messages.
                 * @param message RoomCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRoomCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RoomCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RoomCritModule;

                /**
                 * Decodes a RoomCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RoomCritModule;

                /**
                 * Verifies a RoomCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a GoModule. */
            interface IGoModule {

                /** GoModule roleId */
                roleId?: (number|null);

                /** GoModule type */
                type?: (number|null);

                /** GoModule waitTime */
                waitTime?: (number|null);
            }

            /** Represents a GoModule. */
            class GoModule implements IGoModule {

                /**
                 * Constructs a new GoModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IGoModule);

                /** GoModule roleId. */
                public roleId: number;

                /** GoModule type. */
                public type: number;

                /** GoModule waitTime. */
                public waitTime: number;

                /**
                 * Creates a new GoModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GoModule instance
                 */
                public static create(properties?: com.protobuff.data.IGoModule): com.protobuff.data.GoModule;

                /**
                 * Encodes the specified GoModule message. Does not implicitly {@link com.protobuff.data.GoModule.verify|verify} messages.
                 * @param message GoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IGoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified GoModule message, length delimited. Does not implicitly {@link com.protobuff.data.GoModule.verify|verify} messages.
                 * @param message GoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IGoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a GoModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.GoModule;

                /**
                 * Decodes a GoModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.GoModule;

                /**
                 * Verifies a GoModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a StartGoModule. */
            interface IStartGoModule {

                /** StartGoModule cardList */
                cardList?: (com.protobuff.data.ICardModule[]|null);
            }

            /** Represents a StartGoModule. */
            class StartGoModule implements IStartGoModule {

                /**
                 * Constructs a new StartGoModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IStartGoModule);

                /** StartGoModule cardList. */
                public cardList: com.protobuff.data.ICardModule[];

                /**
                 * Creates a new StartGoModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartGoModule instance
                 */
                public static create(properties?: com.protobuff.data.IStartGoModule): com.protobuff.data.StartGoModule;

                /**
                 * Encodes the specified StartGoModule message. Does not implicitly {@link com.protobuff.data.StartGoModule.verify|verify} messages.
                 * @param message StartGoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IStartGoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified StartGoModule message, length delimited. Does not implicitly {@link com.protobuff.data.StartGoModule.verify|verify} messages.
                 * @param message StartGoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IStartGoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a StartGoModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.StartGoModule;

                /**
                 * Decodes a StartGoModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StartGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.StartGoModule;

                /**
                 * Verifies a StartGoModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a StartGoResultModule. */
            interface IStartGoResultModule {

                /** StartGoResultModule result */
                result?: (number|null);
            }

            /** Represents a StartGoResultModule. */
            class StartGoResultModule implements IStartGoResultModule {

                /**
                 * Constructs a new StartGoResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IStartGoResultModule);

                /** StartGoResultModule result. */
                public result: number;

                /**
                 * Creates a new StartGoResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartGoResultModule instance
                 */
                public static create(properties?: com.protobuff.data.IStartGoResultModule): com.protobuff.data.StartGoResultModule;

                /**
                 * Encodes the specified StartGoResultModule message. Does not implicitly {@link com.protobuff.data.StartGoResultModule.verify|verify} messages.
                 * @param message StartGoResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IStartGoResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified StartGoResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.StartGoResultModule.verify|verify} messages.
                 * @param message StartGoResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IStartGoResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a StartGoResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartGoResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.StartGoResultModule;

                /**
                 * Decodes a StartGoResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StartGoResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.StartGoResultModule;

                /**
                 * Verifies a StartGoResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RoleStarGoModule. */
            interface IRoleStarGoModule {

                /** RoleStarGoModule roleId */
                roleId?: (number|null);

                /** RoleStarGoModule type */
                type?: (number|null);

                /** RoleStarGoModule cardList */
                cardList?: (com.protobuff.data.ICardModule[]|null);
            }

            /** Represents a RoleStarGoModule. */
            class RoleStarGoModule implements IRoleStarGoModule {

                /**
                 * Constructs a new RoleStarGoModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRoleStarGoModule);

                /** RoleStarGoModule roleId. */
                public roleId: number;

                /** RoleStarGoModule type. */
                public type: number;

                /** RoleStarGoModule cardList. */
                public cardList: com.protobuff.data.ICardModule[];

                /**
                 * Creates a new RoleStarGoModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoleStarGoModule instance
                 */
                public static create(properties?: com.protobuff.data.IRoleStarGoModule): com.protobuff.data.RoleStarGoModule;

                /**
                 * Encodes the specified RoleStarGoModule message. Does not implicitly {@link com.protobuff.data.RoleStarGoModule.verify|verify} messages.
                 * @param message RoleStarGoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRoleStarGoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RoleStarGoModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleStarGoModule.verify|verify} messages.
                 * @param message RoleStarGoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRoleStarGoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RoleStarGoModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoleStarGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RoleStarGoModule;

                /**
                 * Decodes a RoleStarGoModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoleStarGoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RoleStarGoModule;

                /**
                 * Verifies a RoleStarGoModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a ResultModule. */
            interface IResultModule {

                /** ResultModule result */
                result?: (number|null);
            }

            /** Represents a ResultModule. */
            class ResultModule implements IResultModule {

                /**
                 * Constructs a new ResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IResultModule);

                /** ResultModule result. */
                public result: number;

                /**
                 * Creates a new ResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResultModule instance
                 */
                public static create(properties?: com.protobuff.data.IResultModule): com.protobuff.data.ResultModule;

                /**
                 * Encodes the specified ResultModule message. Does not implicitly {@link com.protobuff.data.ResultModule.verify|verify} messages.
                 * @param message ResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.ResultModule.verify|verify} messages.
                 * @param message ResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.ResultModule;

                /**
                 * Decodes a ResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.ResultModule;

                /**
                 * Verifies a ResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a SettlementModule. */
            interface ISettlementModule {

                /** SettlementModule isSingle */
                isSingle?: (number|null);

                /** SettlementModule isLand */
                isLand?: (number|null);

                /** SettlementModule roleList */
                roleList?: (com.protobuff.data.IRoleRoomModule[]|null);
            }

            /** Represents a SettlementModule. */
            class SettlementModule implements ISettlementModule {

                /**
                 * Constructs a new SettlementModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ISettlementModule);

                /** SettlementModule isSingle. */
                public isSingle: number;

                /** SettlementModule isLand. */
                public isLand: number;

                /** SettlementModule roleList. */
                public roleList: com.protobuff.data.IRoleRoomModule[];

                /**
                 * Creates a new SettlementModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SettlementModule instance
                 */
                public static create(properties?: com.protobuff.data.ISettlementModule): com.protobuff.data.SettlementModule;

                /**
                 * Encodes the specified SettlementModule message. Does not implicitly {@link com.protobuff.data.SettlementModule.verify|verify} messages.
                 * @param message SettlementModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ISettlementModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified SettlementModule message, length delimited. Does not implicitly {@link com.protobuff.data.SettlementModule.verify|verify} messages.
                 * @param message SettlementModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ISettlementModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a SettlementModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.SettlementModule;

                /**
                 * Decodes a SettlementModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.SettlementModule;

                /**
                 * Verifies a SettlementModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RolePrepareModule. */
            interface IRolePrepareModule {

                /** RolePrepareModule status */
                status?: (number|null);
            }

            /** Represents a RolePrepareModule. */
            class RolePrepareModule implements IRolePrepareModule {

                /**
                 * Constructs a new RolePrepareModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRolePrepareModule);

                /** RolePrepareModule status. */
                public status: number;

                /**
                 * Creates a new RolePrepareModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RolePrepareModule instance
                 */
                public static create(properties?: com.protobuff.data.IRolePrepareModule): com.protobuff.data.RolePrepareModule;

                /**
                 * Encodes the specified RolePrepareModule message. Does not implicitly {@link com.protobuff.data.RolePrepareModule.verify|verify} messages.
                 * @param message RolePrepareModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRolePrepareModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RolePrepareModule message, length delimited. Does not implicitly {@link com.protobuff.data.RolePrepareModule.verify|verify} messages.
                 * @param message RolePrepareModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRolePrepareModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RolePrepareModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RolePrepareModule;

                /**
                 * Decodes a RolePrepareModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RolePrepareModule;

                /**
                 * Verifies a RolePrepareModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of an AddCritModule. */
            interface IAddCritModule {

                /** AddCritModule roleId */
                roleId?: (number|null);

                /** AddCritModule waitTime */
                waitTime?: (number|null);
            }

            /** Represents an AddCritModule. */
            class AddCritModule implements IAddCritModule {

                /**
                 * Constructs a new AddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IAddCritModule);

                /** AddCritModule roleId. */
                public roleId: number;

                /** AddCritModule waitTime. */
                public waitTime: number;

                /**
                 * Creates a new AddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IAddCritModule): com.protobuff.data.AddCritModule;

                /**
                 * Encodes the specified AddCritModule message. Does not implicitly {@link com.protobuff.data.AddCritModule.verify|verify} messages.
                 * @param message AddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified AddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.AddCritModule.verify|verify} messages.
                 * @param message AddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes an AddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.AddCritModule;

                /**
                 * Decodes an AddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.AddCritModule;

                /**
                 * Verifies an AddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a DoAddCritModule. */
            interface IDoAddCritModule {

                /** DoAddCritModule crit */
                crit?: (number|null);
            }

            /** Represents a DoAddCritModule. */
            class DoAddCritModule implements IDoAddCritModule {

                /**
                 * Constructs a new DoAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IDoAddCritModule);

                /** DoAddCritModule crit. */
                public crit: number;

                /**
                 * Creates a new DoAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DoAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IDoAddCritModule): com.protobuff.data.DoAddCritModule;

                /**
                 * Encodes the specified DoAddCritModule message. Does not implicitly {@link com.protobuff.data.DoAddCritModule.verify|verify} messages.
                 * @param message DoAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IDoAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified DoAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.DoAddCritModule.verify|verify} messages.
                 * @param message DoAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IDoAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a DoAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.DoAddCritModule;

                /**
                 * Decodes a DoAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.DoAddCritModule;

                /**
                 * Verifies a DoAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RoleAddCritModule. */
            interface IRoleAddCritModule {

                /** RoleAddCritModule roleId */
                roleId?: (number|null);

                /** RoleAddCritModule crit */
                crit?: (number|null);
            }

            /** Represents a RoleAddCritModule. */
            class RoleAddCritModule implements IRoleAddCritModule {

                /**
                 * Constructs a new RoleAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRoleAddCritModule);

                /** RoleAddCritModule roleId. */
                public roleId: number;

                /** RoleAddCritModule crit. */
                public crit: number;

                /**
                 * Creates a new RoleAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoleAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IRoleAddCritModule): com.protobuff.data.RoleAddCritModule;

                /**
                 * Encodes the specified RoleAddCritModule message. Does not implicitly {@link com.protobuff.data.RoleAddCritModule.verify|verify} messages.
                 * @param message RoleAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRoleAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RoleAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleAddCritModule.verify|verify} messages.
                 * @param message RoleAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRoleAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RoleAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RoleAddCritModule;

                /**
                 * Decodes a RoleAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RoleAddCritModule;

                /**
                 * Verifies a RoleAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a SendChatMessageModule. */
            interface ISendChatMessageModule {

                /** SendChatMessageModule chatType */
                chatType?: (number|null);

                /** SendChatMessageModule rId */
                rId?: (number|null);

                /** SendChatMessageModule content */
                content?: (string|null);
            }

            /** Represents a SendChatMessageModule. */
            class SendChatMessageModule implements ISendChatMessageModule {

                /**
                 * Constructs a new SendChatMessageModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ISendChatMessageModule);

                /** SendChatMessageModule chatType. */
                public chatType: number;

                /** SendChatMessageModule rId. */
                public rId: number;

                /** SendChatMessageModule content. */
                public content: string;

                /**
                 * Creates a new SendChatMessageModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SendChatMessageModule instance
                 */
                public static create(properties?: com.protobuff.data.ISendChatMessageModule): com.protobuff.data.SendChatMessageModule;

                /**
                 * Encodes the specified SendChatMessageModule message. Does not implicitly {@link com.protobuff.data.SendChatMessageModule.verify|verify} messages.
                 * @param message SendChatMessageModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ISendChatMessageModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified SendChatMessageModule message, length delimited. Does not implicitly {@link com.protobuff.data.SendChatMessageModule.verify|verify} messages.
                 * @param message SendChatMessageModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ISendChatMessageModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a SendChatMessageModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SendChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.SendChatMessageModule;

                /**
                 * Decodes a SendChatMessageModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SendChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.SendChatMessageModule;

                /**
                 * Verifies a SendChatMessageModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a ReceiveChatMessageModule. */
            interface IReceiveChatMessageModule {

                /** ReceiveChatMessageModule chatType */
                chatType?: (number|null);

                /** ReceiveChatMessageModule sId */
                sId?: (number|null);

                /** ReceiveChatMessageModule sNickName */
                sNickName?: (string|null);

                /** ReceiveChatMessageModule rId */
                rId?: (number|null);

                /** ReceiveChatMessageModule content */
                content?: (string|null);
            }

            /** Represents a ReceiveChatMessageModule. */
            class ReceiveChatMessageModule implements IReceiveChatMessageModule {

                /**
                 * Constructs a new ReceiveChatMessageModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IReceiveChatMessageModule);

                /** ReceiveChatMessageModule chatType. */
                public chatType: number;

                /** ReceiveChatMessageModule sId. */
                public sId: number;

                /** ReceiveChatMessageModule sNickName. */
                public sNickName: string;

                /** ReceiveChatMessageModule rId. */
                public rId: number;

                /** ReceiveChatMessageModule content. */
                public content: string;

                /**
                 * Creates a new ReceiveChatMessageModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReceiveChatMessageModule instance
                 */
                public static create(properties?: com.protobuff.data.IReceiveChatMessageModule): com.protobuff.data.ReceiveChatMessageModule;

                /**
                 * Encodes the specified ReceiveChatMessageModule message. Does not implicitly {@link com.protobuff.data.ReceiveChatMessageModule.verify|verify} messages.
                 * @param message ReceiveChatMessageModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IReceiveChatMessageModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReceiveChatMessageModule message, length delimited. Does not implicitly {@link com.protobuff.data.ReceiveChatMessageModule.verify|verify} messages.
                 * @param message ReceiveChatMessageModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IReceiveChatMessageModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReceiveChatMessageModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReceiveChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.ReceiveChatMessageModule;

                /**
                 * Decodes a ReceiveChatMessageModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReceiveChatMessageModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.ReceiveChatMessageModule;

                /**
                 * Verifies a ReceiveChatMessageModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a TipsModule. */
            interface ITipsModule {

                /** TipsModule type */
                type?: (number|null);

                /** TipsModule tips */
                tips?: (string|null);
            }

            /** Represents a TipsModule. */
            class TipsModule implements ITipsModule {

                /**
                 * Constructs a new TipsModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ITipsModule);

                /** TipsModule type. */
                public type: number;

                /** TipsModule tips. */
                public tips: string;

                /**
                 * Creates a new TipsModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TipsModule instance
                 */
                public static create(properties?: com.protobuff.data.ITipsModule): com.protobuff.data.TipsModule;

                /**
                 * Encodes the specified TipsModule message. Does not implicitly {@link com.protobuff.data.TipsModule.verify|verify} messages.
                 * @param message TipsModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ITipsModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified TipsModule message, length delimited. Does not implicitly {@link com.protobuff.data.TipsModule.verify|verify} messages.
                 * @param message TipsModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ITipsModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a TipsModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TipsModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.TipsModule;

                /**
                 * Decodes a TipsModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TipsModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.TipsModule;

                /**
                 * Verifies a TipsModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a ResultErrorModule. */
            interface IResultErrorModule {

                /** ResultErrorModule packetType */
                packetType?: (number|null);

                /** ResultErrorModule errorCode */
                errorCode?: (number|null);
            }

            /** Represents a ResultErrorModule. */
            class ResultErrorModule implements IResultErrorModule {

                /**
                 * Constructs a new ResultErrorModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IResultErrorModule);

                /** ResultErrorModule packetType. */
                public packetType: number;

                /** ResultErrorModule errorCode. */
                public errorCode: number;

                /**
                 * Creates a new ResultErrorModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResultErrorModule instance
                 */
                public static create(properties?: com.protobuff.data.IResultErrorModule): com.protobuff.data.ResultErrorModule;

                /**
                 * Encodes the specified ResultErrorModule message. Does not implicitly {@link com.protobuff.data.ResultErrorModule.verify|verify} messages.
                 * @param message ResultErrorModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IResultErrorModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResultErrorModule message, length delimited. Does not implicitly {@link com.protobuff.data.ResultErrorModule.verify|verify} messages.
                 * @param message ResultErrorModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IResultErrorModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResultErrorModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResultErrorModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.ResultErrorModule;

                /**
                 * Decodes a ResultErrorModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResultErrorModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.ResultErrorModule;

                /**
                 * Verifies a ResultErrorModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HeartModule. */
            interface IHeartModule {
            }

            /** Represents a HeartModule. */
            class HeartModule implements IHeartModule {

                /**
                 * Constructs a new HeartModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHeartModule);

                /**
                 * Creates a new HeartModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HeartModule instance
                 */
                public static create(properties?: com.protobuff.data.IHeartModule): com.protobuff.data.HeartModule;

                /**
                 * Encodes the specified HeartModule message. Does not implicitly {@link com.protobuff.data.HeartModule.verify|verify} messages.
                 * @param message HeartModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHeartModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HeartModule message, length delimited. Does not implicitly {@link com.protobuff.data.HeartModule.verify|verify} messages.
                 * @param message HeartModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHeartModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HeartModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HeartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HeartModule;

                /**
                 * Decodes a HeartModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HeartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HeartModule;

                /**
                 * Verifies a HeartModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HeartResultModule. */
            interface IHeartResultModule {

                /** HeartResultModule system_currtime */
                system_currtime?: (number|Long|null);
            }

            /** Represents a HeartResultModule. */
            class HeartResultModule implements IHeartResultModule {

                /**
                 * Constructs a new HeartResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHeartResultModule);

                /** HeartResultModule system_currtime. */
                public system_currtime: (number|Long);

                /**
                 * Creates a new HeartResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HeartResultModule instance
                 */
                public static create(properties?: com.protobuff.data.IHeartResultModule): com.protobuff.data.HeartResultModule;

                /**
                 * Encodes the specified HeartResultModule message. Does not implicitly {@link com.protobuff.data.HeartResultModule.verify|verify} messages.
                 * @param message HeartResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHeartResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HeartResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.HeartResultModule.verify|verify} messages.
                 * @param message HeartResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHeartResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HeartResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HeartResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HeartResultModule;

                /**
                 * Decodes a HeartResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HeartResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HeartResultModule;

                /**
                 * Verifies a HeartResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a CurrencyInfoModule. */
            interface ICurrencyInfoModule {

                /** CurrencyInfoModule gold */
                gold?: (number|null);

                /** CurrencyInfoModule copper */
                copper?: (number|null);
            }

            /** Represents a CurrencyInfoModule. */
            class CurrencyInfoModule implements ICurrencyInfoModule {

                /**
                 * Constructs a new CurrencyInfoModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ICurrencyInfoModule);

                /** CurrencyInfoModule gold. */
                public gold: number;

                /** CurrencyInfoModule copper. */
                public copper: number;

                /**
                 * Creates a new CurrencyInfoModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CurrencyInfoModule instance
                 */
                public static create(properties?: com.protobuff.data.ICurrencyInfoModule): com.protobuff.data.CurrencyInfoModule;

                /**
                 * Encodes the specified CurrencyInfoModule message. Does not implicitly {@link com.protobuff.data.CurrencyInfoModule.verify|verify} messages.
                 * @param message CurrencyInfoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ICurrencyInfoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified CurrencyInfoModule message, length delimited. Does not implicitly {@link com.protobuff.data.CurrencyInfoModule.verify|verify} messages.
                 * @param message CurrencyInfoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ICurrencyInfoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a CurrencyInfoModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CurrencyInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.CurrencyInfoModule;

                /**
                 * Decodes a CurrencyInfoModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CurrencyInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.CurrencyInfoModule;

                /**
                 * Verifies a CurrencyInfoModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a KickOffRoleModule. */
            interface IKickOffRoleModule {

                /** KickOffRoleModule kickType */
                kickType?: (number|null);
            }

            /** Represents a KickOffRoleModule. */
            class KickOffRoleModule implements IKickOffRoleModule {

                /**
                 * Constructs a new KickOffRoleModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IKickOffRoleModule);

                /** KickOffRoleModule kickType. */
                public kickType: number;

                /**
                 * Creates a new KickOffRoleModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KickOffRoleModule instance
                 */
                public static create(properties?: com.protobuff.data.IKickOffRoleModule): com.protobuff.data.KickOffRoleModule;

                /**
                 * Encodes the specified KickOffRoleModule message. Does not implicitly {@link com.protobuff.data.KickOffRoleModule.verify|verify} messages.
                 * @param message KickOffRoleModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IKickOffRoleModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified KickOffRoleModule message, length delimited. Does not implicitly {@link com.protobuff.data.KickOffRoleModule.verify|verify} messages.
                 * @param message KickOffRoleModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IKickOffRoleModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a KickOffRoleModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KickOffRoleModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.KickOffRoleModule;

                /**
                 * Decodes a KickOffRoleModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KickOffRoleModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.KickOffRoleModule;

                /**
                 * Verifies a KickOffRoleModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a DisConnectionModule. */
            interface IDisConnectionModule {
            }

            /** Represents a DisConnectionModule. */
            class DisConnectionModule implements IDisConnectionModule {

                /**
                 * Constructs a new DisConnectionModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IDisConnectionModule);

                /**
                 * Creates a new DisConnectionModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DisConnectionModule instance
                 */
                public static create(properties?: com.protobuff.data.IDisConnectionModule): com.protobuff.data.DisConnectionModule;

                /**
                 * Encodes the specified DisConnectionModule message. Does not implicitly {@link com.protobuff.data.DisConnectionModule.verify|verify} messages.
                 * @param message DisConnectionModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IDisConnectionModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified DisConnectionModule message, length delimited. Does not implicitly {@link com.protobuff.data.DisConnectionModule.verify|verify} messages.
                 * @param message DisConnectionModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IDisConnectionModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a DisConnectionModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DisConnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.DisConnectionModule;

                /**
                 * Decodes a DisConnectionModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DisConnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.DisConnectionModule;

                /**
                 * Verifies a DisConnectionModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a LoginModule. */
            interface ILoginModule {

                /** LoginModule openId */
                openId?: (string|null);

                /** LoginModule channelId */
                channelId?: (string|null);

                /** LoginModule nickname */
                nickname?: (string|null);

                /** LoginModule imgurl */
                imgurl?: (string|null);

                /** LoginModule sex */
                sex?: (number|null);

                /** LoginModule device */
                device?: (string|null);
            }

            /** Represents a LoginModule. */
            class LoginModule implements ILoginModule {

                /**
                 * Constructs a new LoginModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ILoginModule);

                /** LoginModule openId. */
                public openId: string;

                /** LoginModule channelId. */
                public channelId: string;

                /** LoginModule nickname. */
                public nickname: string;

                /** LoginModule imgurl. */
                public imgurl: string;

                /** LoginModule sex. */
                public sex: number;

                /** LoginModule device. */
                public device: string;

                /**
                 * Creates a new LoginModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoginModule instance
                 */
                public static create(properties?: com.protobuff.data.ILoginModule): com.protobuff.data.LoginModule;

                /**
                 * Encodes the specified LoginModule message. Does not implicitly {@link com.protobuff.data.LoginModule.verify|verify} messages.
                 * @param message LoginModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ILoginModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified LoginModule message, length delimited. Does not implicitly {@link com.protobuff.data.LoginModule.verify|verify} messages.
                 * @param message LoginModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ILoginModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a LoginModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoginModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.LoginModule;

                /**
                 * Decodes a LoginModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoginModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.LoginModule;

                /**
                 * Verifies a LoginModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a LoginResultModule. */
            interface ILoginResultModule {

                /** LoginResultModule loginResult */
                loginResult?: (number|null);

                /** LoginResultModule loginDesc */
                loginDesc?: (string|null);
            }

            /** Represents a LoginResultModule. */
            class LoginResultModule implements ILoginResultModule {

                /**
                 * Constructs a new LoginResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.ILoginResultModule);

                /** LoginResultModule loginResult. */
                public loginResult: number;

                /** LoginResultModule loginDesc. */
                public loginDesc: string;

                /**
                 * Creates a new LoginResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoginResultModule instance
                 */
                public static create(properties?: com.protobuff.data.ILoginResultModule): com.protobuff.data.LoginResultModule;

                /**
                 * Encodes the specified LoginResultModule message. Does not implicitly {@link com.protobuff.data.LoginResultModule.verify|verify} messages.
                 * @param message LoginResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.ILoginResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified LoginResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.LoginResultModule.verify|verify} messages.
                 * @param message LoginResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.ILoginResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a LoginResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoginResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.LoginResultModule;

                /**
                 * Decodes a LoginResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoginResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.LoginResultModule;

                /**
                 * Verifies a LoginResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a RoleInfoModule. */
            interface IRoleInfoModule {

                /** RoleInfoModule roleId */
                roleId?: (number|null);

                /** RoleInfoModule nickName */
                nickName?: (string|null);

                /** RoleInfoModule imgurl */
                imgurl?: (string|null);

                /** RoleInfoModule level */
                level?: (number|null);

                /** RoleInfoModule reconnection */
                reconnection?: (string|null);

                /** RoleInfoModule age */
                age?: (number|null);

                /** RoleInfoModule gold */
                gold?: (number|null);

                /** RoleInfoModule copper */
                copper?: (number|null);
            }

            /** Represents a RoleInfoModule. */
            class RoleInfoModule implements IRoleInfoModule {

                /**
                 * Constructs a new RoleInfoModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IRoleInfoModule);

                /** RoleInfoModule roleId. */
                public roleId: number;

                /** RoleInfoModule nickName. */
                public nickName: string;

                /** RoleInfoModule imgurl. */
                public imgurl: string;

                /** RoleInfoModule level. */
                public level: number;

                /** RoleInfoModule reconnection. */
                public reconnection: string;

                /** RoleInfoModule age. */
                public age: number;

                /** RoleInfoModule gold. */
                public gold: number;

                /** RoleInfoModule copper. */
                public copper: number;

                /**
                 * Creates a new RoleInfoModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoleInfoModule instance
                 */
                public static create(properties?: com.protobuff.data.IRoleInfoModule): com.protobuff.data.RoleInfoModule;

                /**
                 * Encodes the specified RoleInfoModule message. Does not implicitly {@link com.protobuff.data.RoleInfoModule.verify|verify} messages.
                 * @param message RoleInfoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IRoleInfoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified RoleInfoModule message, length delimited. Does not implicitly {@link com.protobuff.data.RoleInfoModule.verify|verify} messages.
                 * @param message RoleInfoModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IRoleInfoModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a RoleInfoModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoleInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.RoleInfoModule;

                /**
                 * Decodes a RoleInfoModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoleInfoModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.RoleInfoModule;

                /**
                 * Verifies a RoleInfoModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a ReconnectionModule. */
            interface IReconnectionModule {

                /** ReconnectionModule reconnection */
                reconnection?: (string|null);
            }

            /** Represents a ReconnectionModule. */
            class ReconnectionModule implements IReconnectionModule {

                /**
                 * Constructs a new ReconnectionModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IReconnectionModule);

                /** ReconnectionModule reconnection. */
                public reconnection: string;

                /**
                 * Creates a new ReconnectionModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReconnectionModule instance
                 */
                public static create(properties?: com.protobuff.data.IReconnectionModule): com.protobuff.data.ReconnectionModule;

                /**
                 * Encodes the specified ReconnectionModule message. Does not implicitly {@link com.protobuff.data.ReconnectionModule.verify|verify} messages.
                 * @param message ReconnectionModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IReconnectionModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReconnectionModule message, length delimited. Does not implicitly {@link com.protobuff.data.ReconnectionModule.verify|verify} messages.
                 * @param message ReconnectionModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IReconnectionModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReconnectionModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReconnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.ReconnectionModule;

                /**
                 * Decodes a ReconnectionModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReconnectionModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.ReconnectionModule;

                /**
                 * Verifies a ReconnectionModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a ReconnectionResult. */
            interface IReconnectionResult {

                /** ReconnectionResult type */
                type?: (number|null);
            }

            /** Represents a ReconnectionResult. */
            class ReconnectionResult implements IReconnectionResult {

                /**
                 * Constructs a new ReconnectionResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IReconnectionResult);

                /** ReconnectionResult type. */
                public type: number;

                /**
                 * Creates a new ReconnectionResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReconnectionResult instance
                 */
                public static create(properties?: com.protobuff.data.IReconnectionResult): com.protobuff.data.ReconnectionResult;

                /**
                 * Encodes the specified ReconnectionResult message. Does not implicitly {@link com.protobuff.data.ReconnectionResult.verify|verify} messages.
                 * @param message ReconnectionResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IReconnectionResult, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReconnectionResult message, length delimited. Does not implicitly {@link com.protobuff.data.ReconnectionResult.verify|verify} messages.
                 * @param message ReconnectionResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IReconnectionResult, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReconnectionResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReconnectionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.ReconnectionResult;

                /**
                 * Decodes a ReconnectionResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReconnectionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.ReconnectionResult;

                /**
                 * Verifies a ReconnectionResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuCardModule. */
            interface IHdNiuNiuCardModule {

                /** HdNiuNiuCardModule cards */
                cards?: (number[]|null);
            }

            /** Represents a HdNiuNiuCardModule. */
            class HdNiuNiuCardModule implements IHdNiuNiuCardModule {

                /**
                 * Constructs a new HdNiuNiuCardModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuCardModule);

                /** HdNiuNiuCardModule cards. */
                public cards: number[];

                /**
                 * Creates a new HdNiuNiuCardModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuCardModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuCardModule): com.protobuff.data.HdNiuNiuCardModule;

                /**
                 * Encodes the specified HdNiuNiuCardModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuCardModule.verify|verify} messages.
                 * @param message HdNiuNiuCardModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuCardModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuCardModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuCardModule.verify|verify} messages.
                 * @param message HdNiuNiuCardModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuCardModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuCardModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuCardModule;

                /**
                 * Decodes a HdNiuNiuCardModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuCardModule;

                /**
                 * Verifies a HdNiuNiuCardModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuRoleRoomModule. */
            interface IHdNiuNiuRoleRoomModule {

                /** HdNiuNiuRoleRoomModule roleId */
                roleId?: (number|null);

                /** HdNiuNiuRoleRoomModule nickName */
                nickName?: (string|null);

                /** HdNiuNiuRoleRoomModule imgurl */
                imgurl?: (string|null);

                /** HdNiuNiuRoleRoomModule copper */
                copper?: (number|null);

                /** HdNiuNiuRoleRoomModule status */
                status?: (number|null);

                /** HdNiuNiuRoleRoomModule changeCopper */
                changeCopper?: (number|null);

                /** HdNiuNiuRoleRoomModule settleStatus */
                settleStatus?: (number|null);
            }

            /** Represents a HdNiuNiuRoleRoomModule. */
            class HdNiuNiuRoleRoomModule implements IHdNiuNiuRoleRoomModule {

                /**
                 * Constructs a new HdNiuNiuRoleRoomModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuRoleRoomModule);

                /** HdNiuNiuRoleRoomModule roleId. */
                public roleId: number;

                /** HdNiuNiuRoleRoomModule nickName. */
                public nickName: string;

                /** HdNiuNiuRoleRoomModule imgurl. */
                public imgurl: string;

                /** HdNiuNiuRoleRoomModule copper. */
                public copper: number;

                /** HdNiuNiuRoleRoomModule status. */
                public status: number;

                /** HdNiuNiuRoleRoomModule changeCopper. */
                public changeCopper: number;

                /** HdNiuNiuRoleRoomModule settleStatus. */
                public settleStatus: number;

                /**
                 * Creates a new HdNiuNiuRoleRoomModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuRoleRoomModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuRoleRoomModule): com.protobuff.data.HdNiuNiuRoleRoomModule;

                /**
                 * Encodes the specified HdNiuNiuRoleRoomModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleRoomModule.verify|verify} messages.
                 * @param message HdNiuNiuRoleRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuRoleRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuRoleRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleRoomModule.verify|verify} messages.
                 * @param message HdNiuNiuRoleRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuRoleRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuRoleRoomModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuRoleRoomModule;

                /**
                 * Decodes a HdNiuNiuRoleRoomModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuRoleRoomModule;

                /**
                 * Verifies a HdNiuNiuRoleRoomModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuRequestMatchModule. */
            interface IHdNiuNiuRequestMatchModule {

                /** HdNiuNiuRequestMatchModule type */
                type?: (number|null);
            }

            /** Represents a HdNiuNiuRequestMatchModule. */
            class HdNiuNiuRequestMatchModule implements IHdNiuNiuRequestMatchModule {

                /**
                 * Constructs a new HdNiuNiuRequestMatchModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuRequestMatchModule);

                /** HdNiuNiuRequestMatchModule type. */
                public type: number;

                /**
                 * Creates a new HdNiuNiuRequestMatchModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuRequestMatchModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuRequestMatchModule): com.protobuff.data.HdNiuNiuRequestMatchModule;

                /**
                 * Encodes the specified HdNiuNiuRequestMatchModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchModule.verify|verify} messages.
                 * @param message HdNiuNiuRequestMatchModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuRequestMatchModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuRequestMatchModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchModule.verify|verify} messages.
                 * @param message HdNiuNiuRequestMatchModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuRequestMatchModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuRequestMatchModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuRequestMatchModule;

                /**
                 * Decodes a HdNiuNiuRequestMatchModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuRequestMatchModule;

                /**
                 * Verifies a HdNiuNiuRequestMatchModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuRequestMatchResultModule. */
            interface IHdNiuNiuRequestMatchResultModule {

                /** HdNiuNiuRequestMatchResultModule type */
                type?: (number|null);

                /** HdNiuNiuRequestMatchResultModule result */
                result?: (number|null);
            }

            /** Represents a HdNiuNiuRequestMatchResultModule. */
            class HdNiuNiuRequestMatchResultModule implements IHdNiuNiuRequestMatchResultModule {

                /**
                 * Constructs a new HdNiuNiuRequestMatchResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuRequestMatchResultModule);

                /** HdNiuNiuRequestMatchResultModule type. */
                public type: number;

                /** HdNiuNiuRequestMatchResultModule result. */
                public result: number;

                /**
                 * Creates a new HdNiuNiuRequestMatchResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuRequestMatchResultModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuRequestMatchResultModule): com.protobuff.data.HdNiuNiuRequestMatchResultModule;

                /**
                 * Encodes the specified HdNiuNiuRequestMatchResultModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @param message HdNiuNiuRequestMatchResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuRequestMatchResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuRequestMatchResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @param message HdNiuNiuRequestMatchResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuRequestMatchResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuRequestMatchResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuRequestMatchResultModule;

                /**
                 * Decodes a HdNiuNiuRequestMatchResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuRequestMatchResultModule;

                /**
                 * Verifies a HdNiuNiuRequestMatchResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuQuitModule. */
            interface IHdNiuNiuQuitModule {
            }

            /** Represents a HdNiuNiuQuitModule. */
            class HdNiuNiuQuitModule implements IHdNiuNiuQuitModule {

                /**
                 * Constructs a new HdNiuNiuQuitModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuQuitModule);

                /**
                 * Creates a new HdNiuNiuQuitModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuQuitModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuQuitModule): com.protobuff.data.HdNiuNiuQuitModule;

                /**
                 * Encodes the specified HdNiuNiuQuitModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitModule.verify|verify} messages.
                 * @param message HdNiuNiuQuitModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuQuitModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuQuitModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitModule.verify|verify} messages.
                 * @param message HdNiuNiuQuitModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuQuitModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuQuitModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuQuitModule;

                /**
                 * Decodes a HdNiuNiuQuitModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuQuitModule;

                /**
                 * Verifies a HdNiuNiuQuitModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuQuitResultModule. */
            interface IHdNiuNiuQuitResultModule {
            }

            /** Represents a HdNiuNiuQuitResultModule. */
            class HdNiuNiuQuitResultModule implements IHdNiuNiuQuitResultModule {

                /**
                 * Constructs a new HdNiuNiuQuitResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuQuitResultModule);

                /**
                 * Creates a new HdNiuNiuQuitResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuQuitResultModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuQuitResultModule): com.protobuff.data.HdNiuNiuQuitResultModule;

                /**
                 * Encodes the specified HdNiuNiuQuitResultModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitResultModule.verify|verify} messages.
                 * @param message HdNiuNiuQuitResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuQuitResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuQuitResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuQuitResultModule.verify|verify} messages.
                 * @param message HdNiuNiuQuitResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuQuitResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuQuitResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuQuitResultModule;

                /**
                 * Decodes a HdNiuNiuQuitResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuQuitResultModule;

                /**
                 * Verifies a HdNiuNiuQuitResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuEnterRoomModule. */
            interface IHdNiuNiuEnterRoomModule {

                /** HdNiuNiuEnterRoomModule waittime */
                waittime?: (number|null);

                /** HdNiuNiuEnterRoomModule landId */
                landId?: (number|null);

                /** HdNiuNiuEnterRoomModule landCrit */
                landCrit?: (number|null);

                /** HdNiuNiuEnterRoomModule landList */
                landList?: (number[]|null);

                /** HdNiuNiuEnterRoomModule roleList */
                roleList?: (com.protobuff.data.IHdNiuNiuRoleRoomModule[]|null);
            }

            /** Represents a HdNiuNiuEnterRoomModule. */
            class HdNiuNiuEnterRoomModule implements IHdNiuNiuEnterRoomModule {

                /**
                 * Constructs a new HdNiuNiuEnterRoomModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuEnterRoomModule);

                /** HdNiuNiuEnterRoomModule waittime. */
                public waittime: number;

                /** HdNiuNiuEnterRoomModule landId. */
                public landId: number;

                /** HdNiuNiuEnterRoomModule landCrit. */
                public landCrit: number;

                /** HdNiuNiuEnterRoomModule landList. */
                public landList: number[];

                /** HdNiuNiuEnterRoomModule roleList. */
                public roleList: com.protobuff.data.IHdNiuNiuRoleRoomModule[];

                /**
                 * Creates a new HdNiuNiuEnterRoomModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuEnterRoomModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuEnterRoomModule): com.protobuff.data.HdNiuNiuEnterRoomModule;

                /**
                 * Encodes the specified HdNiuNiuEnterRoomModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuEnterRoomModule.verify|verify} messages.
                 * @param message HdNiuNiuEnterRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuEnterRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuEnterRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuEnterRoomModule.verify|verify} messages.
                 * @param message HdNiuNiuEnterRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuEnterRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuEnterRoomModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuEnterRoomModule;

                /**
                 * Decodes a HdNiuNiuEnterRoomModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuEnterRoomModule;

                /**
                 * Verifies a HdNiuNiuEnterRoomModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuRoleChangeModule. */
            interface IHdNiuNiuRoleChangeModule {

                /** HdNiuNiuRoleChangeModule type */
                type?: (number|null);

                /** HdNiuNiuRoleChangeModule role */
                role?: (com.protobuff.data.IHdNiuNiuRoleRoomModule|null);
            }

            /** Represents a HdNiuNiuRoleChangeModule. */
            class HdNiuNiuRoleChangeModule implements IHdNiuNiuRoleChangeModule {

                /**
                 * Constructs a new HdNiuNiuRoleChangeModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuRoleChangeModule);

                /** HdNiuNiuRoleChangeModule type. */
                public type: number;

                /** HdNiuNiuRoleChangeModule role. */
                public role?: (com.protobuff.data.IHdNiuNiuRoleRoomModule|null);

                /**
                 * Creates a new HdNiuNiuRoleChangeModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuRoleChangeModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuRoleChangeModule): com.protobuff.data.HdNiuNiuRoleChangeModule;

                /**
                 * Encodes the specified HdNiuNiuRoleChangeModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleChangeModule.verify|verify} messages.
                 * @param message HdNiuNiuRoleChangeModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuRoleChangeModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuRoleChangeModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleChangeModule.verify|verify} messages.
                 * @param message HdNiuNiuRoleChangeModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuRoleChangeModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuRoleChangeModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuRoleChangeModule;

                /**
                 * Decodes a HdNiuNiuRoleChangeModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuRoleChangeModule;

                /**
                 * Verifies a HdNiuNiuRoleChangeModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdLandModule. */
            interface IHdLandModule {

                /** HdLandModule landId */
                landId?: (number|null);

                /** HdLandModule landCrit */
                landCrit?: (number|null);
            }

            /** Represents a HdLandModule. */
            class HdLandModule implements IHdLandModule {

                /**
                 * Constructs a new HdLandModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdLandModule);

                /** HdLandModule landId. */
                public landId: number;

                /** HdLandModule landCrit. */
                public landCrit: number;

                /**
                 * Creates a new HdLandModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdLandModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdLandModule): com.protobuff.data.HdLandModule;

                /**
                 * Encodes the specified HdLandModule message. Does not implicitly {@link com.protobuff.data.HdLandModule.verify|verify} messages.
                 * @param message HdLandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdLandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdLandModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdLandModule.verify|verify} messages.
                 * @param message HdLandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdLandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdLandModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdLandModule;

                /**
                 * Decodes a HdLandModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdLandModule;

                /**
                 * Verifies a HdLandModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdAddLandModule. */
            interface IHdAddLandModule {

                /** HdAddLandModule crit */
                crit?: (number|null);
            }

            /** Represents a HdAddLandModule. */
            class HdAddLandModule implements IHdAddLandModule {

                /**
                 * Constructs a new HdAddLandModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdAddLandModule);

                /** HdAddLandModule crit. */
                public crit: number;

                /**
                 * Creates a new HdAddLandModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdAddLandModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdAddLandModule): com.protobuff.data.HdAddLandModule;

                /**
                 * Encodes the specified HdAddLandModule message. Does not implicitly {@link com.protobuff.data.HdAddLandModule.verify|verify} messages.
                 * @param message HdAddLandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdAddLandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdAddLandModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdAddLandModule.verify|verify} messages.
                 * @param message HdAddLandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdAddLandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdAddLandModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdAddLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdAddLandModule;

                /**
                 * Decodes a HdAddLandModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdAddLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdAddLandModule;

                /**
                 * Verifies a HdAddLandModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdLandListModule. */
            interface IHdLandListModule {

                /** HdLandListModule landList */
                landList?: (number[]|null);
            }

            /** Represents a HdLandListModule. */
            class HdLandListModule implements IHdLandListModule {

                /**
                 * Constructs a new HdLandListModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdLandListModule);

                /** HdLandListModule landList. */
                public landList: number[];

                /**
                 * Creates a new HdLandListModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdLandListModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdLandListModule): com.protobuff.data.HdLandListModule;

                /**
                 * Encodes the specified HdLandListModule message. Does not implicitly {@link com.protobuff.data.HdLandListModule.verify|verify} messages.
                 * @param message HdLandListModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdLandListModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdLandListModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdLandListModule.verify|verify} messages.
                 * @param message HdLandListModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdLandListModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdLandListModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdLandListModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdLandListModule;

                /**
                 * Decodes a HdLandListModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdLandListModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdLandListModule;

                /**
                 * Verifies a HdLandListModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuAddCritModule. */
            interface IHdNiuNiuAddCritModule {

                /** HdNiuNiuAddCritModule waitTime */
                waitTime?: (number|null);
            }

            /** Represents a HdNiuNiuAddCritModule. */
            class HdNiuNiuAddCritModule implements IHdNiuNiuAddCritModule {

                /**
                 * Constructs a new HdNiuNiuAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuAddCritModule);

                /** HdNiuNiuAddCritModule waitTime. */
                public waitTime: number;

                /**
                 * Creates a new HdNiuNiuAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuAddCritModule): com.protobuff.data.HdNiuNiuAddCritModule;

                /**
                 * Encodes the specified HdNiuNiuAddCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuAddCritModule.verify|verify} messages.
                 * @param message HdNiuNiuAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuAddCritModule.verify|verify} messages.
                 * @param message HdNiuNiuAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuAddCritModule;

                /**
                 * Decodes a HdNiuNiuAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuAddCritModule;

                /**
                 * Verifies a HdNiuNiuAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuDoAddCritModule. */
            interface IHdNiuNiuDoAddCritModule {

                /** HdNiuNiuDoAddCritModule index */
                index?: (number|null);

                /** HdNiuNiuDoAddCritModule crit */
                crit?: (number|null);
            }

            /** Represents a HdNiuNiuDoAddCritModule. */
            class HdNiuNiuDoAddCritModule implements IHdNiuNiuDoAddCritModule {

                /**
                 * Constructs a new HdNiuNiuDoAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuDoAddCritModule);

                /** HdNiuNiuDoAddCritModule index. */
                public index: number;

                /** HdNiuNiuDoAddCritModule crit. */
                public crit: number;

                /**
                 * Creates a new HdNiuNiuDoAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuDoAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuDoAddCritModule): com.protobuff.data.HdNiuNiuDoAddCritModule;

                /**
                 * Encodes the specified HdNiuNiuDoAddCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuDoAddCritModule.verify|verify} messages.
                 * @param message HdNiuNiuDoAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuDoAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuDoAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuDoAddCritModule.verify|verify} messages.
                 * @param message HdNiuNiuDoAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuDoAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuDoAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuDoAddCritModule;

                /**
                 * Decodes a HdNiuNiuDoAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuDoAddCritModule;

                /**
                 * Verifies a HdNiuNiuDoAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuRoleAddCritModule. */
            interface IHdNiuNiuRoleAddCritModule {

                /** HdNiuNiuRoleAddCritModule roleId */
                roleId?: (number|null);

                /** HdNiuNiuRoleAddCritModule index */
                index?: (number|null);

                /** HdNiuNiuRoleAddCritModule crit */
                crit?: (number|null);
            }

            /** Represents a HdNiuNiuRoleAddCritModule. */
            class HdNiuNiuRoleAddCritModule implements IHdNiuNiuRoleAddCritModule {

                /**
                 * Constructs a new HdNiuNiuRoleAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuRoleAddCritModule);

                /** HdNiuNiuRoleAddCritModule roleId. */
                public roleId: number;

                /** HdNiuNiuRoleAddCritModule index. */
                public index: number;

                /** HdNiuNiuRoleAddCritModule crit. */
                public crit: number;

                /**
                 * Creates a new HdNiuNiuRoleAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuRoleAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuRoleAddCritModule): com.protobuff.data.HdNiuNiuRoleAddCritModule;

                /**
                 * Encodes the specified HdNiuNiuRoleAddCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleAddCritModule.verify|verify} messages.
                 * @param message HdNiuNiuRoleAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuRoleAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuRoleAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoleAddCritModule.verify|verify} messages.
                 * @param message HdNiuNiuRoleAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuRoleAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuRoleAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuRoleAddCritModule;

                /**
                 * Decodes a HdNiuNiuRoleAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuRoleAddCritModule;

                /**
                 * Verifies a HdNiuNiuRoleAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuRoomCritModule. */
            interface IHdNiuNiuRoomCritModule {

                /** HdNiuNiuRoomCritModule roleId */
                roleId?: (number|null);

                /** HdNiuNiuRoomCritModule crit */
                crit?: ({ [k: string]: number }|null);
            }

            /** Represents a HdNiuNiuRoomCritModule. */
            class HdNiuNiuRoomCritModule implements IHdNiuNiuRoomCritModule {

                /**
                 * Constructs a new HdNiuNiuRoomCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuRoomCritModule);

                /** HdNiuNiuRoomCritModule roleId. */
                public roleId: number;

                /** HdNiuNiuRoomCritModule crit. */
                public crit: { [k: string]: number };

                /**
                 * Creates a new HdNiuNiuRoomCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuRoomCritModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuRoomCritModule): com.protobuff.data.HdNiuNiuRoomCritModule;

                /**
                 * Encodes the specified HdNiuNiuRoomCritModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoomCritModule.verify|verify} messages.
                 * @param message HdNiuNiuRoomCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuRoomCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuRoomCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRoomCritModule.verify|verify} messages.
                 * @param message HdNiuNiuRoomCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuRoomCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuRoomCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuRoomCritModule;

                /**
                 * Decodes a HdNiuNiuRoomCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuRoomCritModule;

                /**
                 * Verifies a HdNiuNiuRoomCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuSettlementModule. */
            interface IHdNiuNiuSettlementModule {

                /** HdNiuNiuSettlementModule cardMap */
                cardMap?: ({ [k: string]: com.protobuff.data.IHdNiuNiuCardModule }|null);

                /** HdNiuNiuSettlementModule cardType */
                cardType?: ({ [k: string]: number }|null);

                /** HdNiuNiuSettlementModule roleList */
                roleList?: (com.protobuff.data.IHdNiuNiuRoleRoomModule[]|null);
            }

            /** Represents a HdNiuNiuSettlementModule. */
            class HdNiuNiuSettlementModule implements IHdNiuNiuSettlementModule {

                /**
                 * Constructs a new HdNiuNiuSettlementModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuSettlementModule);

                /** HdNiuNiuSettlementModule cardMap. */
                public cardMap: { [k: string]: com.protobuff.data.IHdNiuNiuCardModule };

                /** HdNiuNiuSettlementModule cardType. */
                public cardType: { [k: string]: number };

                /** HdNiuNiuSettlementModule roleList. */
                public roleList: com.protobuff.data.IHdNiuNiuRoleRoomModule[];

                /**
                 * Creates a new HdNiuNiuSettlementModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuSettlementModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuSettlementModule): com.protobuff.data.HdNiuNiuSettlementModule;

                /**
                 * Encodes the specified HdNiuNiuSettlementModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuSettlementModule.verify|verify} messages.
                 * @param message HdNiuNiuSettlementModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuSettlementModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuSettlementModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuSettlementModule.verify|verify} messages.
                 * @param message HdNiuNiuSettlementModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuSettlementModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuSettlementModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuSettlementModule;

                /**
                 * Decodes a HdNiuNiuSettlementModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuSettlementModule;

                /**
                 * Verifies a HdNiuNiuSettlementModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a HdNiuNiuRolePrepareModule. */
            interface IHdNiuNiuRolePrepareModule {

                /** HdNiuNiuRolePrepareModule status */
                status?: (number|null);
            }

            /** Represents a HdNiuNiuRolePrepareModule. */
            class HdNiuNiuRolePrepareModule implements IHdNiuNiuRolePrepareModule {

                /**
                 * Constructs a new HdNiuNiuRolePrepareModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IHdNiuNiuRolePrepareModule);

                /** HdNiuNiuRolePrepareModule status. */
                public status: number;

                /**
                 * Creates a new HdNiuNiuRolePrepareModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdNiuNiuRolePrepareModule instance
                 */
                public static create(properties?: com.protobuff.data.IHdNiuNiuRolePrepareModule): com.protobuff.data.HdNiuNiuRolePrepareModule;

                /**
                 * Encodes the specified HdNiuNiuRolePrepareModule message. Does not implicitly {@link com.protobuff.data.HdNiuNiuRolePrepareModule.verify|verify} messages.
                 * @param message HdNiuNiuRolePrepareModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IHdNiuNiuRolePrepareModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified HdNiuNiuRolePrepareModule message, length delimited. Does not implicitly {@link com.protobuff.data.HdNiuNiuRolePrepareModule.verify|verify} messages.
                 * @param message HdNiuNiuRolePrepareModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IHdNiuNiuRolePrepareModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a HdNiuNiuRolePrepareModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdNiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.HdNiuNiuRolePrepareModule;

                /**
                 * Decodes a HdNiuNiuRolePrepareModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdNiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.HdNiuNiuRolePrepareModule;

                /**
                 * Verifies a HdNiuNiuRolePrepareModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuCardModule. */
            interface INiuNiuCardModule {

                /** NiuNiuCardModule value */
                value?: (number|null);
            }

            /** Represents a NiuNiuCardModule. */
            class NiuNiuCardModule implements INiuNiuCardModule {

                /**
                 * Constructs a new NiuNiuCardModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuCardModule);

                /** NiuNiuCardModule value. */
                public value: number;

                /**
                 * Creates a new NiuNiuCardModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuCardModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuCardModule): com.protobuff.data.NiuNiuCardModule;

                /**
                 * Encodes the specified NiuNiuCardModule message. Does not implicitly {@link com.protobuff.data.NiuNiuCardModule.verify|verify} messages.
                 * @param message NiuNiuCardModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuCardModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuCardModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuCardModule.verify|verify} messages.
                 * @param message NiuNiuCardModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuCardModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuCardModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuCardModule;

                /**
                 * Decodes a NiuNiuCardModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuCardModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuCardModule;

                /**
                 * Verifies a NiuNiuCardModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRoleRoomModule. */
            interface INiuNiuRoleRoomModule {

                /** NiuNiuRoleRoomModule roleId */
                roleId?: (number|null);

                /** NiuNiuRoleRoomModule nickName */
                nickName?: (string|null);

                /** NiuNiuRoleRoomModule imgurl */
                imgurl?: (string|null);

                /** NiuNiuRoleRoomModule copper */
                copper?: (number|null);

                /** NiuNiuRoleRoomModule index */
                index?: (number|null);

                /** NiuNiuRoleRoomModule status */
                status?: (number|null);

                /** NiuNiuRoleRoomModule changeCopper */
                changeCopper?: (number|null);

                /** NiuNiuRoleRoomModule settleStatus */
                settleStatus?: (number|null);

                /** NiuNiuRoleRoomModule settleResult */
                settleResult?: (number|null);

                /** NiuNiuRoleRoomModule cardList */
                cardList?: (com.protobuff.data.INiuNiuCardModule[]|null);

                /** NiuNiuRoleRoomModule niuniuCardType */
                niuniuCardType?: (number|null);
            }

            /** Represents a NiuNiuRoleRoomModule. */
            class NiuNiuRoleRoomModule implements INiuNiuRoleRoomModule {

                /**
                 * Constructs a new NiuNiuRoleRoomModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRoleRoomModule);

                /** NiuNiuRoleRoomModule roleId. */
                public roleId: number;

                /** NiuNiuRoleRoomModule nickName. */
                public nickName: string;

                /** NiuNiuRoleRoomModule imgurl. */
                public imgurl: string;

                /** NiuNiuRoleRoomModule copper. */
                public copper: number;

                /** NiuNiuRoleRoomModule index. */
                public index: number;

                /** NiuNiuRoleRoomModule status. */
                public status: number;

                /** NiuNiuRoleRoomModule changeCopper. */
                public changeCopper: number;

                /** NiuNiuRoleRoomModule settleStatus. */
                public settleStatus: number;

                /** NiuNiuRoleRoomModule settleResult. */
                public settleResult: number;

                /** NiuNiuRoleRoomModule cardList. */
                public cardList: com.protobuff.data.INiuNiuCardModule[];

                /** NiuNiuRoleRoomModule niuniuCardType. */
                public niuniuCardType: number;

                /**
                 * Creates a new NiuNiuRoleRoomModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRoleRoomModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRoleRoomModule): com.protobuff.data.NiuNiuRoleRoomModule;

                /**
                 * Encodes the specified NiuNiuRoleRoomModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleRoomModule.verify|verify} messages.
                 * @param message NiuNiuRoleRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRoleRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRoleRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleRoomModule.verify|verify} messages.
                 * @param message NiuNiuRoleRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRoleRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRoleRoomModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRoleRoomModule;

                /**
                 * Decodes a NiuNiuRoleRoomModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRoleRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRoleRoomModule;

                /**
                 * Verifies a NiuNiuRoleRoomModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRequestMatchModule. */
            interface INiuNiuRequestMatchModule {

                /** NiuNiuRequestMatchModule type */
                type?: (number|null);
            }

            /** Represents a NiuNiuRequestMatchModule. */
            class NiuNiuRequestMatchModule implements INiuNiuRequestMatchModule {

                /**
                 * Constructs a new NiuNiuRequestMatchModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRequestMatchModule);

                /** NiuNiuRequestMatchModule type. */
                public type: number;

                /**
                 * Creates a new NiuNiuRequestMatchModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRequestMatchModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRequestMatchModule): com.protobuff.data.NiuNiuRequestMatchModule;

                /**
                 * Encodes the specified NiuNiuRequestMatchModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchModule.verify|verify} messages.
                 * @param message NiuNiuRequestMatchModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRequestMatchModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRequestMatchModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchModule.verify|verify} messages.
                 * @param message NiuNiuRequestMatchModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRequestMatchModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRequestMatchModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRequestMatchModule;

                /**
                 * Decodes a NiuNiuRequestMatchModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRequestMatchModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRequestMatchModule;

                /**
                 * Verifies a NiuNiuRequestMatchModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRequestMatchResultModule. */
            interface INiuNiuRequestMatchResultModule {

                /** NiuNiuRequestMatchResultModule type */
                type?: (number|null);

                /** NiuNiuRequestMatchResultModule result */
                result?: (number|null);
            }

            /** Represents a NiuNiuRequestMatchResultModule. */
            class NiuNiuRequestMatchResultModule implements INiuNiuRequestMatchResultModule {

                /**
                 * Constructs a new NiuNiuRequestMatchResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRequestMatchResultModule);

                /** NiuNiuRequestMatchResultModule type. */
                public type: number;

                /** NiuNiuRequestMatchResultModule result. */
                public result: number;

                /**
                 * Creates a new NiuNiuRequestMatchResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRequestMatchResultModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRequestMatchResultModule): com.protobuff.data.NiuNiuRequestMatchResultModule;

                /**
                 * Encodes the specified NiuNiuRequestMatchResultModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @param message NiuNiuRequestMatchResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRequestMatchResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRequestMatchResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRequestMatchResultModule.verify|verify} messages.
                 * @param message NiuNiuRequestMatchResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRequestMatchResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRequestMatchResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRequestMatchResultModule;

                /**
                 * Decodes a NiuNiuRequestMatchResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRequestMatchResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRequestMatchResultModule;

                /**
                 * Verifies a NiuNiuRequestMatchResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuQuitModule. */
            interface INiuNiuQuitModule {
            }

            /** Represents a NiuNiuQuitModule. */
            class NiuNiuQuitModule implements INiuNiuQuitModule {

                /**
                 * Constructs a new NiuNiuQuitModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuQuitModule);

                /**
                 * Creates a new NiuNiuQuitModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuQuitModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuQuitModule): com.protobuff.data.NiuNiuQuitModule;

                /**
                 * Encodes the specified NiuNiuQuitModule message. Does not implicitly {@link com.protobuff.data.NiuNiuQuitModule.verify|verify} messages.
                 * @param message NiuNiuQuitModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuQuitModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuQuitModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuQuitModule.verify|verify} messages.
                 * @param message NiuNiuQuitModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuQuitModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuQuitModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuQuitModule;

                /**
                 * Decodes a NiuNiuQuitModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuQuitModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuQuitModule;

                /**
                 * Verifies a NiuNiuQuitModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuQuitResultModule. */
            interface INiuNiuQuitResultModule {
            }

            /** Represents a NiuNiuQuitResultModule. */
            class NiuNiuQuitResultModule implements INiuNiuQuitResultModule {

                /**
                 * Constructs a new NiuNiuQuitResultModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuQuitResultModule);

                /**
                 * Creates a new NiuNiuQuitResultModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuQuitResultModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuQuitResultModule): com.protobuff.data.NiuNiuQuitResultModule;

                /**
                 * Encodes the specified NiuNiuQuitResultModule message. Does not implicitly {@link com.protobuff.data.NiuNiuQuitResultModule.verify|verify} messages.
                 * @param message NiuNiuQuitResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuQuitResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuQuitResultModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuQuitResultModule.verify|verify} messages.
                 * @param message NiuNiuQuitResultModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuQuitResultModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuQuitResultModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuQuitResultModule;

                /**
                 * Decodes a NiuNiuQuitResultModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuQuitResultModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuQuitResultModule;

                /**
                 * Verifies a NiuNiuQuitResultModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuEnterRoomModule. */
            interface INiuNiuEnterRoomModule {

                /** NiuNiuEnterRoomModule waittime */
                waittime?: (number|null);

                /** NiuNiuEnterRoomModule roleList */
                roleList?: (com.protobuff.data.INiuNiuRoleRoomModule[]|null);
            }

            /** Represents a NiuNiuEnterRoomModule. */
            class NiuNiuEnterRoomModule implements INiuNiuEnterRoomModule {

                /**
                 * Constructs a new NiuNiuEnterRoomModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuEnterRoomModule);

                /** NiuNiuEnterRoomModule waittime. */
                public waittime: number;

                /** NiuNiuEnterRoomModule roleList. */
                public roleList: com.protobuff.data.INiuNiuRoleRoomModule[];

                /**
                 * Creates a new NiuNiuEnterRoomModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuEnterRoomModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuEnterRoomModule): com.protobuff.data.NiuNiuEnterRoomModule;

                /**
                 * Encodes the specified NiuNiuEnterRoomModule message. Does not implicitly {@link com.protobuff.data.NiuNiuEnterRoomModule.verify|verify} messages.
                 * @param message NiuNiuEnterRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuEnterRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuEnterRoomModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuEnterRoomModule.verify|verify} messages.
                 * @param message NiuNiuEnterRoomModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuEnterRoomModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuEnterRoomModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuEnterRoomModule;

                /**
                 * Decodes a NiuNiuEnterRoomModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuEnterRoomModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuEnterRoomModule;

                /**
                 * Verifies a NiuNiuEnterRoomModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRoleChangeModule. */
            interface INiuNiuRoleChangeModule {

                /** NiuNiuRoleChangeModule type */
                type?: (number|null);

                /** NiuNiuRoleChangeModule role */
                role?: (com.protobuff.data.INiuNiuRoleRoomModule|null);
            }

            /** Represents a NiuNiuRoleChangeModule. */
            class NiuNiuRoleChangeModule implements INiuNiuRoleChangeModule {

                /**
                 * Constructs a new NiuNiuRoleChangeModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRoleChangeModule);

                /** NiuNiuRoleChangeModule type. */
                public type: number;

                /** NiuNiuRoleChangeModule role. */
                public role?: (com.protobuff.data.INiuNiuRoleRoomModule|null);

                /**
                 * Creates a new NiuNiuRoleChangeModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRoleChangeModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRoleChangeModule): com.protobuff.data.NiuNiuRoleChangeModule;

                /**
                 * Encodes the specified NiuNiuRoleChangeModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleChangeModule.verify|verify} messages.
                 * @param message NiuNiuRoleChangeModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRoleChangeModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRoleChangeModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleChangeModule.verify|verify} messages.
                 * @param message NiuNiuRoleChangeModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRoleChangeModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRoleChangeModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRoleChangeModule;

                /**
                 * Decodes a NiuNiuRoleChangeModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRoleChangeModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRoleChangeModule;

                /**
                 * Verifies a NiuNiuRoleChangeModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuStartModule. */
            interface INiuNiuStartModule {

                /** NiuNiuStartModule isFirst */
                isFirst?: (number|null);

                /** NiuNiuStartModule cardList */
                cardList?: (com.protobuff.data.INiuNiuCardModule[]|null);
            }

            /** Represents a NiuNiuStartModule. */
            class NiuNiuStartModule implements INiuNiuStartModule {

                /**
                 * Constructs a new NiuNiuStartModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuStartModule);

                /** NiuNiuStartModule isFirst. */
                public isFirst: number;

                /** NiuNiuStartModule cardList. */
                public cardList: com.protobuff.data.INiuNiuCardModule[];

                /**
                 * Creates a new NiuNiuStartModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuStartModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuStartModule): com.protobuff.data.NiuNiuStartModule;

                /**
                 * Encodes the specified NiuNiuStartModule message. Does not implicitly {@link com.protobuff.data.NiuNiuStartModule.verify|verify} messages.
                 * @param message NiuNiuStartModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuStartModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuStartModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuStartModule.verify|verify} messages.
                 * @param message NiuNiuStartModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuStartModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuStartModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuStartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuStartModule;

                /**
                 * Decodes a NiuNiuStartModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuStartModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuStartModule;

                /**
                 * Verifies a NiuNiuStartModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuGrabModule. */
            interface INiuNiuGrabModule {

                /** NiuNiuGrabModule waitTime */
                waitTime?: (number|null);
            }

            /** Represents a NiuNiuGrabModule. */
            class NiuNiuGrabModule implements INiuNiuGrabModule {

                /**
                 * Constructs a new NiuNiuGrabModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuGrabModule);

                /** NiuNiuGrabModule waitTime. */
                public waitTime: number;

                /**
                 * Creates a new NiuNiuGrabModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuGrabModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuGrabModule): com.protobuff.data.NiuNiuGrabModule;

                /**
                 * Encodes the specified NiuNiuGrabModule message. Does not implicitly {@link com.protobuff.data.NiuNiuGrabModule.verify|verify} messages.
                 * @param message NiuNiuGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuGrabModule.verify|verify} messages.
                 * @param message NiuNiuGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuGrabModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuGrabModule;

                /**
                 * Decodes a NiuNiuGrabModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuGrabModule;

                /**
                 * Verifies a NiuNiuGrabModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuDoGrabModule. */
            interface INiuNiuDoGrabModule {

                /** NiuNiuDoGrabModule type */
                type?: (number|null);
            }

            /** Represents a NiuNiuDoGrabModule. */
            class NiuNiuDoGrabModule implements INiuNiuDoGrabModule {

                /**
                 * Constructs a new NiuNiuDoGrabModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuDoGrabModule);

                /** NiuNiuDoGrabModule type. */
                public type: number;

                /**
                 * Creates a new NiuNiuDoGrabModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuDoGrabModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuDoGrabModule): com.protobuff.data.NiuNiuDoGrabModule;

                /**
                 * Encodes the specified NiuNiuDoGrabModule message. Does not implicitly {@link com.protobuff.data.NiuNiuDoGrabModule.verify|verify} messages.
                 * @param message NiuNiuDoGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuDoGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuDoGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuDoGrabModule.verify|verify} messages.
                 * @param message NiuNiuDoGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuDoGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuDoGrabModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuDoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuDoGrabModule;

                /**
                 * Decodes a NiuNiuDoGrabModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuDoGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuDoGrabModule;

                /**
                 * Verifies a NiuNiuDoGrabModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRoleGrabModule. */
            interface INiuNiuRoleGrabModule {

                /** NiuNiuRoleGrabModule roleId */
                roleId?: (number|null);

                /** NiuNiuRoleGrabModule type */
                type?: (number|null);
            }

            /** Represents a NiuNiuRoleGrabModule. */
            class NiuNiuRoleGrabModule implements INiuNiuRoleGrabModule {

                /**
                 * Constructs a new NiuNiuRoleGrabModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRoleGrabModule);

                /** NiuNiuRoleGrabModule roleId. */
                public roleId: number;

                /** NiuNiuRoleGrabModule type. */
                public type: number;

                /**
                 * Creates a new NiuNiuRoleGrabModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRoleGrabModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRoleGrabModule): com.protobuff.data.NiuNiuRoleGrabModule;

                /**
                 * Encodes the specified NiuNiuRoleGrabModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleGrabModule.verify|verify} messages.
                 * @param message NiuNiuRoleGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRoleGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRoleGrabModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleGrabModule.verify|verify} messages.
                 * @param message NiuNiuRoleGrabModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRoleGrabModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRoleGrabModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRoleGrabModule;

                /**
                 * Decodes a NiuNiuRoleGrabModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRoleGrabModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRoleGrabModule;

                /**
                 * Verifies a NiuNiuRoleGrabModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuLandModule. */
            interface INiuNiuLandModule {

                /** NiuNiuLandModule landId */
                landId?: (number|null);
            }

            /** Represents a NiuNiuLandModule. */
            class NiuNiuLandModule implements INiuNiuLandModule {

                /**
                 * Constructs a new NiuNiuLandModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuLandModule);

                /** NiuNiuLandModule landId. */
                public landId: number;

                /**
                 * Creates a new NiuNiuLandModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuLandModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuLandModule): com.protobuff.data.NiuNiuLandModule;

                /**
                 * Encodes the specified NiuNiuLandModule message. Does not implicitly {@link com.protobuff.data.NiuNiuLandModule.verify|verify} messages.
                 * @param message NiuNiuLandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuLandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuLandModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuLandModule.verify|verify} messages.
                 * @param message NiuNiuLandModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuLandModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuLandModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuLandModule;

                /**
                 * Decodes a NiuNiuLandModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuLandModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuLandModule;

                /**
                 * Verifies a NiuNiuLandModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuAddCritModule. */
            interface INiuNiuAddCritModule {

                /** NiuNiuAddCritModule waitTime */
                waitTime?: (number|null);
            }

            /** Represents a NiuNiuAddCritModule. */
            class NiuNiuAddCritModule implements INiuNiuAddCritModule {

                /**
                 * Constructs a new NiuNiuAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuAddCritModule);

                /** NiuNiuAddCritModule waitTime. */
                public waitTime: number;

                /**
                 * Creates a new NiuNiuAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuAddCritModule): com.protobuff.data.NiuNiuAddCritModule;

                /**
                 * Encodes the specified NiuNiuAddCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuAddCritModule.verify|verify} messages.
                 * @param message NiuNiuAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuAddCritModule.verify|verify} messages.
                 * @param message NiuNiuAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuAddCritModule;

                /**
                 * Decodes a NiuNiuAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuAddCritModule;

                /**
                 * Verifies a NiuNiuAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuDoAddCritModule. */
            interface INiuNiuDoAddCritModule {

                /** NiuNiuDoAddCritModule crit */
                crit?: (number|null);
            }

            /** Represents a NiuNiuDoAddCritModule. */
            class NiuNiuDoAddCritModule implements INiuNiuDoAddCritModule {

                /**
                 * Constructs a new NiuNiuDoAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuDoAddCritModule);

                /** NiuNiuDoAddCritModule crit. */
                public crit: number;

                /**
                 * Creates a new NiuNiuDoAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuDoAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuDoAddCritModule): com.protobuff.data.NiuNiuDoAddCritModule;

                /**
                 * Encodes the specified NiuNiuDoAddCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuDoAddCritModule.verify|verify} messages.
                 * @param message NiuNiuDoAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuDoAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuDoAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuDoAddCritModule.verify|verify} messages.
                 * @param message NiuNiuDoAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuDoAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuDoAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuDoAddCritModule;

                /**
                 * Decodes a NiuNiuDoAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuDoAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuDoAddCritModule;

                /**
                 * Verifies a NiuNiuDoAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRoleAddCritModule. */
            interface INiuNiuRoleAddCritModule {

                /** NiuNiuRoleAddCritModule roleId */
                roleId?: (number|null);

                /** NiuNiuRoleAddCritModule crit */
                crit?: (number|null);
            }

            /** Represents a NiuNiuRoleAddCritModule. */
            class NiuNiuRoleAddCritModule implements INiuNiuRoleAddCritModule {

                /**
                 * Constructs a new NiuNiuRoleAddCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRoleAddCritModule);

                /** NiuNiuRoleAddCritModule roleId. */
                public roleId: number;

                /** NiuNiuRoleAddCritModule crit. */
                public crit: number;

                /**
                 * Creates a new NiuNiuRoleAddCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRoleAddCritModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRoleAddCritModule): com.protobuff.data.NiuNiuRoleAddCritModule;

                /**
                 * Encodes the specified NiuNiuRoleAddCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoleAddCritModule.verify|verify} messages.
                 * @param message NiuNiuRoleAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRoleAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRoleAddCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoleAddCritModule.verify|verify} messages.
                 * @param message NiuNiuRoleAddCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRoleAddCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRoleAddCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRoleAddCritModule;

                /**
                 * Decodes a NiuNiuRoleAddCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRoleAddCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRoleAddCritModule;

                /**
                 * Verifies a NiuNiuRoleAddCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRoomCritModule. */
            interface INiuNiuRoomCritModule {

                /** NiuNiuRoomCritModule roleId */
                roleId?: (number|null);

                /** NiuNiuRoomCritModule crit */
                crit?: (number|null);
            }

            /** Represents a NiuNiuRoomCritModule. */
            class NiuNiuRoomCritModule implements INiuNiuRoomCritModule {

                /**
                 * Constructs a new NiuNiuRoomCritModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRoomCritModule);

                /** NiuNiuRoomCritModule roleId. */
                public roleId: number;

                /** NiuNiuRoomCritModule crit. */
                public crit: number;

                /**
                 * Creates a new NiuNiuRoomCritModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRoomCritModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRoomCritModule): com.protobuff.data.NiuNiuRoomCritModule;

                /**
                 * Encodes the specified NiuNiuRoomCritModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRoomCritModule.verify|verify} messages.
                 * @param message NiuNiuRoomCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRoomCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRoomCritModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRoomCritModule.verify|verify} messages.
                 * @param message NiuNiuRoomCritModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRoomCritModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRoomCritModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRoomCritModule;

                /**
                 * Decodes a NiuNiuRoomCritModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRoomCritModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRoomCritModule;

                /**
                 * Verifies a NiuNiuRoomCritModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuSettlementModule. */
            interface INiuNiuSettlementModule {

                /** NiuNiuSettlementModule roleList */
                roleList?: (com.protobuff.data.INiuNiuRoleRoomModule[]|null);
            }

            /** Represents a NiuNiuSettlementModule. */
            class NiuNiuSettlementModule implements INiuNiuSettlementModule {

                /**
                 * Constructs a new NiuNiuSettlementModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuSettlementModule);

                /** NiuNiuSettlementModule roleList. */
                public roleList: com.protobuff.data.INiuNiuRoleRoomModule[];

                /**
                 * Creates a new NiuNiuSettlementModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuSettlementModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuSettlementModule): com.protobuff.data.NiuNiuSettlementModule;

                /**
                 * Encodes the specified NiuNiuSettlementModule message. Does not implicitly {@link com.protobuff.data.NiuNiuSettlementModule.verify|verify} messages.
                 * @param message NiuNiuSettlementModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuSettlementModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuSettlementModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuSettlementModule.verify|verify} messages.
                 * @param message NiuNiuSettlementModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuSettlementModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuSettlementModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuSettlementModule;

                /**
                 * Decodes a NiuNiuSettlementModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuSettlementModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuSettlementModule;

                /**
                 * Verifies a NiuNiuSettlementModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a NiuNiuRolePrepareModule. */
            interface INiuNiuRolePrepareModule {

                /** NiuNiuRolePrepareModule status */
                status?: (number|null);
            }

            /** Represents a NiuNiuRolePrepareModule. */
            class NiuNiuRolePrepareModule implements INiuNiuRolePrepareModule {

                /**
                 * Constructs a new NiuNiuRolePrepareModule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.INiuNiuRolePrepareModule);

                /** NiuNiuRolePrepareModule status. */
                public status: number;

                /**
                 * Creates a new NiuNiuRolePrepareModule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NiuNiuRolePrepareModule instance
                 */
                public static create(properties?: com.protobuff.data.INiuNiuRolePrepareModule): com.protobuff.data.NiuNiuRolePrepareModule;

                /**
                 * Encodes the specified NiuNiuRolePrepareModule message. Does not implicitly {@link com.protobuff.data.NiuNiuRolePrepareModule.verify|verify} messages.
                 * @param message NiuNiuRolePrepareModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.INiuNiuRolePrepareModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified NiuNiuRolePrepareModule message, length delimited. Does not implicitly {@link com.protobuff.data.NiuNiuRolePrepareModule.verify|verify} messages.
                 * @param message NiuNiuRolePrepareModule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.INiuNiuRolePrepareModule, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a NiuNiuRolePrepareModule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.NiuNiuRolePrepareModule;

                /**
                 * Decodes a NiuNiuRolePrepareModule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NiuNiuRolePrepareModule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.NiuNiuRolePrepareModule;

                /**
                 * Verifies a NiuNiuRolePrepareModule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a PacketData. */
            interface IPacketData {

                /** PacketData packetType */
                packetType?: (number|null);

                /** PacketData data */
                data?: (Uint8Array|null);
            }

            /** Represents a PacketData. */
            class PacketData implements IPacketData {

                /**
                 * Constructs a new PacketData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.protobuff.data.IPacketData);

                /** PacketData packetType. */
                public packetType: number;

                /** PacketData data. */
                public data: Uint8Array;

                /**
                 * Creates a new PacketData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PacketData instance
                 */
                public static create(properties?: com.protobuff.data.IPacketData): com.protobuff.data.PacketData;

                /**
                 * Encodes the specified PacketData message. Does not implicitly {@link com.protobuff.data.PacketData.verify|verify} messages.
                 * @param message PacketData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.protobuff.data.IPacketData, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified PacketData message, length delimited. Does not implicitly {@link com.protobuff.data.PacketData.verify|verify} messages.
                 * @param message PacketData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.protobuff.data.IPacketData, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a PacketData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PacketData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.protobuff.data.PacketData;

                /**
                 * Decodes a PacketData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PacketData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.protobuff.data.PacketData;

                /**
                 * Verifies a PacketData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }
    }
}
