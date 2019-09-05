/*
  ////////////
  Tiket Konser
  ////////////

  Buatlah suatu algoritma untuk pembelian tiket konser.

  [INSTRUCTIONS]
    1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
       akan memilih harga yang paling mahal.
    2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
       maka dia akan pulang ke rumah.
    3. Harga jenis kursi konser, antara lain:
      - VVIP 1000000
      - VIP  700000
      - Reguler 300000
    4. Apabila membeli tiket, tampilkan dalam format [nama]-[jenis kursi] dan [kembalian]

  [RULES]
    1. Hanya tulis Algoritma saja
*/

// type here
READ NAMA = 'LUCKY'
READ VVIP = 1000000
READ VIP = 700000
READ REGULER = 300000
READ UANG = 1000000

IF UANG = VVIP
PRINT '[NAMA] - [JENIS KURSI] - [UANG - VVIP]'
HASIL 'LUCKY - VVIP - 0'

IF UANG < REGULER
PRINT 'PESERTA KONSER AKAN PULANG'
