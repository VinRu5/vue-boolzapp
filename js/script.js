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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            contactIndex: 0,
            textMessage: '',
            intervall: null,
            search: '',
            searchProfile: []

        },
        created() {

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
                        date: '01/07/2021 11:41:34',
                        text: this.textMessage,
                        status: 'sent'
                    }
                );
                this.textMessage = '';
                // let set = setTimeout(function() {
                //     console.log(avvio);
                //     console.log(this.contacts[this.contactIndex])
                //     this.contacts[this.contactIndex].messages.push(
                //         {
                //             date: '01/07/2021 11:41:34',
                //             text: 'OK!',
                //             status: 'received'
                //         }
                //     );
                // }, 1000);
            },
            // receivedMessage: function() {
            //     this.intervall = setTimeout(() => {
            //         console.log(avvio);
            //     }, 1000);
            // },
            searchContact: function() {
                return this.contacts.filter((contact) => {
                    if (this.search === '') {
                        return true
                    }

                    for (let x = 0; x < contact.name.length; x++) {
                        if (this.search === contact.name[x]) {
                            return true
                        }
                    }

                });
            }
        }
    }
)