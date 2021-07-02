Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Marco',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Filippo',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Martina',
                    avatar: '_io',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Daniele',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
            ],
            contactIndex: 0,
            textMessage: '',
            search: '',
        },

        mounted() {

        },

        methods: {

            printChat: function() {
                return this.contacts[this.contactIndex].messages;
            },

            selectChat: function(index) {
                this.contactIndex = index;
            },

            urlImg: function (index) {
                
                return `./img/avatar${this.contacts[index].avatar}.jpg`;

            },

            urlImgTop: function() {

                return `./img/avatar${this.contacts[this.contactIndex].avatar}.jpg`;
            },

            sendMessage: function() {
                this.contacts[this.contactIndex].messages.push(
                    {
                        date: this.nowDate(),
                        text: this.textMessage,
                        status: 'sent',
                        showMenu: false
                    }
                );
                this.textMessage = '';
                this.receivedMessage();
            },

            receivedMessage: function() {
                setTimeout(() => {
                    this.contacts[this.contactIndex].messages.push(
                        {
                            date: this.nowDate(),
                            text: 'Ok',
                            status: 'received',
                            showMenu: false
                        }
                    )
                }, 1000);
            },

            searchContact: function(contact) {
                let lowerName = contact.name.toLowerCase();
                let lowerSearch = this.search.toLowerCase();

                if (lowerName.includes(lowerSearch)){
                    return true
                } else {
                    return false
                }
            },

            nowDate: function() {
                return dayjs().format('DD/MM/YYYY HH:mm:ss');
            },

            activeMenu: function(message) {

                message.showMenu = !message.showMenu;

            }
        }
    }
)