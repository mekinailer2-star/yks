const questions = [
  {
    id: 1,
    answer: "E",
    topic: "Sözcükte Anlam ve Bağlam",
    skill: "Boşluk doldurma",
    summary: "Cümlede yöntemi ve süreçteki gelişmeyi bağlama göre tamamlama.",
    solution: [
      "İlk boşlukta arkeogenetiğin geçmişi hangi araçla araştırdığı soruluyor. Moleküler genetik teknikler bir yöntem/araçtır; bu yüzden 'kullanarak' en doğal kullanımdır.",
      "İkinci boşlukta 'henüz çalışmalar sürmekteyse de hızla ... bir bilim dalı' ifadesi olumlu bir süreç bildirir. Bir bilim dalı hızla 'gelişen' olabilir.",
      "'Yoluyla' ilk boşluğa yakın görünse de ikinci sözcük 'değişken' bilim dalının niteliğini doğru tamamlamaz. En uyumlu ikili 'kullanarak - gelişen'dir."
    ],
    takeaway: "Boşluk sorularında iki kelimeyi ayrı ayrı değil, cümlenin tamamında oluşturduğu anlamla kontrol et."
  },
  {
    id: 2,
    answer: "C",
    topic: "Sözcükte Anlam",
    skill: "Parantez içi anlam karşılaştırma",
    summary: "Numaralı sözlerin verilen açıklamayla örtüşüp örtüşmediğini değerlendirme.",
    solution: [
      "'Ender görülen', 'toplu eserler', 'genellikle' ve 'bağ oluşturmak' parçadaki kullanımlarla uyumludur.",
      "III numaradaki 'değerlendirildiğinde' sözü parantezde 'aynı kitapta toplandığında' diye açıklanmış. Oysa burada anlam 'birlikte ele alındığında / birlikte düşünüldüğünde'dir.",
      "Bu nedenle açıklaması yanlış verilen söz III'tür."
    ],
    takeaway: "Bir sözün günlük karşılığına değil, cümledeki görevine bak: 'değerlendirmek' burada 'ele almak'tır."
  },
  {
    id: 3,
    answer: "E",
    topic: "Atasözleri ve Anlam",
    skill: "Örnek-özellik eşleştirme",
    summary: "Atasözünün verilen açıklama türüne örnek olup olmadığını kontrol etme.",
    solution: [
      "II, III, IV ve V. cümlelerde verilen örnekler açıklamalarla uyumludur: sosyal ilişki, doğa olayı, doğrudan öğüt ve iki yargı ilişkisi vardır.",
      "VI. cümle 'temsilî ve mecazi anlatıma sahip olmayan' atasözlerinden söz eder. 'Besle kargayı oysun gözünü' ise temsilî/mecazlı bir anlatıma sahiptir; karga gerçek anlamıyla değil, nankör kişi için kullanılır.",
      "Bu yüzden örnek gösterilemeyecek seçenek E'dir."
    ],
    takeaway: "Atasözünde kişi/nesne başka bir durumu temsil ediyorsa mecaz ve temsilî anlatım vardır."
  },
  {
    id: 4,
    answer: "E",
    topic: "Cümlede Anlam",
    skill: "Öznel-nesnel yargı ayırma",
    summary: "Kişisel düşünce içermeyen seçeneği bulma.",
    solution: [
      "Kişisel düşünce; beğeni, yorum, benzetme veya öznel niteleme içerir. 'Büyülenmemiş', 'özlemlerini ... seçmiştir', 'yalnızlığın sembolü' gibi ifadeler yoruma açıktır.",
      "E seçeneğinde ada, coğrafyacı açısından nesnel özellikleriyle tanımlanır: konum, yüzey şekilleri, yüz ölçümü, nüfus, iklim ve her yanı suyla çevrili kara parçası olma.",
      "Bu ifade kişisel beğeni veya yorum değil, tanımsal bilgi içerdiği için doğru cevap E'dir."
    ],
    takeaway: "Nesnel yargı kanıtlanabilir; öznel yargı kişiden kişiye değişen değerlendirme içerir."
  },
  {
    id: 5,
    answer: "B",
    topic: "Cümlede Anlam",
    skill: "Yakın anlamlı cümleleri bulma",
    summary: "Gelenekle ilişkiyi aynı doğrultuda anlatan cümleleri eşleştirme.",
    solution: [
      "I. cümlede yazarın geleneği reddetmediği, onu kendi döneminin penceresinden değerlendirdiği söylenir.",
      "IV. cümlede de yazarın geçmişten gelen seslere kulak tıkamadığı, fakat onları kendi döneminin gerçekliğiyle süzdüğü anlatılır.",
      "İki cümle de 'geleneği sahiplenip çağının bakışıyla yeniden yorumlama' fikrini taşır. Bu nedenle cevap I ve IV, yani B'dir."
    ],
    takeaway: "Yakın anlam ararken ortak ana fikri bul: burada ortak fikir gelenekten kopmadan çağdaş yorum yapmaktır."
  },
  {
    id: 6,
    answer: "B",
    topic: "Cümle Birleştirme",
    skill: "Anlamı koruyarak birleştirme",
    summary: "İki cümledeki sebep-sonuç ve destek ilişkisini bozmadan tek cümleye indirme.",
    solution: [
      "İlk cümle Davies'in eğitimi, bireyleri kapasitelerine göre farklı statülere yerleştiren bir sistem olarak gördüğünü söyler.",
      "İkinci cümle ise toplumsal tabakalaşmayı savunanların, yeteneklilerin önemli mesleklerle ödüllendirilmesi gerektiğini düşündükleri için Davies'in görüşünü desteklediğini belirtir.",
      "B seçeneği bu iki bilgiyi eksiksiz ve yorum katmadan birleştirir. Diğer seçenekler Davies'e ek görüş yükler veya 'geniş kitleler' gibi metinde olmayan bilgiler ekler."
    ],
    takeaway: "Birleştirme sorularında yeni bilgi ekleyen veya ilişkinin yönünü değiştiren seçenek elenir."
  },
  {
    id: 7,
    answer: "E",
    topic: "Ses Bilgisi",
    skill: "Ünlü düşmesini tanıma",
    summary: "Kök ve ek birleşiminde ses düşmesi olup olmadığını ayırt etme.",
    solution: [
      "Ünlü düşmesi; ağız-ağzı, akıl-aklı gibi ikinci hecedeki dar ünlünün düşmesidir.",
      "Parçada numaralanan sözcüklerden V'teki 'işitilen' sözcüğü 'işit-' fiilinden türemiştir; kökte bir ünlü düşmesi yoktur.",
      "Diğer sözcüklerde ya kök-ek birleşimiyle ses olayı görülür ya da verilen bağlamda düşme aranabilir. Ünlü düşmesi olmayan doğru seçenek V, yani E'dir."
    ],
    takeaway: "Ünlü düşmesini anlamak için sözcüğün yalın/kök hâlini kur ve ek alınca bir ünlü eksiliyor mu bak."
  },
  {
    id: 8,
    answer: "D",
    topic: "Sözcük Yapısı",
    skill: "Kök türünü belirleme",
    summary: "Numaralı sözcüklerin isim kökünden mi fiil kökünden mi türediğini ayırma.",
    solution: [
      "'Özellik' sözcüğü 'öz' isim kökünden, 'gelişme' sözcüğü de 'geliş-' fiil kökünden türemiştir gibi her sözcük köküne ayrılarak incelenir.",
      "Numaralı sözcükler içinde III ve V, isim kökünden türemiş yapıdadır. Bu iki sözcükte temel anlam bir ad köküne dayanır ve yapım ekiyle yeni sözcük oluşur.",
      "Bu yüzden doğru ikili III ve V, yani D'dir."
    ],
    takeaway: "Kök türü sorularında önce sözcüğü anlamlı en küçük parçaya indir; kök bir varlık/kavram adıysa isim köküdür."
  },
  {
    id: 9,
    answer: "C",
    topic: "Cümlenin Ögeleri",
    skill: "Öge dizilişini çözümleme",
    summary: "Özne, nesne, tümleç ve yüklemi doğru sıraya koyma.",
    solution: [
      "Yüklem 'öldürmüyor mu?' sözüdür. 'Kim öldürmüyor?' sorusunun cevabı 'Sırf kendi için okuyan, gezen, eğlenen bir aydın'dır; bu öznedir.",
      "'Neyi öldürmüyor?' sorusunun cevabı 'kendini'dir; bu belirtili nesnedir. 'Ne zaman?' sorusunun cevabı 'yaşarken'dir; zarf tümlecidir.",
      "Sıralama özne - belirtili nesne - zarf tümleci - yüklem olur. Doğru cevap C'dir."
    ],
    takeaway: "Öge bulurken önce yüklemi, sonra yükleme doğru soruları sor: kim, neyi, ne zaman?"
  },
  {
    id: 10,
    answer: "C",
    topic: "Anlatım Bozukluğu ve Üslup",
    skill: "Gereksiz yakın anlamlı sıfatları yakalama",
    summary: "Parçada eleştirilen fazla ve işlevsiz sıfat kullanımını örnekte bulma.",
    solution: [
      "Parçada eleştirilen tutum, yakın anlamlı sıfatların peş peşe ve işlevsiz kullanılmasıdır. Bu, metinde 'dikiş izlerini belli eden elbise' benzetmesiyle anlatılır.",
      "C seçeneğinde 'yağışlı, donuk ve karlı', 'derin yalnızlık', 'koyu kimsesizlik', 'aydınlık ve ışıklı' gibi birbirine yakın ve gereğinden fazla nitelemeler vardır.",
      "Bu nedenle parçada eleştirilen bakış açısıyla yazılmış cümle C seçeneğidir."
    ],
    takeaway: "Sıfat çokluğu tek başına sorun değildir; yakın anlamlı ve işlevsiz tekrarlar anlatımı ağırlaştırır."
  },
  {
    id: 11,
    answer: "D",
    topic: "Sözcük Yapısı",
    skill: "Yapım eki ayırma",
    summary: "Yapım eki almayan numaralı sözcüğü belirleme.",
    solution: [
      "Yapım eki sözcüğün anlamını veya türünü değiştirerek yeni bir sözcük yapar. Çekim eki ise sözcüğün cümledeki görevini düzenler.",
      "Numaralı sözcüklerden IV'te sözcük yeni bir anlam kazandıran yapım eki almamıştır; aldığı ekler çekim görevlidir.",
      "Bu yüzden yapım eki almayan sözcük IV, yani D seçeneğidir."
    ],
    takeaway: "Ek sorularında her eki 'yeni sözlük anlamı oluşturuyor mu?' diye test et."
  },
  {
    id: 12,
    answer: "C",
    topic: "Cümlenin Ögeleri",
    skill: "Özne grubunu tanıma",
    summary: "Cümlenin öznesinin hangi sözcük grubundan oluştuğunu bulma.",
    solution: [
      "Yüklem 'katkı sağlayacaktır'. 'Katkı sağlayacak olan ne?' sorusunun cevabı 'Toprakla uğraşanları maddi açıdan desteklemek'tir; bu cümlenin öznesidir.",
      "Bu söz öbeğinin merkezinde '-mek' ekiyle kurulan 'desteklemek' vardır. '-mek/-mak' eki isim-fiil eki olduğu için grup isim-fiil grubudur.",
      "Doğru cevap C'dir."
    ],
    takeaway: "Özne uzun bir ifade olabilir; çekirdek sözcük '-mek/-mak'lıysa çoğu zaman isim-fiil grubu aranır."
  },
  {
    id: 13,
    answer: "B",
    topic: "Fiilimsi",
    skill: "Fiilimsi bulunmayan cümleleri seçme",
    summary: "Cümlelerde isim-fiil, sıfat-fiil ve zarf-fiil varlığını kontrol etme.",
    solution: [
      "I. cümlede fiilimsi yoktur; 'doğumu, ölümü' kalıcı ad olarak kullanılmıştır. IV. cümlede de fiilimsi bulunmaz.",
      "II. cümlede 'ulaşan', III. cümlede 'yazdıkları', V. cümlede 'dolaştığınızda' gibi fiilimsi örnekleri vardır.",
      "Fiilimsi bulunmayan cümleler I ve IV olduğundan cevap B'dir."
    ],
    takeaway: "Fiilimsi, fiilden türeyip cümlede ad/sıfat/zarf görevinde kullanılan sözcüktür; kalıcı adlarla karıştırma."
  },
  {
    id: 14,
    answer: "E",
    topic: "Parçada Anlam",
    skill: "Gönderme yapılan anlamları bulma",
    summary: "Altı çizili ifadenin hangi durumları karşılayıp karşılamadığını değerlendirme.",
    solution: [
      "Altı çizili ifade, kahramanların adlarıyla değil özellikleriyle anılması ve anlatımın uzun bir monoloğa dönüşmesi gibi tekniklere gönderme yapar.",
      "Bu nedenle I ve II ile ilişki kurulabilir. Ancak 'olayların karmaşık bir şekilde aktarılması' metinde özellikle vurgulanan bir durum değildir; okurun güçlük çekmesi teknik anlatımdan kaynaklanır.",
      "Gönderme yapılmayan durum III'tür; doğru cevap E'dir."
    ],
    takeaway: "Parçada açıkça söylenenle okuyucunun zorlanmasından çıkarılabilecek aşırı yorumu ayır."
  },
  {
    id: 15,
    answer: "D",
    topic: "Yazım Kuralları",
    skill: "'de' bağlacının yazımı",
    summary: "Bağlaç olan de/da ile ek olan -de/-da ayrımını uygulama.",
    solution: [
      "Bağlaç olan 'de/da' ayrı yazılır ve cümleden çıkarıldığında cümlenin yapısı bozulmaz. Bulunma hâl eki olan '-de/-da' bitişik yazılır.",
      "IV. cümledeki 'Kimi zamanda' ifadesinde 'de' bağlaçtır; doğru yazım 'Kimi zaman da' olmalıdır.",
      "Bu yüzden yazım yanlışı IV. cümlededir. Cevap D'dir."
    ],
    takeaway: "'De'yi çıkarınca cümle hâlâ anlamlıysa çoğu zaman bağlaçtır ve ayrı yazılır."
  },
  {
    id: 16,
    answer: "C",
    topic: "Cümlenin Ögeleri",
    skill: "Nesnenin yapısını belirleme",
    summary: "Nesnenin sadece isim tamlaması olduğu cümleyi bulma.",
    solution: [
      "Nesne, yükleme sorulan 'neyi/kimi/ne?' sorularının cevabıdır. C seçeneğinde 'neyi özlüyorum?' sorusunun cevabı 'sokak satıcılarının seslerini'dir.",
      "Bu ifade belirtili isim tamlamasıdır: 'sokak satıcılarının' tamlayan, 'seslerini' tamlanandır. Başında onu sıfatlaştıran başka bir unsur yoktur.",
      "Diğer seçeneklerde nesne sıfatlarla veya başka sözcük gruplarıyla genişletilmiştir. Doğru cevap C'dir."
    ],
    takeaway: "'Sadece isim tamlaması' deniyorsa nesnenin başında ayrıca sıfat-fiil, sıfat ya da zarf grubu bulunmamalı."
  },
  {
    id: 17,
    answer: "D",
    topic: "Yazım Kuralları",
    skill: "Birleşik sözcük yazımı",
    summary: "Anlam kayması olan birleşik adların bitişik yazımını uygulama.",
    solution: [
      "Kural: Birleşik sözcüğü oluşturan sözcüklerden biri veya ikisi anlam değişmesine uğrarsa sözcük bitişik yazılır.",
      "D seçeneğindeki 'denizyılanı' bir hayvan adıdır ve birleşik sözcük olarak bitişik yazılmalıdır. Cümlede ayrı yazıldığı için kurala uyulmamıştır.",
      "Bu nedenle yazım yanlışı D seçeneğindedir."
    ],
    takeaway: "Hayvan, bitki, renk ve yemek adlarında kalıplaşmış birleşik sözcükleri sözlük biçimiyle düşün."
  },
  {
    id: 18,
    answer: "D",
    topic: "Noktalama İşaretleri",
    skill: "Konuşma ve duraksama işaretlerini yerleştirme",
    summary: "Doğrudan konuşma, soru ve eksiltili anlatım için uygun işaretleri seçme.",
    solution: [
      "'Şöyle dedi' ifadesinden sonra doğrudan konuşma geldiği için iki nokta kullanılır. 'Ne var' sözü soru değil, ardından gelen 'neyi düşünüyorsun?' sorusuna bağlı sesleniştir; burada virgül uygundur.",
      "Konuşmanın bittiği yerde nokta gerekir. Çocuğun saydığı anılar yarım bırakıldığı için üç nokta kullanılır. Son bölümde 'değil mi anne?' yapısından önce ara ayrım için virgül gelir.",
      "Sıra (:), (,), (.), (...), (,) olur. Cevap D'dir."
    ],
    takeaway: "Konuşma aktarımlarında 'dedi:' kalıbı çoğu zaman iki nokta ister; tamamlanmamış sıralamalar üç noktayla gösterilir."
  },
  {
    id: 19,
    answer: "B",
    topic: "Noktalama İşaretleri",
    skill: "Kesme işareti kullanımı",
    summary: "Kurum, kişi ve yer adlarına gelen eklerde kesme işaretini doğru değerlendirme.",
    solution: [
      "Kişi adlarına, özel yer adlarına ve belirli tarih ifadelerine gelen ekler kesmeyle ayrılabilir; A, C, D ve E bu bakımdan doğru kullanımlardır.",
      "'Bakanlar Kurulu' bir kurum/kuruluş adı gibi görünse de TDK kuralında kurum, kuruluş, kurul, birleşim, oturum ve iş yeri adlarına gelen ekler kesmeyle ayrılmaz.",
      "Bu nedenle 'Bakanlar Kurulu’nda' yazımı yanlıştır; doğru yazım 'Bakanlar Kurulunda'dır. Cevap B'dir."
    ],
    takeaway: "Kurum, kuruluş ve kurul adlarına gelen ekler güncel yazım kuralında kesmeyle ayrılmaz."
  },
  {
    id: 20,
    answer: "A",
    topic: "Anlatım Biçimleri",
    skill: "Anlatım özelliklerini saptama",
    summary: "Parçada bulunmayan anlatım tekniğini seçme.",
    solution: [
      "Parçada 'yılan misali' benzetmesi, 'hafif hafif, ağır ağır' ikilemesi, 'ana sokakları bayır' gibi nitelemeler ve 'geçmişi teneffüs ettirmek' gibi mecazlı söyleyiş vardır.",
      "Ancak bir varlığın başka bir varlıkla üstünlük, farklılık ya da benzerlik yönünden açıkça karşılaştırılması yoktur.",
      "Bu nedenle parçada bulunmayan özellik karşılaştırmadır. Cevap A'dır."
    ],
    takeaway: "Benzetme her zaman karşılaştırma değildir; karşılaştırmada iki unsur bir ölçüte göre kıyaslanır."
  },
  {
    id: 21,
    answer: "A",
    topic: "Paragrafta Anlam Akışı",
    skill: "Akışı bozan cümleyi bulma",
    summary: "Parçada konu bütünlüğünü bozan cümleyi belirleme.",
    solution: [
      "Parçanın asıl konusu incinin oluşum sürecidir: istiridyenin içine giren madde, sedef salgısı ve incinin oluşması anlatılır.",
      "I. cümle ise incinin eski çağlardan beri ticaretinin yapıldığını söyler. Bu bilgi, oluşum sürecini anlatan cümlelerle aynı düşünce çizgisinde değildir.",
      "Bu yüzden düşüncenin akışını bozan cümle I’dir. Cevap A'dır."
    ],
    takeaway: "Akış sorularında paragrafın merkez konusunu bul; konu dışı kalan cümle çoğu zaman cevap olur."
  },
  {
    id: 22,
    answer: "D",
    topic: "Paragraf Yapısı",
    skill: "Paragrafı ikiye bölme",
    summary: "Düşünce yönünün değiştiği cümleyi belirleme.",
    solution: [
      "İlk dört cümlede insanların çoğunun düşünmemesi ve düşünen insanın bu dünyadaki yeri anlatılır.",
      "V. cümleden itibaren konu 'düşünmek nedir?' sorusuna döner: düşünmenin insana ve dünyaya bütünsel bakmak olduğu açıklanır.",
      "Bu nedenle ikinci paragraf V. cümleyle başlamalıdır. Cevap D'dir."
    ],
    takeaway: "Paragraf bölmede konu aynı kalsa bile bakış açısı değiştiği yerde yeni paragraf başlar."
  },
  {
    id: 23,
    answer: "A",
    topic: "Paragrafta Tamamlama",
    skill: "Düşünceyi uygun sonuçla bitirme",
    summary: "Parçadaki olayın doğal sonucunu seçme.",
    solution: [
      "Parçada ailelere ceza uygulanınca gecikmelerin arttığı söylenir. Çünkü aileler para cezasını ödediklerinde artık kendilerini rahat hissetmektedir.",
      "Bu durum I. öncüldeki gibi mahcubiyet duygusunun ortadan kalkıp kendilerini haklı görmelerine bağlanabilir.",
      "II ve III parçada sonuç olarak verilmez; ailelerin cezadan hoşnut olmadıkları veya yöneticilerin asıl cezayı personele verdiklerini fark ettikleri söylenmemiştir. Cevap yalnız I, yani A'dır."
    ],
    takeaway: "Tamamlama sorusunda sonuç cümlesi önceki neden-sonuç zincirine doğrudan bağlanmalıdır."
  },
  {
    id: 24,
    answer: "C",
    topic: "Parçada Anlam",
    skill: "Çıkarım yapma",
    summary: "Heisenberg'in ilgi alanı ve mesleki yönelimi hakkında doğru yargıya ulaşma.",
    solution: [
      "Parçada Heisenberg'in soyut matematik problemlerinden etkilendiği ve fiziğin arkasındaki matematiğe ilgi duyduğu anlatılır.",
      "Aynı zamanda bu matematik ilgisinin ileride fizikçi olarak düşünüşünü etkilediği belirtilir. Yani fizik alanında çalışsa da ilgisinin merkezinde soyut matematik vardır.",
      "Bu anlamı en doğru veren seçenek C'dir. Diğer seçenekler Einstein'a katkı, Fermat eleştirisi veya fizik için bilinçli çalışma gibi metinde olmayan bilgiler içerir."
    ],
    takeaway: "Parçadan ulaşılabilir yargı, metindeki bilgilerin güvenli genellemesidir; metinde olmayan başarı/katkı iddialarını ele."
  },
  {
    id: 25,
    answer: "A",
    topic: "Parçada Anlam",
    skill: "Yargı çıkarma",
    summary: "Edebiyatçı ve tarihçinin ortak malzemeye farklı yaklaşımını yorumlama.",
    solution: [
      "Parçada edebiyat ve tarih araştırmacılarının kazı alanının ortak olduğu, fakat yöntemlerinin ve bakış yönlerinin farklı olduğu söylenir.",
      "Edebiyatçı geçmiş bulgularını geleceğe de çevirebilirken tarihçinin bakışı geçmişle sınırlıdır. Bu, kaynak ortaklığına rağmen yaklaşım ve yöntem farkı olduğunu gösterir.",
      "II ve III metinde desteklenmez. Doğru cevap yalnız I, yani A'dır."
    ],
    takeaway: "Öncüllü sorularda her yargı için metinden açık dayanak ara; dayanak yoksa ele."
  },
  {
    id: 26,
    answer: "E",
    topic: "Parçada Anlam",
    skill: "Değinilen bilgiyi bulma",
    summary: "İstifleme bağımlılığı hakkında parçada verilen noktayı seçme.",
    solution: [
      "Parçada istifleme bağımlılığı olan kişilerin eşyalarını ayırma anında hastalıklarıyla yüzleştiği ve küçük bir eşyayı bile gözden çıkarmanın derin üzüntü yaratabildiği anlatılır.",
      "Bu, bağımlı kişilerin eşyalarından ayrılma durumunda verdikleri tepkiye değinildiğini gösterir.",
      "Tedavinin bulunması, çevre uyarısıyla kurtulma veya suçluluk gibi başka konular anlatılmadığı için cevap E'dir."
    ],
    takeaway: "'Değinilmiştir' sorularında seçenek, parçada açıkça temas edilen bilgiyle bire bir örtüşmelidir."
  },
  {
    id: 27,
    answer: "E",
    topic: "Parçada Ana Düşünce",
    skill: "Yazarın düşüncesini belirleme",
    summary: "Şairin popüler beğeniye karşı tutumunu yorumlama.",
    solution: [
      "Şair, toplumun geçerli ortalamasına uygun şiir yazmanın mümkün olduğunu ama bunun kendisini yabancılaşmaya götüreceğini söylüyor.",
      "Buradan, şairin özgünlüğünü korumak için popüler olanı seçmemesi gerektiği sonucuna varılır.",
      "Bu düşünceyi en doğru ifade eden seçenek E'dir."
    ],
    takeaway: "Konuşanın temel kaygısını bul: burada kaygı beğenilmek değil, kendine yabancılaşmamaktır."
  },
  {
    id: 28,
    answer: "E",
    topic: "Parçada Anlam",
    skill: "Araştırma amacını belirleme",
    summary: "Deney düzeninden araştırma sorusunu çıkarma.",
    solution: [
      "Araştırmada aynı kişiler iki farklı koşulda uyutuluyor: sabit yatakta ve hafif sallanan yatakta. Beyin etkinliği ölçülerek uykuya geçiş ve uyku evreleri inceleniyor.",
      "Bu düzenek, sallanmanın uykuya dalma ve uyku derinliğiyle ilişkisini ölçmek için kurulmuştur.",
      "Bu nedenle araştırmanın amacı 'uykuya dalmak ile sallanmak arasındaki ilişkiyi incelemek'tir. Cevap E'dir."
    ],
    takeaway: "Araştırma amacı, deneyde değiştirilen değişkenden anlaşılır; burada değiştirilen şey yatağın sallanmasıdır."
  },
  {
    id: 29,
    answer: "D",
    topic: "Parçada Anlam",
    skill: "Sonuç çıkarma",
    summary: "Su kaynakları ve atık kontrolü ilişkisini yorumlama.",
    solution: [
      "Parçada büyük kentlerde sorunun kaynak yokluğu değil, eldeki suyun kirlenmesi olduğu vurgulanır. Kirlenme belirli düzeyi aşınca arıtma tesisleri de yetersiz kalır.",
      "Bu nedenle çözüm olarak yeni kaynak aramaktan çok havzaları koruma, atıkları ayrıştırma ve çöpleri kontrol etme önerilir.",
      "Bu düşünce 'temiz su kaynaklarındaki azalmanın atık kontrolü uygulamalarını önemli kılması' biçiminde D seçeneğinde verilir."
    ],
    takeaway: "Parçadaki önerilere bakmak, ana sonucu bulmayı kolaylaştırır."
  },
  {
    id: 30,
    answer: "A",
    topic: "Parçada Anlam",
    skill: "Yargı çıkarma",
    summary: "Kâğıt, basılı kitap ve elektronik kitap ilişkisini değerlendirme.",
    solution: [
      "Yazar, uygarlık düzeyini yalnız kâğıt tüketimiyle ölçme düşüncesinin artık geçerliliğini kaybettiğini söyler. Çünkü kitap yazmak ve yayımlamak kâğıtsız da mümkündür.",
      "Ancak basılı ve elektronik kitapların birlikte varlığını sürdürdüğünü de belirtir; yani kâğıt tamamen işlevsizleşmemiş, işlevini teknolojiyle paylaşmaya başlamıştır.",
      "Bu anlamı en dengeli veren seçenek A'dır."
    ],
    takeaway: "Metin 'tamamen bitti' demiyorsa seçeneklerdeki kesin ifadelerden kaçın."
  },
  {
    id: 31,
    answer: "E",
    topic: "Parçada Anlam",
    skill: "Özellik ayırt etme",
    summary: "Öykülerin parçada sözü edilmeyen niteliğini bulma.",
    solution: [
      "Parçada öykülerin etkileyici olduğu, yoruma açık olduğu, içimizden birilerinin hikâyesi olduğu ve ayrı bir yere sahip olduğu söylenir.",
      "Ayrıca didaktik olmanın tuzağına düşmedikleri özellikle belirtilir. Didaktik olmamak, yol göstericilik amacı taşımamak demektir.",
      "Bu nedenle öykülerin özelliği olmayan seçenek E, yani yol göstericiliktir."
    ],
    takeaway: "'Didaktik' öğretici/yol gösterici demektir; metin didaktik değil diyorsa yol göstericilik beklenmez."
  },
  {
    id: 32,
    answer: "A",
    topic: "Parçada Anlam",
    skill: "Simgesel anlatımı yorumlama",
    summary: "Kurşun kalem öğütlerinden çıkarılamayan başarı özelliğini bulma.",
    solution: [
      "Öğütlerde bir rehbere izin verme, acıya katlanma, yanlışlardan sonra yeniden deneme, özünü hatırlama ve iz bırakma vurgulanır.",
      "Bunlar sabır, umut, özünü koruma ve özgünlükle ilişkilendirilebilir. Ancak 'gerçekçi olmak' açıkça verilen bir öğüt değildir.",
      "Bu yüzden başarı için sayılan özellikler arasında olmayan seçenek A'dır."
    ],
    takeaway: "Simgesel metinlerde her öğüdün temsil ettiği değeri bul; metinde karşılığı olmayan soyut değeri seç."
  },
  {
    id: 33,
    answer: "C",
    topic: "Parçada Anlam",
    skill: "Değinilmeyen bilgiyi bulma",
    summary: "Hababam Sınıfı hakkında parçada olmayan bilgiyi seçme.",
    solution: [
      "Parçada eserin edebî kaynağına, farklı kuşaklara hitap etmesine, izleyicideki sıcak etkisine ve başarısında yazar, yönetmen ve müziğin rolüne değinilir.",
      "Ancak Hababam Sınıfı'nın Türk sinemasında yarattığı genel etkilerden söz edilmez; yalnız filmin kendisi ve başarısını oluşturan unsurlar anlatılır.",
      "Bu nedenle değinilmeyen seçenek C'dir."
    ],
    takeaway: "'Değinilmemiştir' sorusunda yakın ama daha geniş iddialara dikkat et; parça sadece filmin özelliğini anlatabilir."
  },
  {
    id: 34,
    answer: "B",
    topic: "Diyalog Tamamlama",
    skill: "Soru-cevap uyumu kurma",
    summary: "Uzmanın cevaplarından gazetecinin sorularını çıkarma.",
    solution: [
      "İlk cevap, bütün enerji kaynakları hesaba katıldığında tüketimdeki büyük değişimi ve bunun nüfus/teknolojiyle ilişkisini anlatır. Seçenekler içinde bu bağlama en yakın ilk soru B'dedir.",
      "İkinci cevap, petrolün hâlâ dünya genelinde birincil enerji kaynağı olduğunu ve diğer kaynakların sırasını açıklar. Bu da B seçeneğindeki ikinci soruyla doğrudan uyumludur.",
      "Bu iki soru-cevap uyumunu doğru veren seçenek B'dir."
    ],
    takeaway: "Diyalog sorularında cevabın ilk cümlesi genellikle sorunun yönünü ele verir."
  },
  {
    id: 35,
    answer: "D",
    topic: "Parçada Anlam",
    skill: "Neden belirleme",
    summary: "Servi ağacına yüklenen inanışların kaynağını bulma.",
    solution: [
      "Parçada servinin yeşil kalması, dayanıklı olması, gövdesinin dik uzanması ve minareyi andırması gibi özellikleri sıralanır.",
      "Bu özelliklerden hareketle servinin hayatı, doğruluğu, şansı, bereketi ve ölümsüzlüğü simgelediği anlatılır.",
      "Yani inanışların temel nedeni, servinin bazı özelliklerinden dolayı ona sembolik değer yüklenmesidir. Cevap D'dir."
    ],
    takeaway: "Sembol sorularında 'hangi fiziksel/biçimsel özellik hangi soyut anlama bağlanmış?' ilişkisini izle."
  },
  {
    id: 36,
    answer: "B",
    topic: "Parçada Anlam",
    skill: "Genel yargıya ulaşma",
    summary: "Doğadaki varlıkların yaşamı anlamlandırmada kullanılmasını yorumlama.",
    solution: [
      "Servi ağacının doğadaki özellikleri insan yaşamı, doğruluk, şans, bolluk ve ölümsüzlük gibi soyut kavramlarla ilişkilendirilmiştir.",
      "Bu durum, insanların hayatı anlamlandırırken doğadaki varlıklardan ve onların özelliklerinden yararlandığını gösterir.",
      "Bu genel sonucu en doğru veren seçenek B'dir."
    ],
    takeaway: "Parçada tek bir örnek anlatılsa bile soru daha genel ilkeyi sorabilir; örneğin arkasındaki ana fikri bul."
  },
  {
    id: 37,
    answer: "C",
    topic: "Parçada Anlam",
    skill: "Araştırma sonucundan çıkarım",
    summary: "Silinmiş verilerin erişilebilir olmasının doğurduğu riski değerlendirme.",
    solution: [
      "Araştırmada ikinci el telefonlardan fotoğraf, arama geçmişi, e-posta, kısa mesaj ve kredi kartı bilgisine ulaşılabildiği belirtilir.",
      "Bu sonuç, elektronik cihazlarda silinmiş gibi görünen bilgilerin başkalarınca kurtarılabilmesinin güvenlik tehlikesi doğurduğunu gösterir.",
      "Bu yargı C seçeneğinde açıkça verilir."
    ],
    takeaway: "Araştırma sonucu kişisel veri içeriyorsa çıkarım çoğu zaman güvenlik ve mahremiyet riskiyle ilgilidir."
  },
  {
    id: 38,
    answer: "D",
    topic: "Karşılaştırma",
    skill: "Eski ve yeni araştırmaları karşılaştırma",
    summary: "İki araştırmanın hangi yönlerden benzer olduğunu belirleme.",
    solution: [
      "Eski araştırmalarda bilgisayar ve sabit diskler, yeni araştırmada akıllı telefonlar incelenmiştir; yani incelenen araçlar farklıdır. I benzer değildir.",
      "İki araştırmanın çıkış noktası aynıdır: silindiği sanılan verilere düzgün işlem yapılmazsa ulaşılabilir. Ulaşılan sonuçlar da benzerdir: veriler kurtarılabilmektedir.",
      "Bu nedenle benzerlik II ve III'tedir. Cevap D'dir."
    ],
    takeaway: "Karşılaştırmada her ölçütü ayrı kontrol et; araç farklı olsa da amaç ve sonuç aynı olabilir."
  },
  {
    id: 39,
    answer: "B",
    topic: "Parçada Anlam",
    skill: "Değinilmeyen bilgiyi bulma",
    summary: "Tambora patlamasıyla ilgili parçada olmayan etkiyi seçme.",
    solution: [
      "Parçada patlamanın atmosfere kül ve gaz karıştırdığı, yeryüzünü soğuttuğu, Kuzey Yarım Küre'de etkili olduğu, kıtlık ve salgınlara yol açtığı ve edebiyat/sanat üzerinde iz bıraktığı anlatılır.",
      "Ancak bazı bölgelerde kuraklığa neden olduğundan söz edilmez; tam tersine soğuk hava, ekinlerin tahribi, kıtlık ve salgın hastalıklar anlatılır.",
      "Bu nedenle değinilmeyen seçenek B'dir."
    ],
    takeaway: "Metindeki 'kıtlık' sözcüğünü otomatik olarak 'kuraklık'la eşitleme; neden farklı olabilir."
  },
  {
    id: 40,
    answer: "D",
    topic: "Parçada Anlam",
    skill: "Söz-parça ilişkisi kurma",
    summary: "Olumsuz bir olaydan beklenmedik olumlu sonuç doğmasını yorumlama.",
    solution: [
      "Tambora patlaması büyük yıkımlara yol açmış, fakat Mary Shelley'nin kapalı alanda kalmasına ve Frankenstein'ı yazmasına da zemin hazırlamıştır.",
      "Bu durum, bir yerde olumsuz görünen olayın başka bir yerde olumlu bir sonuca kaynaklık edebilmesini anlatır.",
      "'Burada sel olup akan yağmurun hangi köydeki güle can suyu olduğunu bilemezsin.' sözü bu ilişkiyi en iyi karşılar. Cevap D'dir."
    ],
    takeaway: "Söz ilişkilendirme sorularında sözün mecaz anlamını bul; burada 'sel' zarar, 'can suyu' beklenmedik faydadır."
  }
];


const practiceSections = [
  { id: "turkce", label: "Türkçe", shortLabel: "T", imageDir: "2018-tyt-turkce", count: questions.length },
  { id: "sosyal", label: "Sosyal Bilimler", shortLabel: "S", imageDir: "2018-tyt-sosyal", count: 25 },
  { id: "matematik", label: "Temel Matematik", shortLabel: "M", imageDir: "2018-tyt-matematik", count: 40 },
  { id: "fen", label: "Fen Bilimleri", shortLabel: "F", imageDir: "2018-tyt-fen", count: 20 }
];

const generatedSectionData = {
  sosyal: {
    label: "Sosyal Bilimler",
    shortLabel: "S",
    imageDir: "2018-tyt-sosyal",
    answers: ["B", "C", "D", "C", "A", "C", "C", "A", "E", "B", "B", "D", "B", "E", "E", "A", "E", "D", "B", "D", "A", "A", "E", "C", "B"],
    topics: [
      "Tarih: İlk Türk Devletleri", "Tarih: İslamiyet Sonrası Türk Devletleri", "Tarih: Osmanlı Kuruluş Dönemi", "Tarih: Millî Mücadele", "Tarih: Cumhuriyet İnkılapları",
      "Coğrafya: Coğrafyanın Bölümleri", "Coğrafya: Nüfus ve Yerleşme", "Coğrafya: İklim Grafikleri", "Coğrafya: Harita ve Bölge", "Coğrafya: Doğal Afetler",
      "Felsefe: Bilgi Felsefesi", "Felsefe: Bilim Felsefesi", "Felsefe: Varlık Felsefesi", "Felsefe: Ahlak Felsefesi", "Felsefe: Din Felsefesi",
      "Din Kültürü: İnanç ve Değerler", "Din Kültürü: Teyemmüm", "Din Kültürü: Peygamberlik", "Din Kültürü: Ahlaki Tutumlar", "Din Kültürü: İslam Ahlakı",
      "Felsefe: Dil ve Anlam", "Felsefe: İnsan Felsefesi", "Felsefe: Sanat Felsefesi", "Felsefe: Din Felsefesi", "Felsefe: Siyaset Felsefesi"
    ],
    skill: "Metindeki bilgiden çıkarım yapma",
    guidance: "Sosyal sorularında önce soru kökünün ne istediğini bul, sonra metin/harita/grafikte doğrudan verilen bilgi ile yorum gerektiren bilgiyi ayır."
  },
  matematik: {
    label: "Temel Matematik",
    shortLabel: "M",
    imageDir: "2018-tyt-matematik",
    answers: ["D", "E", "B", "C", "B", "C", "D", "A", "B", "E", "B", "D", "C", "A", "B", "E", "A", "D", "A", "E", "E", "A", "D", "A", "A", "D", "E", "C", "D", "D", "C", "C", "C", "D", "B", "A", "B", "A", "C", "B"],
    topics: [
      "Sayılar ve Kesirler", "Oran-Orantı", "Örüntü ve Sayma", "Üslü/Köklü İfadeler", "Sembolik İşlem",
      "Sıralama ve Eşitsizlik", "Problem Kurma", "Aritmetik İşlem", "Mantık ve Önermeler", "Terazi Problemi",
      "Aralık ve Sayı Doğrusu", "Yaş Problemi", "Tablo Okuma", "Fonksiyon Grafiği", "Bölünebilme",
      "Cebirsel İfadeler", "Problemler", "Tablo ve Oran", "Hız/İş/Zaman", "Paragraf-Türü Matematik",
      "Kümeler", "Kümeler ve Sayma", "Tuş Takımı Problemi", "Karışım/Yüzde", "Grafik Okuma",
      "Veri Yorumlama", "Analitik Düşünme", "Katı Cisimler", "Olasılık", "Geometri: Üçgen",
      "Analitik Geometri", "Geometri: Dik Üçgen", "Geometri: Alan", "Geometri: Katlama", "Analitik Geometri",
      "Geometri: Çember", "Geometri: Çokgen", "Grafik ve Eğim", "Katı Cisim", "Geometri: Alan-Oran"
    ],
    skill: "Verilenleri matematik diline çevirme",
    guidance: "Matematik sorularında şekli veya metni hemen formüle çevirmeye çalışma; önce verilenleri, isteneni ve seçeneklerin hangi büyüklüğü temsil ettiğini ayır."
  },
  fen: {
    label: "Fen Bilimleri",
    shortLabel: "F",
    imageDir: "2018-tyt-fen",
    answers: ["E", "C", "A", "D", "D", "B", "E", "E", "C", "A", "D", "E", "A", "D", "C", "B", "E", "E", "D", "E"],
    topics: [
      "Fizik: Bilimsel Bilgi", "Fizik: Grafik Okuma", "Fizik: Kaldırma Kuvveti", "Fizik: Isı ve Sıcaklık", "Fizik: Elektriklenme",
      "Fizik: Aydınlanma", "Fizik: Optik", "Kimya: Atom Modelleri", "Kimya: Periyodik Özellikler", "Kimya: Kimyasal Bağlar",
      "Kimya: Buhar Basıncı", "Kimya: Mürekkepler", "Kimya: Karışımlar", "Kimya: Organik Kimya", "Biyoloji: Ekoloji",
      "Biyoloji: Hücre Zarı", "Biyoloji: Canlıların Özellikleri", "Biyoloji: Hücre Bölünmesi", "Biyoloji: Kalıtım", "Biyoloji: Enzimler"
    ],
    skill: "Bilimsel kavramı örnek üzerinde yorumlama",
    guidance: "Fen sorularında kavram tanımını ezber gibi değil, deney/şekil/grafikte hangi değişkenin neyi etkilediği üzerinden kontrol et."
  }
};

function makeGeneratedSolution(sectionConfig, questionNumber, topic, answer) {
  return [
    `${sectionConfig.guidance} Bu soruda konu başlığı '${topic}' olduğu için ilk adım, görselde verilen bilgileri ve soru kökünün istediği sonucu ayrı ayrı not etmektir.`,
    `Seçenekleri tek tek kontrol ederken metinde, tabloda, grafikte veya şekilde desteklenmeyen ifadeleri ele. İşlem sorularında sonucu seçeneklerle karşılaştır; yorum sorularında yalnızca verilenlerden çıkarılabilen yargıyı seç.`,
    `Bu eleme sonunda tutarlı kalan seçenek ${answer} olur. Cevabı görmeden önce kendi seçiminle karşılaştır; farklıysa özellikle hangi seçeneği neden elediğini tekrar gözden geçir.`
  ];
}

function buildGeneratedQuestions(sectionId, config) {
  return config.answers.map((answer, index) => {
    const id = index + 1;
    const topic = config.topics[index] || config.label;
    return {
      id,
      sectionId,
      sectionLabel: config.label,
      sectionShortLabel: config.shortLabel,
      key: `${sectionId}-${id}`,
      imageDir: config.imageDir,
      answer,
      topic,
      skill: config.skill,
      summary: `${config.label} ${id}. soru: ${topic} kazanımını ölçer.`,
      solution: makeGeneratedSolution(config, id, topic, answer),
      takeaway: "Önce kendi cevabını işaretle; çözümü yalnızca denemeden sonra açarak kalıcı öğrenme sağlamaya çalış."
    };
  });
}

const allQuestions = [
  ...questions.map((question) => ({
    ...question,
    sectionId: "turkce",
    sectionLabel: "Türkçe",
    sectionShortLabel: "T",
    key: `turkce-${question.id}`,
    imageDir: "2018-tyt-turkce"
  })),
  ...Object.entries(generatedSectionData).flatMap(([sectionId, config]) => buildGeneratedQuestions(sectionId, config))
];

const questionGrid = document.querySelector("#question-grid");
const questionList = document.querySelector("#question-list");
const searchInput = document.querySelector("#search");
const sectionFilter = document.querySelector("#section-filter");
const topicFilter = document.querySelector("#topic-filter");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const resetButton = document.querySelector("#reset-progress");
const year = document.querySelector("#year");
const imageDialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const closeDialogButton = document.querySelector("#close-dialog");

function readStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function readStoredEntries(key) {
  return readStoredArray(key).filter((entry) => Array.isArray(entry) && entry.length === 2);
}

const completed = new Set(readStoredArray("tyt2018Completed"));
const attempts = new Map(readStoredEntries("tyt2018Attempts"));

year.textContent = new Date().getFullYear();

function getQuestionImage(question) {
  return `assets/questions/${question.imageDir}/q${String(question.id).padStart(2, "0")}.png`;
}

function saveProgress() {
  localStorage.setItem("tyt2018Completed", JSON.stringify([...completed]));
}

function saveAttempts() {
  localStorage.setItem("tyt2018Attempts", JSON.stringify([...attempts]));
}

function getAttempt(question) {
  return attempts.get(question.key) || null;
}

function hasAttempted(question) {
  return Boolean(getAttempt(question));
}

function updateProgress() {
  const count = completed.size;
  const percent = Math.round((count / allQuestions.length) * 100);
  progressText.textContent = `${count}/${allQuestions.length} soru tamamlandı`;
  progressBar.style.width = `${percent}%`;
}

function createOption(value, textContent) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = textContent;
  return option;
}

function populateFilters() {
  practiceSections.forEach((section) => {
    sectionFilter.appendChild(createOption(section.id, section.label));
  });
  populateTopicFilter();
}

function populateTopicFilter() {
  const selectedSection = sectionFilter.value;
  const currentTopic = topicFilter.value;
  topicFilter.innerHTML = "";
  topicFilter.appendChild(createOption("", "Tüm konular"));
  const source = selectedSection ? allQuestions.filter((question) => question.sectionId === selectedSection) : allQuestions;
  const topics = [...new Set(source.map((question) => question.topic))].sort((a, b) => a.localeCompare(b, "tr"));
  topics.forEach((topic) => topicFilter.appendChild(createOption(topic, topic)));
  topicFilter.value = topics.includes(currentTopic) ? currentTopic : "";
}

function renderQuestionGrid(filteredQuestions) {
  questionGrid.innerHTML = "";
  filteredQuestions.forEach((question) => {
    const link = document.createElement("a");
    const attemptedClass = hasAttempted(question) ? " is-attempted" : "";
    link.className = `question-pill ${completed.has(question.key) ? "is-done" : ""}${attemptedClass}`;
    link.href = `#soru-${question.key}`;
    link.textContent = `${question.sectionShortLabel}${question.id}`;
    link.setAttribute("aria-label", `${question.sectionLabel} ${question.id}. soruya git`);
    questionGrid.appendChild(link);
  });
}

function getFilteredQuestions() {
  const search = searchInput.value.trim().toLocaleLowerCase("tr");
  const section = sectionFilter.value;
  const topic = topicFilter.value;

  return allQuestions.filter((question) => {
    const text = `${question.id} ${question.sectionLabel} ${question.topic} ${question.skill} ${question.summary}`.toLocaleLowerCase("tr");
    return (!search || text.includes(search)) && (!section || question.sectionId === section) && (!topic || question.topic === topic);
  });
}

function renderChoiceButtons(question) {
  const attempted = getAttempt(question);
  return ["A", "B", "C", "D", "E"].map((choice) => {
    let stateClass = "";
    if (attempted) {
      if (choice === question.answer) stateClass = " is-correct";
      if (choice === attempted && attempted !== question.answer) stateClass = " is-wrong";
    }
    return `<button class="choice-button${stateClass}" type="button" data-key="${question.key}" data-choice="${choice}" ${attempted ? "disabled" : ""}>${choice}</button>`;
  }).join("");
}

function renderFeedback(question) {
  const attempted = getAttempt(question);
  if (!attempted) {
    return `<p class="quiz-hint">Çözümü ve doğru cevabı görmek için önce bir şık işaretle.</p>`;
  }
  const isCorrect = attempted === question.answer;
  return `<div class="feedback ${isCorrect ? "is-correct" : "is-wrong"}">
    ${isCorrect ? "Doğru işaretledin." : `Seçimin ${attempted}; doğru cevap ${question.answer}.`} Şimdi çözümü adım adım inceleyebilirsin.
  </div>`;
}

function renderSolution(question) {
  if (!hasAttempted(question)) {
    return `<div class="solution-locked">
      <h3>Çözüm kilitli</h3>
      <p>Önce kendi cevabını seç. Böylece cevabı görmeden aktif şekilde düşünmüş olursun.</p>
    </div>`;
  }
  return `<div class="solution-panel">
    <div class="meta-row">
      <span>${question.skill}</span>
      <span>Doğru cevap: ${question.answer}</span>
    </div>
    <h3>Adım adım çözüm</h3>
    <ol>${question.solution.map((step) => `<li>${step}</li>`).join("")}</ol>
    <div class="takeaway"><strong>Mini not:</strong> ${question.takeaway}</div>
    <label class="complete-toggle">
      <input type="checkbox" data-id="${question.key}" ${completed.has(question.key) ? "checked" : ""}>
      Bu soruyu anladım
    </label>
  </div>`;
}

function renderQuestions() {
  const filtered = getFilteredQuestions();
  renderQuestionGrid(filtered);
  questionList.innerHTML = "";

  filtered.forEach((question) => {
    const article = document.createElement("article");
    article.className = "question-card";
    article.id = `soru-${question.key}`;
    article.innerHTML = `
      <div class="question-header">
        <div>
          <p class="eyebrow">${question.sectionLabel} • ${question.topic}</p>
          <h2>${question.id}. Soru</h2>
          <p>${question.summary}</p>
        </div>
        <div class="attempt-badge ${hasAttempted(question) ? "is-open" : ""}">${hasAttempted(question) ? "Çözüm açık" : "Önce dene"}</div>
      </div>
      <div class="question-body">
        <button class="image-button" data-image="${getQuestionImage(question)}" data-title="${question.sectionLabel} ${question.id}. soru görseli">
          <img src="${getQuestionImage(question)}" alt="2018 TYT ${question.sectionLabel} ${question.id}. soru ÖSYM PDF görseli" loading="lazy">
          <span>Görseli büyüt</span>
        </button>
        <div class="quiz-column">
          <div class="quiz-panel">
            <h3>Cevabını seç</h3>
            <div class="choice-grid" aria-label="${question.sectionLabel} ${question.id}. soru cevap seçenekleri">
              ${renderChoiceButtons(question)}
            </div>
            ${renderFeedback(question)}
          </div>
          ${renderSolution(question)}
        </div>
      </div>
    `;
    questionList.appendChild(article);
  });

  document.querySelector("#result-count").textContent = `${filtered.length} soru gösteriliyor`;
}

function openDialog(src, title) {
  dialogImage.src = src;
  dialogImage.alt = title;
  dialogTitle.textContent = title;
  imageDialog.showModal();
}

populateFilters();
updateProgress();
renderQuestions();

searchInput.addEventListener("input", renderQuestions);
sectionFilter.addEventListener("input", () => {
  populateTopicFilter();
  renderQuestions();
});
topicFilter.addEventListener("input", renderQuestions);

questionList.addEventListener("click", (event) => {
  const imageButton = event.target.closest(".image-button");
  if (imageButton) {
    openDialog(imageButton.dataset.image, imageButton.dataset.title);
    return;
  }

  const choiceButton = event.target.closest(".choice-button[data-key]");
  if (choiceButton) {
    attempts.set(choiceButton.dataset.key, choiceButton.dataset.choice);
    saveAttempts();
    renderQuestions();
  }
});

questionList.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox'][data-id]")) return;
  const id = event.target.dataset.id;
  if (event.target.checked) {
    completed.add(id);
  } else {
    completed.delete(id);
  }
  saveProgress();
  updateProgress();
  renderQuestions();
});

resetButton.addEventListener("click", () => {
  completed.clear();
  attempts.clear();
  saveProgress();
  saveAttempts();
  updateProgress();
  renderQuestions();
});

closeDialogButton.addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) imageDialog.close();
});
