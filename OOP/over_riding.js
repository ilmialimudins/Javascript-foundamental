/*
Konsep lain yang lekat  dengan pewarisan adalah overiing.
overriding didalam OOP merupakan fitur yangemperbolehkan subclass
mendefinisakan implementasinya sendiri pada sebuahmethod yang sebenarnya 
sudah didefinikan pada superclass.Overriding diterapkan ketika kita ingin
 menetapkan implementasi yang spesifik di subclass pada sebuah method yang
  berasal dari superclass. Overriding juga biasa diterapkan ketika kita 
  ingin menambah properti baru secara spesifik pada sebuah subclass.
*/

//CCOntructor Overriding
/*
 Constructor merupakan method spesial pada class yang akan dipanggil
 pada saat pembuatan instance, lebih tepatnya ketika menggunakan keyword
 new diikuti dengan nama class.
  */
 const mailService1 = new MailService(); // akan memanggil method constructor pada class MailService

 /*
 Constructor akan mengembalikan objek yang merupakan instance dari class tersebut.
  Perbedaan dengan method pada umumnya, pada constructor kita tidak perlu menulis return ketika hendak 
  mengembalikan nilai karena sudah dilakukan secara implisit.
 */

  /*Method Overriding
  Konsep overriding juga bisa diterapkan pada method class. Method overriding biasanya dilakukan ketika kita
   ingin mengubah implementasi method warisan superclass.
   */
   class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
   
  class WhatsAppService extends MailService {
    constructor(sender, isBusiness) {
      super(sender);
      this.isBusiness = isBusiness;
    }
   
    // Overriding method
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    }
  }
   
   
  const mailService = new MailService('someSender');
  const whatsappService = new WhatsAppService('+6281234567890', true);
   
  mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
  whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');
   
   
  /**
  * Output:
  * someSender sent Hai, apa kabar? to someReceiver
  * +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp
  */ 