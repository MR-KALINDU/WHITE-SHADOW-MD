const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------
cmd({

            pattern: "menu",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🎲",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/0a8a021d2350f6b50e9b4.jpg',

                },

                caption: `
❍═════════════════════❍
    *_ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴇɴᴜ ʟɪꜱᴛ_*
   ✦╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦

┏⃞❑⃝🦹⃟➥.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🦸⃟➥.2 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧞‍♀️⃟➥.3 *ᴇᴅɪᴛᴏʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♂️⃟➥.4 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♀️⃟➥.5 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🍁⃟➥.6 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣⃞❑⃝💕⃟➥.7 *ɢᴇɴᴇʀᴇʟ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧚‍♂️⃟➥.8 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🎩⃟➥.9 *ᴀɴɪᴍᴇ ᴘɪᴄꜱ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🎭⃟➥.10 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🦂⃟➥.11 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝❄️⃟➥.12 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🐲⃟➥.13 *ꜰᴜɴ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🙆‍♂️⃟➥.14 *ᴀɪ ᴍᴇɴᴜ*
┃
┣⃞❑⃝😈⃟➥.15 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
┃
┗⃞❑⃝🔖⃟➥.16 *ʟᴏɢᴏ ᴍᴇɴᴜ*
❍═════════════════════❍
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------
cmd({

            pattern: "1",

            desc: "(menu cmdlist).",

            category: "list",

            react: "♣️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/b943d0171b8477aa9962f.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴀᴘᴋ
│ ꜰʙ
│ ᴛɪᴋᴛᴏᴋ
│ ɪɴꜱᴛᴀɢʀᴀᴍ
│ ꜱᴜʙᴅʟ
│ ᴛɢꜱ
│ ꜱᴏɴɢ
│ ɢᴅʀɪᴠᴇ
│ ᴛᴛꜱ
│ ᴠɪᴅᴇᴏ
│ ᴀᴜᴅɪᴏ
│ ꜱᴏᴜɴᴅ
│ ʀɪɴɢᴛᴏɴᴇ
│ ᴘɪɴᴛ
│ ᴡᴀᴍᴏᴅ
│ ᴍᴇᴅɪᴀꜰɪʀᴇ
│ ᴘʟᴀʏ
│ ʏᴛꜱ
│ ʏᴛᴍᴘ4
│ ʏᴛᴍᴘ3
│ ʏᴛᴅᴏᴄ
│ ɢɪᴛᴄʟᴏɴᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "2",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌀",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/378a65acee52ce2546d60.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴍɪꜱᴄ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴠᴠ
│ ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│ ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
│ ᴇxᴇᴄ
│ ʀᴇᴀᴅᴍᴏʀᴇ
│ ᴜᴘᴛɪᴍᴇ
│ ᴡᴍ
│ ᴘɪᴄᴋ
│ ꜰʟɪᴘᴛᴇxᴛ
│ ᴍᴘ4ꜰʀᴏᴍᴜʀʟ
│ ᴇᴍɪx
│ ᴄʜᴀᴛʙᴏᴛ
│ ᴇʙɪɴᴀʀʏ
│ ᴅʙɪɴᴀʀʏ
│ ʙᴏᴛ
│ ꜰɪɴᴅ
│ ᴜɴʙᴀɴ
│ ᴜʀʟ
│ ᴛʀᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "3",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🛸",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/dc192e8bbc4b048c1e749.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴇᴅɪᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴀᴅ
│ ᴊᴀɪʟ
│ ᴜɴᴄᴏᴠᴇʀ
│ ᴄʟᴏᴡɴ
│ ᴍɴᴍ
│ ᴘᴇᴛᴛ
│ ɢʀᴇʏꜱᴄᴀʟᴇ
│ ɪɴᴠᴇʀᴛ
│ ʙʟᴜʀ
│ ᴅʀɪᴘ
│ ᴄᴏʟᴏʀɪꜰʏ
│ ɢᴜɴ
│ ᴡᴀɴᴛᴇᴅ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "4",

            desc: "(menu cmdlist).",

            category: "list",

            react: "♨️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/bef332ec2ad67473118ca.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ɢᴅᴇꜱᴄ
│ ɢɴᴀᴍᴇ
│ ᴀɴᴛɪꜰᴀᴋᴇ
│ ᴘᴅᴍ
│ ᴡᴀʀɴ
│ ɪɴᴠɪᴛᴇ
│ ʀᴇꜱᴇᴛ
│ ᴛᴀɢᴀʟʟ
│ ᴋɪᴋ
│ ɴᴜᴍ
│ ʀᴇꜱᴇᴛᴡᴀʀɴ
│ ᴘᴏʟʟ
│ ᴘʀᴏꜰɪʟᴇ
│ ʀᴀɴᴋ
│ ᴘʀᴏᴍᴏᴛᴇ
│ ᴅᴇᴍᴏᴛᴇ
│ ᴋɪᴄᴋ
│ ɢʀᴏᴜᴘ
│ ɢᴘᴘ
│ ᴛᴀɢ
│ ʟᴇꜰᴛ
│ ᴛᴀɢᴀᴅᴍɪɴ
│ ᴀᴅᴅ
│ ᴅᴇʟ
│ ᴄʜᴇᴄᴋᴡᴀʀɴ
│ ʙʀᴏᴀᴅᴄᴀꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "5",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌹",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/33dc300e9f6baac68e8cf.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ɴᴘᴍ
│ ꜱꜱ
│ ɪᴍᴅʙ
│ ᴡᴇᴀᴛʜᴇʀ
│ ʟʏʀɪᴄ
│ ʜᴏʀᴏ
│ ᴄʀɪᴄ
│ ꜱᴜʙꜱᴇᴀʀᴄʜ
│ ɢᴏᴏɢʟᴇ
│ ɪᴍᴀɢᴇ
│ ᴄᴏᴜᴘʟᴇᴘᴘ
│ ɪꜱᴡᴀ
│ ɴᴏᴡᴀ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "6",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🐞",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/3262ae2db223ba1022d2b.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ꜱɪʀᴀꜱᴀ
│ ʜɪʀᴜɴᴇᴡꜱ
│ ɪᴏꜱ
│ ᴡʙɪ
│ ᴛᴇᴄʜɴᴇᴡꜱ
│ ᴇꜱᴀɴᴀ
│ ɴᴀꜱᴀ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "7",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🦩",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/c607b6545d6f8a7d76c39.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ɢᴇɴᴇʀᴇʟ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ʜᴇʟᴘ
│ ʟɪꜱᴛ
│ ᴏᴡɴᴇʀ
│ ꜰɪʟᴇ
│ ᴅᴇʟʙɢᴍ
│ ᴀʟʟʙɢᴍ
│ ᴀᴅᴅʙɢᴍ
│ ᴅᴇᴠ
│ ʀᴇᴘᴏ
│ ʟɪɴᴋ
│ ꜱᴛᴀᴛᴜꜱ
│ ᴄᴘᴜ
│ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
│ ᴘɪɴɢ
│ ᴀʟɪᴠᴇ
│ ᴀɴᴛɪꜱᴘᴀᴍ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "8",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🙆‍♂️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/750b4ec766748a8f6ef00.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ʀᴇᴀᴄᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴘᴏᴋᴇ
│ ʜᴜɢ
│ ʜᴏʟᴅ
│ ʜɪꜰɪ
│ ʙɪᴛᴇ
│ ʙʟᴜꜱʜ
│ ᴘᴜɴᴄʜ
│ ᴘᴀᴛ
│ ᴋɪꜱꜱ
│ ᴋɪʟʟ
│ ʜᴀᴘᴘʏ
│ ᴅᴀɴᴄᴇ
│ ʏᴇᴇᴛ
│ ᴡɪɴᴋ
│ ꜱʟᴀᴘ
│ ʙᴏɴᴋ
│ ʙᴜʟʟʏ
│ ᴄʀɪɴɢᴇ
│ ᴄᴜᴅᴅʟᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "9",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🦚",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/4714b499a4ed18ad138a5.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴀɴɪᴍᴇ ᴘɪᴄꜱ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴡᴀɪꜰᴜ
│ ɴᴀʀᴜᴛᴏ
│ ɴᴇᴋᴏ
│ ꜰᴏxɢɪʀʟ
│ ᴀɴɪᴍᴇɴᴇᴡꜱ
│ ʟᴏʟɪ
│ ᴘᴏᴋᴇᴍᴏɴ
│ ᴍᴀɴɢᴀ
│ ᴀɴɪᴍᴇ
│ ᴡᴀʟʟᴘᴀᴘᴇʀ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "10",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🦄",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/80748441ca865c99f8dfd.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴘʟᴜɢɪɴꜱ
│ ʀᴇᴍᴏᴠᴇ
│ ɪɴꜱᴛᴀʟʟ
│ ᴊᴏɪɴ
│ ᴄᴏᴍᴍᴏɴ
│ ᴅɪꜰꜰ
│ ʙʟᴏᴄᴋ
│ ꜱᴇᴛᴀʙᴏᴜᴛ
│ ᴜɴʙʟᴏᴄᴋ
│ ᴊɪᴅ
│ ᴀᴅᴅɴᴏᴛᴇ
│ ϙʀ
│ ꜱʜᴇʟʟ
│ ᴇᴠᴀʟ
│ ᴅᴇʟɴᴏᴛᴇ
│ ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ
│ ʙᴀɴ
│ ᴀʟʟɴᴏᴛᴇꜱ
│ ʀᴇꜱᴛᴀʀᴛ
│ ᴜᴘᴅᴀᴛᴇ
│ ᴜᴘᴅᴀᴛᴇɴᴏᴡ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "11",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🐝",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/b27f66df896a44c2f267a.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴘʜᴏᴛᴏ
│ ꜰᴀɴᴄʏ
│ ᴛɪɴʏ
│ ᴛᴏᴀᴜᴅɪᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "12",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌐",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/21e67db6b9e3c7743f9ec.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ʙᴀꜱꜱ
│ ʙʟᴏᴡɴ
│ ᴅᴇᴇᴘ
│ ꜰᴀꜱᴛ
│ ʀᴇᴠᴇʀꜱᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "13",

            desc: "(menu cmdlist).",

            category: "list",

            react: "👮‍♀️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/40cb5b98520a97a00c700.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ϙᴜᴇꜱᴛɪᴏɴ
│ ᴛʀᴜᴛʜ
│ ᴅᴀʀᴇ
│ ᴊᴏᴋᴇ
│ ᴊᴏᴋᴇ2
│ ꜰᴀᴄᴛ
│ ϙᴜᴏᴛᴇꜱ
│ ᴅᴇꜰɪɴᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "14",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🐾",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/5aea0f68f2d67004053df.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴀɪ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴀɴᴏɴʏᴍꜱɢ
│ ᴄʜᴀᴛ
│ ɢᴘᴛ
│ ᴅᴀʟʟᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "15",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🍡",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/41fbd2e7a16eec0a2424c.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ꜱᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴀᴛᴛᴘ
│ ꜱᴛɪᴄᴋᴇʀ
│ ᴄɪʀᴄʟᴇ
│ ᴄʀᴏᴘ
│ ʀᴏᴜɴᴅ
│ ᴍᴇᴍᴇɢᴇɴ
│ ᴀᴛᴛᴘ
│ ᴛᴛᴘ
│ ꜱᴛᴇᴀʟ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )
 //---------------------------------------------------------------------------

cmd({

            pattern: "16",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌐",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/7334389985bc75fda595a.jpg',

                },

                caption: `┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚃𝙴𝚇𝚃𝙿𝚁𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🌿⃟➤ᴅᴇᴇᴘꜱᴇᴀ
┃ ├❑🌿⃟➤ʜᴏʀʀᴏʀ
┃ ├❑🌿⃟➤ᴡʜɪᴛᴇʙᴇᴀʀ
┃ ├❑🌿⃟➤ᴊᴏᴋᴇʀ
┃ ├❑🌿⃟➤ᴍᴇᴛᴀʟʟɪᴄ
┃ ├❑🌿⃟➤ꜱᴛᴇᴇʟ
┃ ├❑🌿⃟➤ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
┃ ├❑🌿⃟➤ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
┃ ├❑🌿⃟➤ʟᴜxᴜʀʏ
┃ ├❑🌿⃟➤ɢʟᴜᴇ
┃ ├❑🌿⃟➤ꜰᴀʙʀɪᴄ
┃ ├❑🌿⃟➤ᴛᴏxɪᴄ
┃ ├❑🌿⃟➤ᴀɴᴄɪᴇɴᴛ
┃ ├❑🌿⃟➤ᴄʟᴏᴜᴅ
┃ ├❑🌿⃟➤ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
┃ ├❑🌿⃟➤ᴛʜᴜɴᴅᴇʀ
┃ ├❑🌿⃟➤ꜱᴄɪꜰɪ
┃ ├❑🌿⃟➤ꜱᴀɴᴅ
┃ ├❑🌿⃟➤ʀᴀɪɴʙᴏᴡ
┃ ├❑🌿⃟➤ᴘᴇɴᴄɪʟ
┃ ├❑🌿⃟➤ɴᴇᴏɴ
┃ ├❑🌿⃟➤ᴍᴀɢᴍᴀ
┃ ├❑🌿⃟➤ʟᴇᴀᴠᴇꜱ
┃ ├❑🌿⃟➤ɢʟɪᴛᴄʜ
┃ ├❑🌿⃟➤ᴅɪꜱᴄᴏᴠᴇʀʏ
┃ ├❑🌿⃟➤ᴄʜʀɪꜱᴛᴍᴀꜱ
┃ ├❑🌿⃟➤ᴄᴀɴᴅʏ
┃ ├❑🌿⃟➤1917
┃ ├❑🌿⃟➤ɴᴇᴡᴛᴇxᴛ
┃ ├❑🌿⃟➤ʙʟᴀᴄᴋᴘɪɴᴋ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
🍀 *_ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ_* 🇱🇰`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )
