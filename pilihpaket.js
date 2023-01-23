const pilihPaket = (nomor, paket) => {
     new Promise((resolve, reject) => {
      let msg = '';
      if (nomor <= 0 && !isNaN(nomor)) {
        return 'Silahkan antri';
      } else {
        if (paket === 'A') {
          msg = 'KFC Paket A';
        } else {
          msg = 'KFC Paket B';
        }
        resolve(msg);}})}