/*
Jika kita gambarkan skenario di atas dalam konsep OOP, 
Developer merupakan sebuah superclass; sedangkan Front-End Developer, 
Back-End Developer, dan DevOps adalah subclass. Struktur dari pewarisan
 class akan tampak seperti kode di bawah ini.
*/
class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }
   
  class FrontEndDeveloper extends Developer {
    buildUI() {
      console.log(`${this.name} is building UI...`);
    }
  }
   
  class BackEndDeveloper extends Developer {
    buildAPI() {
      console.log(`${this.name} is building API...`);
    }
  }
   
  class DevOps extends Developer {
    deployApp() {
      console.log(`${this.name} is deploying app...`);
    }
  }
  class FullStackDeveloper extends Developer {
    // ???
   }
/*
Cara ini sungguh tidak efektif karena jika terjadi perubahan pada salah satu fungsi, 
kita perlu mengubahnya di dua tempat.
Lalu apa solusinya?
Solusinya adalah meninggalkan pewarisan dan gunakan teknik object composition. Jika Anda lihat kembali kode 
di atas, pewarisan mendorong kita untuk menstrukturkan kode dengan pendekatan peran atau identitas class, 
yakni Front-End Developer, Back-End Developer, DevOps, dan Full-Stack Developer. Sedangkan object composition,
 dia tidak memperdulikan peran, melainkan kode distrukturkan berdasarkan kemampuan yang dapat dilakukan,
  seperti buildUI(), buildAPI(), dan deployApp().
*/

class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }
   
  function canBuildUI(developer) {
    return {
      buildUI: () => {
       console.log(`${developer.name} is building UI...`);
      }
    }
  }
   
  function canBuildAPI(developer) {
    return {
      buildAPI: () => {
        console.log(`${developer.name} is building API...`);
      }
    }
  }
   
  function canDeployApp(developer) {
    return {
      deployApp: () => {
        console.log(`${developer.name} is deploying app...`);
      }
    }
  }

  function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
  }
   
  function createBackEndDeveloper(name) {
    const developer = new Developer(name); 
    return Object.assign(developer, canBuildAPI(developer));
  }
   
  function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
  }
   
  function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
  }