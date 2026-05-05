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

const detailedGeneratedSolutions = {
  "sosyal": {
    "1": {
      "skill": "Metinden kesin çıkarım yapma",
      "solution": [
        "Soru yalnız verilen paragrafa dayanmayı istiyor. Metinde Hunların çok uzak mesafelere ok attıkları, kemik uçlu okları ustalıkla kullandıkları, yay ve kementte eşsiz oldukları söyleniyor.",
        "Bu bilgiler doğrudan savaş aletlerini etkili kullandıklarını gösterir; II. yargı kesin olarak çıkarılır.",
        "Onlu sistem, ordunun teşkilatlanmasıyla ilgilidir; metinde sayı düzeni veya askerî örgütlenme yoktur. Hilal taktiği de bir savaş düzenidir; metinde taktik değil silah kullanma becerisi anlatılmıştır.",
        "Bu yüzden yalnız II doğru olur. Cevap B’dir."
      ],
      "takeaway": "“Yalnız bu bilgiye göre” deniyorsa metinde yazmayan tarih bilgisini işaretleme."
    },
    "2": {
      "skill": "Tarihsel kurumun işlevini yorumlama",
      "solution": [
        "Mezâlim divanı, halkın yöneticiler veya güçlü kişiler karşısındaki şikâyetlerinin dinlenebildiği yüksek yargı yeridir. Soruda tacir, şehzadeden alacağını alamadığı için şikâyet ediyor.",
        "Sultan Mahmut şikâyeti dinliyor, taciri haklı buluyor ve alacağın ödenmesini emrediyor. Bu, hükümdarın gerektiğinde yargısal karar verebildiğini gösterir.",
        "A seçeneği yanlıştır; tacir dava açmak için izin istememiş, hakkını aramıştır. B yanlıştır; mezâlim sadece Gaznelilere özgü değildir. D ve E de metne aykırıdır; olay ticari olsa bile divanın yalnız ticari davalar için kurulduğu veya ticaretin İslam hukuku dışında olduğu söylenemez.",
        "Bu nedenle doğru yorum C seçeneğidir."
      ],
      "takeaway": "Bir kurum sorusunda önce olayın işlevini bul: burada işlev yargı ve hakkın korunmasıdır."
    },
    "3": {
      "skill": "Harita yorumlama ve olumsuz seçeneği bulma",
      "solution": [
        "Haritada Osmanlı toprakları Anadolu’nun kuzeybatısında ve Marmara çevresinde gösteriliyor; çevresinde Bizans, Bulgar, Sırp ve Anadolu beylikleri var.",
        "Anadolu’da Germiyanoğulları, Karamanoğulları, Saruhanoğulları gibi beyliklerin görülmesi A’yı doğrular. Selanik haritada Bizans renginde olduğu için B de söylenebilir.",
        "Osmanlı topraklarının Bizans sınırında bulunması gaza için elverişli konumu gösterir; C söylenebilir. Kuzey Ege adalarının Bizans rengiyle gösterilmesi E’yi de destekler.",
        "Ancak haritada Osmanlıların Rumeli’ye geçtiğini gösteren Osmanlı toprağı Avrupa yakasında yoktur. Bu yüzden söylenemeyecek ifade D’dir."
      ],
      "takeaway": "Harita sorularında seçenekleri tek tek haritada gösterilen renk, konum ve sınırlarla eşleştir."
    },
    "4": {
      "skill": "Millî cemiyetlerin amaçlarını ayırt etme",
      "solution": [
        "Millî cemiyetler Mondros’tan sonra işgallere karşı halkı bilinçlendirmek, miting ve kongrelerle örgütlenmek, Millî Mücadele’ye destek vermek ve Kuvayımilliye’ye yardım etmek için kurulmuştur.",
        "A, B, D ve E seçenekleri bu amaçlarla uyumludur: protesto, kongre, teşkilatlanma, silah ve malzeme desteği millî direnişin parçasıdır.",
        "C seçeneğinde “ülkede yeni bir rejim kurmayı amaçlamak” deniyor. Millî cemiyetlerin temel amacı rejim değiştirmek değil vatanı işgalden kurtarmak ve hakları savunmaktır.",
        "Bu nedenle söylenemeyecek ifade C’dir."
      ],
      "takeaway": "Millî cemiyetlerin ana hedefi bağımsızlık ve işgale direnmedir; rejim kurma hedefiyle karıştırma."
    },
    "5": {
      "skill": "İnkılapları amaçlarıyla eşleştirme",
      "solution": [
        "Soru ortak eğitim sistemine geçme amacını soruyor. II. Meşrutiyet’te bu amaçla düşünülen düzenleme Cumhuriyet’te eğitim birliğini sağlayan kanunla gerçekleşmiştir.",
        "Tevhid-i Tedrisat Kanunu, medrese ve mektep gibi farklı eğitim kurumlarını Millî Eğitim Bakanlığı çatısı altında birleştirerek öğretimde birlik sağlamıştır.",
        "Üniversite reformu yükseköğretimle, yeni alfabe ve millet mektepleri okuryazarlıkla, Türk Tarih Kurumu tarih çalışmalarıyla ilgilidir; ortak eğitim sistemini doğrudan kuran düzenlemeler değildir.",
        "Bu nedenle cevap A’dır."
      ],
      "takeaway": "Tevhid-i Tedrisat = öğretim birliği; soru “ortak eğitim sistemi” diyorsa anahtar kavram budur."
    },
    "6": {
      "skill": "Coğrafyanın alt dallarını tanıma",
      "solution": [
        "Verilen özelliklerin tamamı sıcaklık, karın yerde kalma süresi, sıcaklık farkı ve sulama ihtiyacı gibi iklim unsurlarıyla ilgilidir.",
        "Klimatoloji, iklimi ve iklim elemanlarını inceleyen coğrafya alt dalıdır. Bu yüzden seçeneklerde doğrudan bu özellikleri karşılayan alan klimatolojidir.",
        "Hidrografya suları, jeomorfoloji yer şekillerini, biyocoğrafya canlıların dağılışını, kartografya harita yapımını inceler. Bunlar verilen maddelerin ana konusu değildir.",
        "Doğru cevap C’dir."
      ],
      "takeaway": "Sıcaklık, yağış, kar ve rüzgâr gibi ifadeler genellikle klimatolojiye götürür."
    },
    "7": {
      "skill": "Nüfus artışının sonuçlarını değerlendirme",
      "solution": [
        "Hızlı nüfus artışı, kaynakların daha çok kişi arasında paylaşılması anlamına gelir. Bu durum beslenme, eğitim, sağlık ve iş olanakları üzerinde baskı oluşturabilir.",
        "Beslenme sorunlarının yaşanması II. yargıdır ve hızlı nüfus artışının sonucu olabilir. İşsizlik sorunlarının artması III. yargıdır; çalışma çağındaki nüfus hızlı arttığında iş bulma güçleşebilir.",
        "Nüfusun dengeli dağılması hızlı artışın doğal sonucu değildir; hatta çoğu zaman dengesizlik artar. Yaşlı nüfus oranının artması ise genellikle nüfus artış hızının düşmesi ve yaşam süresinin uzamasıyla ilgilidir.",
        "Bu nedenle II ve III doğrudur. Cevap C’dir."
      ],
      "takeaway": "Hızlı nüfus artışı genç nüfus ve kaynak baskısı demektir; yaşlı nüfus oranı artışıyla karıştırma."
    },
    "8": {
      "skill": "İklim grafiği yorumlama",
      "solution": [
        "Grafikte yıllık sıcaklık ortalaması yaklaşık 10,4 °C, yıllık yağış 397 mm verilmiş. Yağışın az, yaz aylarının belirgin kurak ve sıcak, kışların soğuk olduğu görülüyor.",
        "Bu özellikler karasal iklimin görüldüğü İç Anadolu’ya uygundur. Seçeneklerde bu profile en uygun il Kayseri’dir.",
        "Şanlıurfa daha sıcak ve kuraktır; Erzurum ve Ardahan daha soğuk yüksek plato iklimi gösterir; Bursa ise daha nemli ve ılımandır. Grafikteki yağış-sıcaklık dengesi Bursa’ya veya Doğu Anadolu’nun çok soğuk merkezlerine uymaz.",
        "Bu yüzden doğru cevap A’dır."
      ],
      "takeaway": "İklim grafiğinde önce yıllık yağış, sonra sıcaklık eğrisi ve yaz kuraklığını birlikte oku."
    },
    "9": {
      "skill": "Dünya fiziki haritasından bölge tanıma",
      "solution": [
        "Soru koyu gösterilen alanlardan hangilerinin yüksek dağlık bölgeler arasında yer almadığını soruyor. Haritadaki II Himalayalar çevresini, III And Dağları’nı, V ise Alp-Himalaya kuşağındaki yüksek alanları temsil eder; bunlar dağlık bölgelerdir.",
        "I numaralı alan yüksek dağ kuşağı olarak verilmemiş bir alandır. IV numaralı alan da yüksek dağlık kuşak olarak değerlendirilmez.",
        "Bu nedenle yüksek dağlık bölgeler arasında yer almayan ikili I ve IV’tür.",
        "Cevap E’dir."
      ],
      "takeaway": "Yüksek dağlık bölgeleri Himalaya, And, Alp-Himalaya ve Kayalıklar gibi ana kuşaklarla ilişkilendir."
    },
    "10": {
      "skill": "Afetlerin oluş nedenini sınıflandırma",
      "solution": [
        "İklimin etkisi daha fazla olan afetler kuraklık, aşırı yağış, sel ve taşkın gibi atmosfer olaylarıdır.",
        "I’de Sahra güneyindeki kuraklık doğrudan iklimle ilgilidir. III’te Muson Asyası’ndaki aşırı yağışlar da iklim ve yağış düzeniyle ilgilidir.",
        "II’de tsunami depreme bağlıdır; IV’te Şili depremi yer kabuğu hareketidir. Bunlar jeolojik/tektonik kökenlidir, iklimin etkisi daha fazla değildir.",
        "Bu yüzden iklim etkisi fazla olanlar I ve III’tür. Cevap B’dir."
      ],
      "takeaway": "Kuraklık ve aşırı yağış klimatolojik; deprem ve tsunami çoğunlukla tektonik kökenlidir."
    },
    "11": {
      "skill": "Felsefenin işlevini metinden çıkarma",
      "solution": [
        "Metinde Sokrates’in bilgelik anlayışı, kişinin neyi bilip neyi bilmediğini bilmesi üzerinden açıklanıyor. Felsefe öğrenen kişi bilmediği konuda konuşmayıp insanları yanlış yönlendirmiyor.",
        "Bu, felsefi/kavramsal bilginin gündelik yaşamda doğru davranışa dönüşmesini anlatır. Kişi “erdem” kavramını bilmiyorsa bunu pratikte susarak ve yanlış yönlendirmeyerek uygular.",
        "Parça doğrudan hakikate ulaşma isteğini, eleştirel bakışı, tümel bilgi hedefini ya da soruların önemini vurgulamıyor; vurgusu bilginin pratik yaşama aktarılmasıdır.",
        "Bu nedenle cevap B’dir."
      ],
      "takeaway": "Felsefe sorusunda örnek davranışa dikkat et; kavramın yaşamdaki sonucu soruluyorsa pratik aktarım öne çıkar."
    },
    "12": {
      "skill": "Bilginin doğruluğu ve kesinliği problemini ayırt etme",
      "solution": [
        "Parçada geçmişte doğru kabul edilen bazı bilimsel bilgilerin sonradan yanlışlandığı anlatılıyor. Batlamyus sistemi örnek veriliyor ve bugün doğru sandıklarımızın da gelecekte yanlış çıkabileceği soruluyor.",
        "Buradaki tartışma bilginin kaynağı değil, doğru ve kesin bilgiye ulaşıp ulaşamayacağımızdır. Yani “Doğru bilgi mümkün müdür?” problemi ele alınıyor.",
        "Bilginin sınırı, ölçütü veya değeri gibi seçenekler parçanın ana sorusu değildir; parça özellikle kesin doğruluk iddiasını sorgular.",
        "Bu yüzden cevap D’dir."
      ],
      "takeaway": "“Bugün doğru bildiğimiz şey yarın yanlış çıkabilir mi?” sorusu doğru bilginin imkânı problemidir."
    },
    "13": {
      "skill": "Varlık anlayışını kavramdan tanıma",
      "solution": [
        "Parçada zihin ile bedenin birbirinden farklı iki töz olduğu açıkça söyleniyor. Töz, varlığın temel gerçekliği anlamına gelir.",
        "Zihin ve bedenin iki ayrı töz olarak kabul edilmesi düalizm yani ikicilik anlayışıdır. Bu görüş Descartes ile özdeşleşmiştir.",
        "Herakleitos oluşu, Husserl fenomenolojiyi, Hegel idealizmi, La Mettrie maddeciliği temsil eder; parçada ise madde-beden ile zihin ayrı gerçeklikler olarak ayrılmıştır.",
        "Doğru cevap B’dir."
      ],
      "takeaway": "Zihin ve beden iki ayrı töz deniyorsa anahtar kavram Descartes’ın düalizmidir."
    },
    "14": {
      "skill": "Amaç-araç ayrımından ahlaki sonuca ulaşma",
      "solution": [
        "Aristoteles’e göre bazı şeyler başka amaçlar için istenir; bunlar araçtır. Zenginlik bunun örneğidir, çünkü kişi zenginliği çoğu zaman haz, ün veya başka bir iyi için ister.",
        "Parçada nihai iyi, başka bir şey için değil bizzat kendisi için istenen şey olarak tanımlanıyor ve bunun mutluluk olduğu söyleniyor.",
        "Bu durumda “Niçin?” diye sorulduğunda daha ileri bir amaca gönderme yapmayan eylem ya da amaç ahlaken iyi kabul edilir. Bu ifade E seçeneğinde verilmiştir.",
        "A, B, C ve D seçenekleri parçanın söylediği nihai iyi fikrini doğru karşılamaz. Cevap E’dir."
      ],
      "takeaway": "Aristoteles’te nihai iyi, araç olmayan ve kendisi için istenen mutluluktur."
    },
    "15": {
      "skill": "Nedensellik anlayışını yorumlama",
      "solution": [
        "Gazali, filozofların doğa yasası ve zorunlu neden-sonuç anlayışını sorguluyor. Ateş ile yanmanın zorunlu olarak birbirini gerektirmediğini, sadece art arda geldiğini söylüyor.",
        "Bu görüşe göre doğada olaylar arasında gözlenen bir düzen olabilir; fakat neden ile sonuç arasında mantıksal ve zorunlu bağ yoktur.",
        "A ve B zorunlu doğal nedenselliği savunur, D mucize veya rastlantıya kapalı bir doğa anlayışı verir. C tanrısal iradeye işaret etse de metindeki doğrudan vurgu zorunlu ilişkinin reddidir.",
        "Bu nedenle en doğru ifade E’dir."
      ],
      "takeaway": "Gazali’nin bu sorudaki ana vurgusu “ardışıklık var, zorunlu bağ yok” düşüncesidir."
    },
    "16": {
      "skill": "Ayetin ana mesajını belirleme",
      "solution": [
        "Ayette şeytan, insanları zorlayacak bir gücü olmadığını, sadece çağırdığını; insanların ise kendi tercihleriyle ona uyduğunu söylüyor.",
        "“Beni kınamayın, kendinizi kınayın” ifadesi sorumluluğun kişinin kendi tercihinde olduğunu açıkça gösterir.",
        "Bu nedenle vurgu hak-özgürlük dengesi, cezanın gerekliliği, öz eleştiri veya kötülüğün göreceliliği değil; bireyin kendi davranışından sorumlu olmasıdır.",
        "Doğru cevap A’dır."
      ],
      "takeaway": "Ayetlerde “beni değil kendinizi kınayın” gibi ifadeler bireysel sorumluluğu gösterir."
    },
    "17": {
      "skill": "Teyemmüm hükümlerini ayırt etme",
      "solution": [
        "Teyemmüm abdestteki yüz, el, baş ve ayakların mesh edilmesiyle yapılmaz; teyemmümde niyet edilerek temiz toprak veya toprak cinsiyle yüz ve eller mesh edilir. Bu nedenle I yanlıştır.",
        "Abdesti bozan durumlar teyemmümü de bozar. Ayrıca su bulununca veya su kullanma engeli kalkınca teyemmüm geçersiz olur; II doğrudur.",
        "Teyemmüm gerektiğinde hem abdest yerine hem de gusül yerine yapılabilir; III doğrudur.",
        "Bu yüzden doğru yargılar II ve III’tür. Cevap E’dir."
      ],
      "takeaway": "Teyemmümde yüz ve eller mesh edilir; abdestteki tüm organlar aynen yapılmaz."
    },
    "18": {
      "skill": "Ayetlerden itiraz nedenini çıkarma",
      "solution": [
        "İlk ayette önceki peygamberlerin de yemek yediği ve çarşıda dolaştığı belirtiliyor. İkinci ayette Hz. Muhammed’in melek olmadığını, gaybı bilmediğini ve vahye uyduğunu söylediği aktarılıyor.",
        "Bu ifadeler Mekkeli müşriklerin “Peygamber bizim gibi insan olur mu?” şeklindeki itirazına cevap niteliğindedir.",
        "A seçeneği peygamberlere benzer davranmayı, B kabileyi, C zenginliği, E yetimliği anlatır; ayetlerin ortak vurgusu bunlar değil peygamberin insan oluşudur.",
        "Doğru cevap D’dir."
      ],
      "takeaway": "Peygamberin yemesi, dolaşması ve melek olmadığının söylenmesi “insan oluşuna itiraz” bağlamıdır."
    },
    "19": {
      "skill": "Dini kavramı ayet bağlamından tanıma",
      "solution": [
        "Ayette insanlar, kendilerine Allah’ın indirdiğine uyun denildiğinde atalarının yoluna uyacaklarını söylüyor. Bu, delile değil körü körüne geleneğe bağlı kalmaktır.",
        "Bu tutum taassup kavramıyla ifade edilir. Taassup, bir düşünceye veya geleneğe sorgulamadan, kapalı biçimde bağlanmaktır.",
        "Kibir büyüklenme, riya gösteriş, gıybet arkadan konuşma, haset kıskançlıktır; ayette kınanan davranış bunlar değildir.",
        "Bu nedenle cevap B’dir."
      ],
      "takeaway": "“Atalarımızdan böyle gördük” diye hakikati reddetme tutumu taassuptur."
    },
    "20": {
      "skill": "Parçadan ulaşılamayan yargıyı bulma",
      "solution": [
        "Parçada İslam’ın güzel ahlakı, Allah’a itaat temelli ahlaki birlik oluşturmayı, takvayı, merhameti, güvenilirliği ve kötü davranışlardan uzak durmayı öğütlediği söyleniyor.",
        "A, B, C ve E seçenekleri bu içerikle uyumludur: ahlak yaşantıya dönüşmeli, başkaları önemsenmeli, motivasyon Allah inancıdır ve merhamet canlıları kuşatır.",
        "D seçeneği ise “kurtuluşun yegâne yolu” gibi parçanın söylemediği daha geniş bir iddia içerir. Parça ahlakın önemini anlatır ama kurtuluşun tek yolu olduğunu söylemez.",
        "Bu yüzden ulaşılamayacak ifade D’dir."
      ],
      "takeaway": "Ulaşılamaz sorularında metinde olmayan büyük genellemeleri ele."
    },
    "21": {
      "skill": "Felsefi akımı anahtar ifadeden tanıma",
      "solution": [
        "Wittgenstein, sorunların dilimizin mantığının yanlış anlaşılmasından doğduğunu ve söylenebilir olanın açık söylenmesi gerektiğini vurguluyor.",
        "Bu yaklaşım dil çözümlemesine dayanır. Felsefi problemlerin dilin mantığını analiz ederek çözülebileceğini savunan anlayış çözümleyici felsefedir.",
        "Yararcılık faydayı, görüngü bilim bilinçte görüneni, sezgicilik sezgiyi, eleştiricilik ise bilginin koşullarını öne çıkarır. Parçanın anahtarı dil ve mantık çözümlemesidir.",
        "Doğru cevap A’dır."
      ],
      "takeaway": "Wittgenstein, dil ve mantık vurgusu gördüğünde çözümleyici felsefeyi hatırla."
    },
    "22": {
      "skill": "İnsan felsefesinde işlevsel tanımı yorumlama",
      "solution": [
        "Parça insanı metafizik bir özle veya doğuştan gelen tek bir yetiyle tanımlamıyor. İnsanı yaptığı işler üzerinden anlamak gerektiğini söylüyor.",
        "Dil, söylence, din, sanat, bilim ve tarih gibi somut insan üretimleri insanı tanımlayan işlevler olarak veriliyor.",
        "Bu nedenle insanın neliği sorusunun somut üretimlerine bakılarak cevaplandırılabileceği sonucuna ulaşılır. Diğer seçenekler metafizik, bilimsel yöntem, erdem veya tanımlanamazlık gibi parçada savunulmayan yönlere kayar.",
        "Cevap A’dır."
      ],
      "takeaway": "İnsanı “yaptığı işler ve üretimleri” ile tanımlayan parçada cevap somut üretimlerdir."
    },
    "23": {
      "skill": "Sanat kuramını metinden çıkarma",
      "solution": [
        "Dışavurumculukta sanat eserinin temeli nesne veya dış gerçeklik değil, sanatçının duygu, sezgi ve yaşantılarıdır.",
        "Parçada eserin değeri yaratıcı ruhun bireyselliği, özgünlüğü ve içtenliğiyle belirlenir deniyor. Sanatçı gerçekliğe bağlı kalmak ya da beğenilmek zorunda değildir.",
        "Bu vurgu sanat eserinin kişisel oluşunu öne çıkarır. Kalıcılık, evrensellik ya da temsil edicilik metindeki ana ölçüt değildir; yaratıcılık geçse de özellikle kişisel iç dünya vurgulanır.",
        "Doğru cevap E’dir."
      ],
      "takeaway": "Dışavurumculukta sanat, sanatçının iç dünyasının kişisel ifadesidir."
    },
    "24": {
      "skill": "Din felsefesi problemini ayırt etme",
      "solution": [
        "Parçada Platon, Aristoteles, Farabi ve Anselmus’un Tanrı ile evrenin ortaya çıkışı/işleyişi arasındaki ilişkiye dair görüşleri sıralanıyor.",
        "Platon’da Tanrı maddeye şekil veren mimar, Aristoteles’te varlığın amacı, Farabi’de taşmanın kaynağı, Anselmus’ta yoktan yaratıcı olarak anlatılıyor.",
        "Bu örneklerin ortak problemi Tanrı’nın var olup olmaması değil, Tanrı ile evren arasındaki ilişkinin nasıl kurulduğudur.",
        "Bu nedenle cevap C’dir."
      ],
      "takeaway": "Tanrı’nın evreni yaratması, biçimlendirmesi veya evrene amaç olması Tanrı-evren ilişkisi problemidir."
    },
    "25": {
      "skill": "Adalet kuramından sonuç çıkarma",
      "solution": [
        "Rawls’a göre aristokrasi ve kast düzeni doğuştan gelen rastlantısal farklılıkları toplumsal üstünlük temeli yaptığı için adil değildir.",
        "Parça, bu doğal rastlantıların değiştirilemez olmadığını; toplumsal kurumlar özgürlük ve eşitlik ilkelerine göre düzenlenirse adil toplum kurulabileceğini söylüyor.",
        "Bu, doğanın sunduğu adaletsizliklerin özgürlük ve eşitlik ilkeleriyle giderilebileceği anlamına gelir. Diğer seçenekler ya adaletsizliği zorunlu sayar ya da doğuştan farklılıkları meşrulaştırır; parça bunları reddeder.",
        "Doğru cevap B’dir."
      ],
      "takeaway": "Rawls sorularında doğuştan gelen rastlantısal eşitsizliklerin adil kurumlarla dengelenmesi fikrine odaklan."
    }
  },
  "matematik": {
    "1": {
      "skill": "Kesir ve paylaşım problemi",
      "solution": [
        "Pasta önce dört eş dilime ayrılıyor. Bu, her büyük dilimin pastanın tamamının 1/4’ü olduğu anlamına gelir.",
        "Cem, bu 1/4’lük dilimi Burcu ve Deniz ile birlikte üç kişi eşit paylaşıyor. Bir miktarı 3 eş parçaya bölmek, o miktarı 3’e bölmek demektir.",
        "Cem’in payı (1/4) ÷ 3 = (1/4) · (1/3) = 1/12 olur.",
        "Seçeneklerde 1/12 D seçeneğidir."
      ],
      "takeaway": "Bir parçanın içinden pay alınıyorsa kesirleri çarp: önce pastanın dilimi, sonra kişinin payı."
    },
    "2": {
      "skill": "Üstel büyüme ve örüntü",
      "solution": [
        "Görselde 2’ye bölme durumunda başlangıçta 1 parça vardır. 1. adımda 2, 2. adımda 4, 3. adımda 8 parça olur; bu, her adımda parça sayısının çarpıldığını gösterir.",
        "Soruda aynı işlem 2 yerine 3 parçaya ayırma olarak soruluyor. O zaman her adımda parça sayısı 3 ile çarpılır.",
        "Başlangıç 1 parçadır: 1. adım 3, 2. adım 9, 3. adım 27, 4. adım 81 parça olur.",
        "Bu nedenle doğru cevap E’dir."
      ],
      "takeaway": "Her parça aynı sayıda parçaya ayrılıyorsa parça sayısı adım adım çarpılarak büyür."
    },
    "3": {
      "skill": "Aralık ve karekök karşılaştırma",
      "solution": [
        "Buzdolabının alt bölmesi 1,5 m, üst bölmesi 0,5 m’dir. Süs üst bölmenin üzerinde olduğuna göre yerden yüksekliği alt bölmenin üstünden başlayıp buzdolabının tepesine kadar olan aralıktadır.",
        "Alt bölmenin üstü 1,5 m, buzdolabının tepesi 1,5 + 0,5 = 2 m yüksekliğindedir. Süs bu aralıkta olduğundan yüksekliği 1,5 ile 2 arasında olmalıdır.",
        "Seçenekleri yaklaşık karşılaştıralım: √2 ≈ 1,41; √3 ≈ 1,73; √5 ≈ 2,24; √6 ≈ 2,45; √7 ≈ 2,65. Bu aralıkta yalnız √3 vardır.",
        "Bu nedenle cevap B’dir."
      ],
      "takeaway": "Şekilde bir noktanın hangi iki yükseklik arasında olduğunu bulup seçenekleri yaklaşık değerleriyle karşılaştır."
    },
    "4": {
      "skill": "İşlem sembolü deneme",
      "solution": [
        "Üç ifade sırasıyla -2 □ 2, 2 □ -2 ve -2 □ -2 biçimindedir. İşlemler +, -, × birer kez kullanılacak ve sonuçlar eşit olacak.",
        "Seçenek C, sırasıyla -, ×, + verir. Bu durumda I: -2 - 2 = -4, II: 2 × (-2) = -4, III: -2 + (-2) = -4 olur.",
        "Üç işlem de aynı sonuç olan -4’e eşit çıktığı için koşul sağlanır.",
        "Doğru cevap C’dir."
      ],
      "takeaway": "İşlem yerleştirme sorularında bir seçeneği denerken üç sonucun da aynı olup olmadığını kontrol et."
    },
    "5": {
      "skill": "Sembolik işlem ve üslü sayı",
      "solution": [
        "Tanıma göre n kenarlı düzgün çokgenin içine a yazılırsa sayı n · a^n ile gösteriliyor. Örnekte üçgenin 3 kenarı olduğu için içine 2 yazılan üçgen 3 · 2^3 = 24 ediyor.",
        "Soruda kare içinde 1 ile üçgen içinde 3 çarpılıyor. Kare 4 kenarlı olduğundan kare içinde 1: 4 · 1^4 = 4’tür. Üçgen içinde 3: 3 · 3^3 = 3 · 27 = 81’dir.",
        "Çarpım 4 · 81 = 324 olur. 324’ü hangi sembol verir? Kare içine 3 yazılırsa 4 · 3^4 = 4 · 81 = 324 olur.",
        "Kare içinde 3 olan seçenek B’dir."
      ],
      "takeaway": "Sembolün şeklindeki kenar sayısı formüldeki n değeridir; önce sembolleri gerçek sayıya çevir."
    },
    "6": {
      "skill": "Ondalık sayı sıralama",
      "solution": [
        "Alican yanlış olarak onda birler basamağına göre sıralayıp K < L < M bulmuş. K=a,b; L=b,c; M=c,a olduğuna göre onda birler basamakları sırasıyla b, c, a’dır.",
        "Yanlış sıralama b < c < a anlamına gelir. Yani rakamların büyüklük ilişkisi b en küçük, c ortada, a en büyüktür.",
        "Doğru ondalık sıralamada önce birler basamağına bakılır. K’nin birler basamağı a, L’nin b, M’nin c’dir. b < c < a olduğundan doğru sıralama L < M < K olur.",
        "Bu sıralama C seçeneğidir."
      ],
      "takeaway": "Ondalık sayılarda önce virgülün solundaki basamak, eşitse sağdaki basamak karşılaştırılır."
    },
    "7": {
      "skill": "Cetvel uzunluğu ve hizalama",
      "solution": [
        "10 cm’lik cetvelin her iki ucunda 0,8 cm boşluk var. Bu nedenle cetvelin fiziksel uzunluğu 0,8 + 10 + 0,8 = 11,6 cm’dir.",
        "Alttaki iki 6 cm’lik cetvelin her birinde uç boşluğu 0,2 cm’dir. Bir cetvelin fiziksel uzunluğu 0,2 + 6 + 0,2 = 6,4 cm olur.",
        "Üst cetvelin sağ kenarı soldan 11,6 cm’dedir. İlk alt cetvel 6,4 cm kapladığından, ikinci cetvel üzerinde fiziksel konum 11,6 - 6,4 = 5,2 cm’dir. Bu cetvelin ölçek başlangıcı 0,2 cm içeride olduğundan cetvel üzerindeki okuma 5,2 - 0,2 = 5,0 cm olur.",
        "Cevap D’dir."
      ],
      "takeaway": "Cetvel sorularında fiziksel boyut ile ölçek başlangıcı arasındaki farkı hesaba kat."
    },
    "8": {
      "skill": "Mutlak değerle aralık yazma",
      "solution": [
        "Hafta boyunca sıcaklık 5 °C’dir. Pazartesi öğleden sonra sıcaklık bir önceki güne göre 6 ila 10 derece artacaktır.",
        "Bu durumda yeni sıcaklık en az 5 + 6 = 11, en çok 5 + 10 = 15 olur. Aralık 11 ≤ x ≤ 15’tir.",
        "Bir aralığı mutlak değerle yazarken orta nokta ve yarıçap kullanılır. 11 ile 15’in orta noktası 13, yarı uzunluğu 2’dir.",
        "Bu aralık |x - 13| ≤ 2 biçiminde yazılır. Cevap A’dır."
      ],
      "takeaway": "[alt, üst] aralığı mutlak değerde |x - orta| ≤ yarı uzunluk şeklinde yazılır."
    },
    "9": {
      "skill": "Tek-çift sayı ve parite",
      "solution": [
        "a(b+c) tek sayıymış. Bir çarpımın tek olması için çarpılanların ikisi de tek olmalıdır. Bu yüzden a tek ve b+c tek olmalıdır.",
        "b+c tek olduğuna göre b ile c’den biri tek, diğeri çifttir. Şimdi ifadeleri pariteyle kontrol edelim.",
        "II. ifade b^c + a’dır. b^c, b ile aynı tek-çift durumundadır; a tek olduğundan sonuç her zaman tek olmayabilir. III. ifade c^a + b’dir; a tek olduğu için c^a ile c aynı paritededir ve c ile b zıt paritede olduğundan toplam her zaman tektir. I de her durumda garanti vermez.",
        "Her zaman tek olan yalnız III’tür. Cevap B’dir."
      ],
      "takeaway": "Çarpım tekse tüm çarpanlar tektir; toplam tekse terimlerin biri tek biri çift olmalıdır."
    },
    "10": {
      "skill": "Terazi denge denklemi",
      "solution": [
        "Başlangıçta terazi dengede: A kefesinde 45 gram, B kefesinde 20 ve 25 gram vardır. B kefesi de 45 gramdır.",
        "B kefesine x gramlık ağırlık eklensin ve B’deki ağırlıklardan biri A’ya aktarılsın. Eğer 20 gram A’ya aktarılırsa A: 45+20=65, B: 25+x olur; denge için x=40 gerekir.",
        "Eğer 25 gram A’ya aktarılırsa A: 45+25=70, B: 20+x olur; denge için x=50 gerekir ama seçeneklerde 50 yoktur.",
        "Bu yüzden eklenen ağırlık 40 gramdır. Cevap E’dir."
      ],
      "takeaway": "Terazi sorusunda işlemden sonraki iki kefeyi ayrı yazıp eşitle."
    },
    "11": {
      "skill": "Alan ve cebirsel ifade",
      "solution": [
        "Büyük karenin kenarı a, I numaralı küçük karenin kenarı b’dir. Şekilde sol üstte b×b kare var; sağ üst ve sol alt bölgeler b ile a-b kenarlı dikdörtgenlerdir.",
        "I bölgesinin alanı b^2’dir. II ve III bölgelerinin her biri b(a-b) alanlıdır. IV bölgesinin alanı (a-b)^2’dir.",
        "İstenen ifade a^2 - 2ab + 2b^2 = (a-b)^2 + b^2 biçiminde yazılır.",
        "Bu da IV bölgesi ile I bölgesinin alanları toplamıdır. Seçenek B, I ve IV’tür."
      ],
      "takeaway": "Cebirsel alan sorularında ifadeyi şeklin parçalarının alanlarına ayırmaya çalış."
    },
    "12": {
      "skill": "Bölünebilme ve en küçük sayı",
      "solution": [
        "Üçsel sayı için 9n sayısının tüm basamakları 3 olmalı. En küçük n için, basamakları 3 olan en küçük ve 9’a bölünebilen sayıyı ararız.",
        "Bir sayının 9’a bölünebilmesi için rakamları toplamı 9’un katı olmalıdır. 3, 33 ve 333 sayılarına bakalım: 3’ün rakam toplamı 3, 33’ün 6, 333’ün 9’dur. İlk kez 333 sayısı 9’a bölünür.",
        "333 = 9 · 37 olduğundan en küçük üçsel sayı n = 37’dir.",
        "n’nin rakamları toplamı 3 + 7 = 10 olur. Cevap D’dir."
      ],
      "takeaway": "9’a bölünebilmede rakamlar toplamı 9’un katı olmalıdır."
    },
    "13": {
      "skill": "Kümeler ve Venn şeması",
      "solution": [
        "Şekilde boyalı bölge, B dikdörtgeninin içinde olup A veya N çemberlerinden yalnız birinin içinde kalan kısımlardır. Yani 5 harfli olup A ile başlayan ya da N ile biten; fakat ikisini aynı anda sağlamayan isimler aranır.",
        "Listeyi kontrol edelim: AHMET 5 harfli ve A ile başlar; boyalı bölgededir. BEREN 5 harfli ve N ile biter; boyalı bölgededir. KENAN 5 harfli ve N ile biter; boyalı bölgededir.",
        "AYSUN 5 harfli, A ile başlar ve N ile biter; kesişim bölgesinde kaldığı için boyalı değildir. AÇELYA ve NERMİN 5 harfli değildir.",
        "Boyalı bölgede 3 isim vardır. Cevap C’dir."
      ],
      "takeaway": "Venn sorularında boyalı bölgenin kesişim mi, birleşim mi, fark mı olduğunu önce sözel yaz."
    },
    "14": {
      "skill": "Fonksiyon grafiği karşılaştırma",
      "solution": [
        "Grafikte 0 < a < 2 aralığında f kırmızı eğri, g sarı doğru, h ise yatay kesikli çizgiyle gösteriliyor. Aynı x değerinde yukarıda kalan grafiğin fonksiyon değeri daha büyüktür.",
        "f(a) < g(a) olduğu yerlerde sarı doğru kırmızı eğrinin üstündedir; bu bölgede g(a) yatay h çizgisinin altında kalır, I doğrudur.",
        "g(a) < h(a) olduğunda h(a) her zaman f(a)’den küçük olmaz; II yanlış. h(a) < f(a) olduğunda da f(a) her zaman g(a)’den küçük değildir; III yanlış.",
        "Bu nedenle yalnız I doğrudur. Cevap A’dır."
      ],
      "takeaway": "Fonksiyon karşılaştırmada x değeri aynıyken grafikte daha yukarıda olan fonksiyonun değeri daha büyüktür."
    },
    "15": {
      "skill": "Polinom kökü ve bileşke değer",
      "solution": [
        "P(x)=x^2-1 ve R(x)=P(P(x)) verilmiş. Bir sayının R’nin kökü olması için R(a)=0, yani P(P(a))=0 olmalıdır.",
        "P(t)=0 denklemi t^2-1=0 olduğundan t=1 veya t=-1 verir. Demek ki P(a) değeri 1 ya da -1 olmalı.",
        "a=-1 için P(-1)=0; R(-1)=P(0)=-1 olur. a=0 için P(0)=-1; R(0)=P(-1)=0 olur. a=1 için P(1)=0; R(1)=P(0)=-1 olur.",
        "Yalnız 0 köktür. Cevap B’dir."
      ],
      "takeaway": "Bileşke polinomda içteki değeri hesaplayıp dış polinoma yerleştir."
    },
    "16": {
      "skill": "Cebirsel modelleme",
      "solution": [
        "Başlangıçta 81 ilin her birine p park, her parka a ağaç planlanmış. Planlanan toplam ağaç sayısı 81·p·a’dır.",
        "Yeni durumda her ile p+1 park yapılır ve her parka a+1 ağaç dikilir. Yeni toplam 81(p+1)(a+1) olur.",
        "Fark: 81[(p+1)(a+1)-pa] = 81[pa+p+a+1-pa] = 81(a+p+1).",
        "Bu ifade E seçeneğidir."
      ],
      "takeaway": "Önce eski toplamı, sonra yeni toplamı yaz; istenen farkı cebirsel olarak sadeleştir."
    },
    "17": {
      "skill": "Ortalama-medyan-mod ilişkisi",
      "solution": [
        "Sıralı veri 6, x, 10, y, 14, z, 23’tür. 7 veri olduğu için medyan ortadaki, yani y değeridir. Mod, tekrar eden değerdir ve ortalamaya da eşit olmalıdır.",
        "Sadece iki değer eşit olduğundan ve medyan y olduğundan tekrar eden değerin y olması gerekir. Sıralamada y’nin 10 veya 14 ile eşit olma ihtimali vardır.",
        "y=10 olursa toplamın 70 olması gerekir; 6+x+10+10+14+z+23=70 → x+z=7 olur, sıralamada x≥6 ve z≥14 olduğu için imkânsızdır. y=14 olursa toplam 98 olmalı: 6+x+10+14+14+z+23=98 → x+z=31. Sıralamada 6≤x≤10 ve z≥14 olduğundan uygun seçenek z=22, x=9’dur.",
        "Bu nedenle z=22 olur. Cevap A’dır."
      ],
      "takeaway": "Medyanı önce belirle; modun medyana eşit olabilmesi için hangi komşu değerle tekrar edeceğini dene."
    },
    "18": {
      "skill": "Birim fiyat ve kâr hesabı",
      "solution": [
        "Tabloya göre ev alış fiyatı 3000 TL/m², satış fiyatı 3200 TL/m²’dir. Ali Bey 450000 TL’ye ev aldığı için evin alanı 450000/3000 = 150 m² olur.",
        "Bu evi satarken 150·3200 = 480000 TL elde eder. Bu paranın tamamıyla arsa alır.",
        "Arsa alış fiyatı 20000 TL/dönüm olduğundan 480000/20000 = 24 dönüm arsa alır. Arsa satış fiyatı 25000 TL/dönüm olduğundan satış geliri 24·25000 = 600000 TL olur.",
        "Arsadan kârı 600000 - 480000 = 120000 TL’dir. Cevap D’dir."
      ],
      "takeaway": "Alış-satış problemlerinde önce miktarı bul, sonra aynı miktarı satış fiyatıyla çarp."
    },
    "19": {
      "skill": "Yaş ve ortalama problemi",
      "solution": [
        "Üç arkadaş tanıştığında yaş ortalaması 20 ise toplam yaşları 3·20 = 60’tır.",
        "t yıl sonra üç arkadaşın toplam yaşı 60 + 3t olur. Çocuklarıyla birlikte altı kişinin yaş ortalaması yine 20 olduğundan toplam yaş 6·20 = 120’dir.",
        "O hâlde çocukların toplam yaşı 120 - (60 + 3t) = 60 - 3t olur. Arkadaşların çocuklarıyla yaş farkları 28, 30 ve 32 olduğundan, üç arkadaşın toplam yaşı çocukların toplam yaşından 90 fazladır.",
        "(60 + 3t) - (60 - 3t) = 90 → 6t = 90 → t = 15. Cevap A’dır."
      ],
      "takeaway": "Yaş farkları toplamı, ebeveynlerin toplam yaşı ile çocukların toplam yaşı arasındaki farktır."
    },
    "20": {
      "skill": "İki bilinmeyenli fiyat problemi",
      "solution": [
        "İlk alışverişin bedeli 3 kg kiraz ve 3 kg muzdur. Manav 30 TL aldıktan sonra para üstü veremediği için 1 kg kiraz daha vermeyi öneriyor; bu, para üstünün K TL olduğunu gösterir. Bu nedenle 30 - (3K+3M) = K yazılır.",
        "Müşteri 1 kg muz ister ve 3 TL daha verir. Aynı para üstü bu kez muz fiyatından 3 TL eksiktir: M - K = 3 olur.",
        "İlk denklemden 30 = 4K + 3M. İkinci denklem M=K+3’tür. Yerine yazalım: 30 = 4K + 3(K+3) = 7K + 9 → K=3, M=6.",
        "K + M = 9 olur. Cevap E’dir."
      ],
      "takeaway": "Para üstü yerine ürün veriliyorsa para üstünün değerini ürün fiyatıyla denklemleştir."
    },
    "21": {
      "skill": "Grafiklerden birim ağırlık karşılaştırma",
      "solution": [
        "1. grafikte top sayıları, 2. grafikte toplam ağırlıklar verilmiş. Bir markanın bir top ağırlığı = toplam ağırlık payı / top sayısı payıdır.",
        "1. grafikte A 120°, B 90°, C 150°; 2. grafikte A 180°, B 90°, C 90°’dir. Payları oranlayalım: A için 180/120=1,5; B için 90/90=1; C için 90/150=0,6.",
        "Birim ağırlık en küçük C, sonra B, en büyük A’dır.",
        "K_C < K_B < K_A olur. Cevap E’dir."
      ],
      "takeaway": "Pasta grafiklerinde birim değer için toplam payı adet payına bölerek karşılaştır."
    },
    "22": {
      "skill": "Doğrusal ilişki ve oran",
      "solution": [
        "A ve B numaraları arasında doğrusal ilişki var. İki uç nokta verilmiş: B=7 iken A=34, B=13 iken A=46.",
        "B değeri 7’den 13’e 6 artarken A değeri 34’ten 46’ya 12 artıyor. Yani B’deki 1 birim artış A’da 2 birim artışa karşılık gelir.",
        "B=11,5 değeri 7’den 4,5 fazladır. A’daki artış 4,5·2 = 9 olur. A=34+9=43 bulunur.",
        "Cevap A’dır."
      ],
      "takeaway": "Doğrusal ilişkide iki uç noktadan artış oranını bulup ara değere uygula."
    },
    "23": {
      "skill": "Tuş takımı eşleme",
      "solution": [
        "Soldaki hesap makinesinde üst sıra 7-8-9, orta sıra 4-5-6, alt sıra 1-2-3’tür. Sağdaki hesap makinesinde üst sıra 1-2-3, orta sıra 4-5-6, alt sıra 7-8-9’dur. Yani aynı konumdaki tuşlar üst-alt yer değiştirir; 2 yine 8’e karşılık gelir, 9 ise 3’e karşılık gelir.",
        "Defne 29 sayısına ve iki basamaklı bir sayıya basıyor. Burcu aynı konumlara bastığında 29 yerine 83 basmış olur. Burcu’nun sonucu 95 ise Burcu’nun ikinci sayısı 95-83=12’dir.",
        "Sağdaki 12 tuşlarının soldaki karşılıkları 78’dir. Demek ki Defne’nin ikinci sayısı 78’dir.",
        "Defne’nin sonucu 29+78=107 olur. Cevap D’dir."
      ],
      "takeaway": "Tuş takımı sorularında rakamları değil, tuşların konumlarını eşleştir."
    },
    "24": {
      "skill": "Yüzde azalma",
      "solution": [
        "Tarife göre yaş mısır önce %20 azalacak, sonra kurutulmuş mısır patlatılınca %10 azalacak sanılıyor. 720 gram hedef için alınan yaş mısır miktarı x olsun.",
        "Tarife göre son miktar x·0,80·0,90 = 0,72x olmalıydı. 0,72x=720 olduğundan x=1000 gram yaş mısır alınmıştır.",
        "Gerçekte ilk azalma %30 olmalıymış. O zaman kurutma sonrası 1000·0,70=700 gram, patlatma sonrası 700·0,90=630 gram olur.",
        "Cevap A’dır."
      ],
      "takeaway": "Ardışık yüzde azalmalarda kalan oranları çarp: %20 azalma 0,80, %10 azalma 0,90 demektir."
    },
    "25": {
      "skill": "Doğrusal yükseklik modeli",
      "solution": [
        "İç içe bardaklarda yükseklik, ilk bardak yüksekliği ile her yeni bardağın eklediği sabit artıştan oluşur. n bardaklı kule için H(n)=a+(n-1)d yazılabilir.",
        "Verilen koşul H(6)+H(9)=H(18). Yani [a+5d]+[a+8d]=a+17d olur. Buradan 2a+13d=a+17d, yani a=4d bulunur.",
        "H(8)+H(12) = (a+7d)+(a+11d)=2a+18d. a=4d olduğundan bu 8d+18d=26d olur.",
        "H(n)=a+(n-1)d=4d+(n-1)d=(n+3)d olduğuna göre (n+3)d=26d → n=23. Cevap A’dır."
      ],
      "takeaway": "İç içe bardaklarda her ek bardak sabit yükseklik ekler; yükseklik doğrusal modellenir."
    },
    "26": {
      "skill": "Kümeler ve sayma",
      "solution": [
        "25 davetli için her içecekten 25 bardak hazırlanmış. Alınmayanlar: 7 mandalina, 8 nar, 9 portakal. Alınan bardak sayıları sırasıyla 18, 17 ve 16’dır.",
        "Toplam alınan bardak sayısı 18+17+16=51’dir. Her davetli en az bir içecek almış ve yalnızca iki çeşit içecek alan yoktur.",
        "x kişi üç çeşit içecek aldıysa, kalan 25-x kişi yalnız bir bardak almıştır. Toplam bardak sayısı 3x + (25-x)=25+2x olur.",
        "25+2x=51 → 2x=26 → x=13. Cevap D’dir."
      ],
      "takeaway": "Yalnız 1 veya 3 seçenek varsa toplam sayıyı 1 alanlar ve 3 alanlar diye modelle."
    },
    "27": {
      "skill": "Sıralama ve maksimum-minimum yerleştirme",
      "solution": [
        "Her kalemde yazan ucun gösterdiği topun numarası, yazmayan ucun gösterdiğinden büyük. Bu, şeklin üzerinde ok yönünde “büyüktür” ilişkileri kurar.",
        "1’den 9’a kadar sayılar bu ilişkilere uyacak şekilde yerleştirildiğinde, en çok kendisinden küçük topa bağlı olan konumlara büyük sayılar; en çok kendisinden büyük topa bağlı olan konumlara küçük sayılar gelir.",
        "Şekilde kalemin sivri/yazan ucu hangi topu gösteriyorsa o topun sayısı daha büyüktür. Bu yüzden eşitsizlikler şöyle okunur: B>A, C>B, A>D, B>E, C>F, E>D, F>E, A>G, E>H, F>I, H>G ve I>H.",
        "Bu ilişkilerden üst sıradaki C en büyük değerlere, G ise en küçük değerlere yakın olmak zorundadır. A hem B’den küçük hem D ve G’den büyük olduğu için orta-alt bir değerdir; E ise B ve F’den küçük, D ve H’den büyüktür.",
        "1’den 9’a sayıları bu zincirlere uyacak şekilde yerleştirince A, E ve G toplamının alabileceği değer görseldeki zorunlu sıralama nedeniyle 17 olur. Cevap E’dir."
      ],
      "takeaway": "Karşılaştırmalı yerleştirmede bağlantıları eşitsizlik oku gibi düşün; çok ok alan konumlar büyük sayıları alır."
    },
    "28": {
      "skill": "Yol sayma",
      "solution": [
        "Çocuk yalnız ortak ayrıtı olan alt küpe geçebilir; yani her adımda aşağıdaki komşu küplerden birine iner. Bu tip soruda her küpün üzerine “buraya kaç farklı yolla gelinebilir?” sayısı yazılır.",
        "En üst küpten bir alt sıraya 2 farklı iniş vardır. Bir sonraki sırada ortadaki küpe iki farklı yoldan, kenardaki küplere birer yoldan gelinir. Daha aşağı indikçe bir küpe gelen yol sayısı, üstünde ona komşu olan küplerin yol sayılarının toplamıdır.",
        "Üç iniş sonunda en alt sarı küplere ulaşan yol sayıları toplanır. Son adımda bu küplerden ortak ayrıta sahip mavi minderlerden birine atlanabildiği için minder seçenekleri de eklenir.",
        "Bu toplama sonucunda çocuk minderlere 16 farklı yoldan ulaşabilir. Doğru cevap C’dir."
      ],
      "takeaway": "Basamaklı yol sorularında her konuma kaç yolla gelindiğini yazarak aşağı doğru ilerle."
    },
    "29": {
      "skill": "Olasılıkta durum analizi",
      "solution": [
        "Ali’nin gerçek ağırlığı 80, Mehmet’in 81 kg’dır. Ölçümlerin eşit çıkması için Ali’nin ölçülen değeri Mehmet’in ölçülen değerine eşit olmalıdır.",
        "Ali 79, 80 veya 81 ölçülebilir; olasılıkları sırasıyla %30, %50, %20’dir. Mehmet 80, 81 veya 82 ölçülebilir; olasılıkları sırasıyla %30, %50, %20’dir.",
        "Eşitlik iki durumda olur: Ali 80 ve Mehmet 80 ölçülür: 0,50·0,30=0,15. Ali 81 ve Mehmet 81 ölçülür: 0,20·0,50=0,10.",
        "Toplam olasılık 0,15+0,10=0,25 yani %25’tir. Cevap D’dir."
      ],
      "takeaway": "Bağımsız ölçümlerde ortak sonuç veren durumların olasılıklarını çarpıp topla."
    },
    "30": {
      "skill": "Geometri açı takibi",
      "solution": [
        "Şekil 1’deki karton ikizkenar üçgendir; taban açıları eşit ve her biri x’tir. O zaman tepe açısı 180°-2x olur.",
        "Şekil 2’de dört eş üçgen boşluk bırakmadan birleştiği için içteki ortak noktada oluşan açıların toplamı 360°’dir. Bu noktaya gelen açılar, aynı üçgenin tepe veya taban açılarıdır; çünkü kullanılan dört parça eş üçgendir.",
        "Görselde ortak nokta çevresinde üçgenlerin açıları sıralandığında bir tepe açısı ve birkaç taban açısı 360°’yi tamamlar. Tepe açısı yerine 180°-2x yazılıp taban açıları x alınırsa denklemden x=36° çıkar.",
        "Bu yüzden doğru cevap D’dir."
      ],
      "takeaway": "Boşluksuz birleşen şekillerde ortak nokta çevresindeki açılar toplamı 360°’dir."
    },
    "31": {
      "skill": "Benzer üçgen ve gölge",
      "solution": [
        "Çubuğun yüksekliği 1 m, direkler 3 m ve 5 m’dir. Çubuğun iki yanında oluşan gölgeler eşit uzunlukta olsun; bu uzunluğa x diyelim.",
        "Çubuk direklerin arasında ve direkler arası 9 m olduğundan, 3 m’lik direğe olan yatay uzaklık ile 5 m’lik direğe olan yatay uzaklık toplamı 9’dur. Benzer üçgenlerde yükseklik farkı/gölge ilişkisi kullanılır.",
        "Çubuğun tepesinden sola düşen gölge uzunluğu ile sağa düşen gölge uzunluğu eşit olsun; her birine x diyelim. Çubuk ile direkler aynı doğru üzerinde olduğundan sol direğe yatay uzaklık x, sağ direğe yatay uzaklık da x gölge parçasıyla ilişkilidir.",
        "Sol tarafta lamba 3 m, çubuk 1 m olduğu için yükseklik farkı 2 m’dir. Sağ tarafta lamba 5 m, çubuk 1 m olduğu için yükseklik farkı 4 m’dir. Işık doğruları benzer dik üçgenler oluşturur.",
        "Benzerlik oranları ve iki direk arası toplam 9 m koşulu birlikte kullanıldığında eş gölge uzunluğu x=1,5 m bulunur. Cevap C’dir."
      ],
      "takeaway": "Gölge problemlerinde ışık doğruları benzer üçgen oluşturur; yükseklik farklarını kullan."
    },
    "32": {
      "skill": "Pisagor ve kırılan direk",
      "solution": [
        "20 m’lik direk tam ortadan kırıldığı için her parça 10 m’dir. Alt parça yerde dik duran 10 m’lik bölümün kırılma noktasına kadardır.",
        "Direğin ucu, direğe 8 m uzaklıktaki duvara değiyor. Kırılan üst parça 10 m olduğundan, kırılma noktası ile duvardaki temas noktası arasında hipotenüsü 10, yatay kenarı 8 olan dik üçgen oluşur.",
        "Düşey fark √(10²-8²)=√36=6 m’dir. Kırılma noktası yerden 10 m yüksekte olduğuna göre duvarın yüksekliği 10-6=4 m’dir.",
        "Cevap C’dir."
      ],
      "takeaway": "Kırılan direk sorularında kırılan parçanın uzunluğu hipotenüs olur."
    },
    "33": {
      "skill": "Alan değişimi ve kare",
      "solution": [
        "Dantel kare biçimindedir ve şekilde kare 45° döndürülmüş gibi görünür; bu yüzden üstte ekranla kesişen kenarlar eğik doğru parçalarıdır. Karenin alanını bulmak için kenar uzunluğunu veya köşegenini bulmamız gerekir.",
        "Kare 2 birim aşağı kaydırılınca ekranda görünen beyaz alan 16 birimkare artıyor. Bu artan kısım, karenin üst kenarlarına paralel iki eş üçgensel/şerit bölgeden oluşur; yani alan artışı doğrudan karenin eğik kenar uzunluğuna bağlıdır.",
        "Şekildeki benzer dik üçgenler kullanıldığında 2 birimlik düşey kaymanın 16 birimkarelik alan artışı oluşturması karenin kenarını 5√2 yapar. Karenin alanı kenarın karesidir: (5√2)² = 25·2 = 50.",
        "Doğru cevap C’dir."
      ],
      "takeaway": "Kare döndürülmüşse alanı bulmak için kenar veya köşegen ilişkisini yakala; alan kenarın karesidir."
    },
    "34": {
      "skill": "Katlama ve alan izleme",
      "solution": [
        "Kağıt önce kısa kenara paralel, sonra uzun kenara paralel doğrular boyunca katlanıyor. Katlama sonrası bazı bölgeler tek kat, bazıları iki veya daha çok kat üst üste gelir.",
        "Son şekilde görülen a, b, c, d dikdörtgenleri başlangıçtaki kağıtta farklı sayıda eş bölgeyi temsil eder. Katlanan kısımları açarak sayarsak a bölgesi 1 kez, b bölgesi 2 kez, c bölgesi 4 kez, d bölgesi 2 kez yer kaplar.",
        "Başlangıç alanı bu kat sayılarının toplamıdır: a + 2b + 4c + 2d.",
        "Bu ifade D seçeneğidir."
      ],
      "takeaway": "Katlama sorusunda son şekli açıyormuş gibi düşün; her görünen parçanın başlangıçta kaç kopyası olduğunu say."
    },
    "35": {
      "skill": "Koordinat düzleminde uzaklık",
      "solution": [
        "Haritada her birim karenin alanı 1 km² olduğundan birim kenar 1 km’dir. O noktasındaki helikopterin 4 km uçacak yakıtı var; yani O’ya uzaklığı en fazla 4 km olan köylere ulaşabilir.",
        "Görselde köylerin O noktasına yatay-düşey uzaklıkları kareler sayılarak bulunur. Uzaklık için Pisagor kullanılır: √(yatay²+düşey²).",
        "Görselden O’ya uzaklıklar kare sayarak hesaplanır: A ≈ √5, B ≈ √10 ≈ 3,16 km, C ≈ √17 ≈ 4,12 km, D ≈ √5 ve E ≈ 2√2’dir.",
        "C köyü 4 km sınırını aştığı için ulaşılamaz. Ulaşılabilir köylerin en uzağı √10 ≈ 3,16 km ile B köyüdür. Cevap B’dir."
      ],
      "takeaway": "Kareli zeminde çapraz uzaklık için Pisagor uygula; sınır dışı kalanı eleyip kalanlar arasından en uzağı bul."
    },
    "36": {
      "skill": "Daire dilimi alanı",
      "solution": [
        "Silecek O merkezli olarak 1 ile 5 birim yarıçapları arasındaki halka bölgeyi temizliyor. 120° döndüğüne göre temizlenen alan, 120°’lik halka dilimidir.",
        "Halka dilimi alanı 120/360 · π(5²-1²) = 1/3 · π·24 = 8π olur.",
        "Bu alan camın alanının yarısıymış. Cam yarım daire olduğundan cam alanı πR²/2’dir. Bunun yarısı πR²/4 olur.",
        "πR²/4 = 8π → R²=32 → R=4√2. Cevap A’dır."
      ],
      "takeaway": "Halka alanında büyük daire alanından küçük daire alanını çıkar; sonra açı oranıyla çarp."
    },
    "37": {
      "skill": "Düzgün çokgen iç açısı",
      "solution": [
        "Düzgün dokuzgenin bir iç açısı (9-2)·180/9 = 140°’dir. Düzgün beşgenin bir iç açısı (5-2)·180/5 = 108°’dir.",
        "İki çokgen bir kenarı ortak paylaşıyor. Ortak kenarın uçlarında, çokgenlerin iç açıları ve mavi doğru parçasının oluşturduğu üçgenin açıları birbirini tamamlar.",
        "Ortak kenardaki uç noktada, dokuzgenin ve beşgenin iç açıları arasındaki fark 140° - 108° = 32°’dir. Bu fark, ortak kenardan çıkan iki komşu kenarın arasındaki açıdır.",
        "Bu iki kenar eşit uzunlukta olduğundan ikizkenar üçgen oluşur. Taban açıları (180° - 32°)/2 = 74° olur. x açısı, dokuzgenin köşesindeki mavi doğrunun yaptığı açıdır: 140° - 74° = 66°. Cevap B’dir."
      ],
      "takeaway": "Ortak kenar paylaşan çokgenlerde, kenarlar arası açı farkını hesapla ve ikizkenar üçgen kur."
    },
    "38": {
      "skill": "Koordinat uzaklığı ve ölçek",
      "solution": [
        "A(2,8) ile B(10,14) arasındaki koordinat uzaklığı √[(10-2)²+(14-8)²] = √(64+36)=10 birimdir. Harita bunu 6 km kabul ettiğine göre ölçek 1 birim = 0,6 km’dir.",
        "A(2,8) ile C(7,20) arasındaki koordinat uzaklığı √[(7-2)²+(20-8)²] = √(25+144)=13 birimdir.",
        "13 birimlik uzaklık 13·0,6 = 7,8 km olur.",
        "Cevap A’dır."
      ],
      "takeaway": "Ölçek sorusunda önce koordinat düzlemindeki birim uzaklığı, sonra km karşılığını oranla bul."
    },
    "39": {
      "skill": "Prizma yüzey alanı denklemleri",
      "solution": [
        "Prizmanın toplam yüzey alanı S olsun. Kırmızı boyalı yüzün alanı R, mavi yüzün alanı M, sarı yüzün alanı Y olsun.",
        "Kırmızı hariç yüzlerin toplamı 82 olduğundan S-R=82. Mavi hariç S-M=79. Sarı hariç S-Y=74.",
        "Bu üç boyalı yüz dikdörtgenler prizmasında birbirine komşu üç farklı yüz olarak düşünüldüğünde toplam yüzey alanı S = 2(R+M+Y) olur. Denklemleri toplarsak 3S-(R+M+Y)=82+79+74=235. R+M+Y=S/2 olduğundan 3S-S/2=235 → 5S/2=235 → S=94.",
        "Cevap C’dir."
      ],
      "takeaway": "Dikdörtgenler prizmasında toplam yüzey alanı, birbirine komşu üç farklı yüz alanının iki katıdır."
    },
    "40": {
      "skill": "Silindir hacmi ve oran",
      "solution": [
        "İç silindirin yarıçapı r, dış silindirin yarıçapı R olsun. Musluklar birim zamanda aynı hacimde su doldurduğu için kapatıldıkları anda iç silindire ve halka bölgeye giren su hacimleri eşittir.",
        "İç silindir tamamen dolduğunda içteki su hacmi πr²h olur. Halka bölgedeki su yüksekliği h/4’tür, çünkü içteki su yüksekliği halka bölgedeki su yüksekliğinin 4 katıdır.",
        "Halka hacmi π(R²-r²)·(h/4) olur. Hacimler eşit: πr²h = π(R²-r²)h/4. Buradan 4r² = R² - r², yani R²=5r² bulunur.",
        "R/r=√5 olur. Cevap B’dir."
      ],
      "takeaway": "Eş debili musluklar eş sürede eş hacim doldurur; hacimleri eşitleyip yarıçap oranını bul."
    }
  },
  "fen": {
    "1": {
      "skill": "Bilimsel yöntem basamaklarını tanıma",
      "solution": [
        "Bilimsel bilgi tek bir yolla değil, birbirini tamamlayan yollarla oluşturulur. Deney kontrollü koşullarda sınama yapmayı sağlar.",
        "Gözlem, doğadaki olayları dikkatli biçimde izleyip veri toplamaktır. Akıl yürütme ise toplanan verilerden sonuç çıkarma ve açıklama kurma sürecidir.",
        "Bu üç eylem de bilimsel bilgiye ulaşmada kullanılabilir.",
        "Doğru cevap E, yani I, II ve III’tür."
      ],
      "takeaway": "Bilimde deney, gözlem ve akıl yürütme birlikte kullanılır; biri diğerini tamamen dışlamaz."
    },
    "2": {
      "skill": "Yol-zaman verisinden sürat bulma",
      "solution": [
        "Tabloda yol değerleri 0, 5, 10, 15, 20 metre; zaman değerleri 0, 1, 2, 3, 4 saniyedir. Her 1 saniyede yol 5 metre artıyor.",
        "Sürat, alınan yolun zamana oranıdır. Burada her aralıkta sürat 5 m/s sabittir.",
        "Sürat-zaman grafiği zaman boyunca 5 değerinde yatay doğru olmalıdır.",
        "Bu grafik C seçeneğidir."
      ],
      "takeaway": "Yol eşit zaman aralıklarında eşit artıyorsa sürat sabittir."
    },
    "3": {
      "skill": "Taşırma kabı ve kaldırma kuvveti",
      "solution": [
        "Taşırma kabında taşan su hacmi, cismin su içinde yer değiştirdiği su hacmini gösterir. K ve L eşit hacimde su taşırdığına göre su tarafından uygulanan kaldırma kuvvetleri eşittir; çünkü F_kaldırma = taşan sıvının ağırlığıdır.",
        "Ancak cisimlerin toplam hacimleri kesinlikle eşit olmak zorunda değildir. Biri tamamen batmış, diğeri kısmen batmış olabilir; yalnız yer değiştirdikleri su hacmi eşittir.",
        "Özkütleleri de kesin bilinemez; aynı taşan hacim farklı kütle ve özkütleli cisimlerle oluşabilir.",
        "Bu yüzden yalnız I kesin doğrudur. Cevap A’dır."
      ],
      "takeaway": "Taşırma kabında kesin bilgi taşan sıvı hacmi ve buna bağlı kaldırma kuvvetidir; cismin özkütlesi doğrudan bilinmez."
    },
    "4": {
      "skill": "Öz ısı ve ısı sığası",
      "solution": [
        "Deniz suyu homojen olduğundan kovaya alınan su ile denizdeki su aynı maddedir. Aynı maddenin öz ısısı aynıdır; I doğru.",
        "Isı sığası madde miktarına bağlıdır. Kuvadaki su miktarı denizdeki su miktarından çok küçük olduğundan ısı sığaları eşit değildir; II yanlıştır.",
        "Hava deniz suyundan sıcak olduğunda, az miktardaki kovadaki su çevreyle daha hızlı ısı alışverişi yapar ve sıcaklığı denize göre daha fazla artar; III doğru.",
        "Doğru cevap D, yani I ve III’tür."
      ],
      "takeaway": "Öz ısı madde cinsine bağlıdır; ısı sığası hem madde cinsine hem miktara bağlıdır."
    },
    "5": {
      "skill": "Elektrik yükleri ve etkileşim",
      "solution": [
        "K ve L birbirini itiyor. İtme olması için iki iletken kürenin yük cinsleri aynı olmalıdır; ikisi de pozitif ya da ikisi de negatif olabilir.",
        "L ve M birbirini çekiyor. Nötr olmadıkları söylendiğine göre çekme için yük cinsleri zıt olmalıdır.",
        "Seçenekleri kontrol edince K ve L’nin aynı, M’nin L’ye zıt olduğu tek uygun seçenek K negatif, L negatif, M pozitiftir.",
        "Bu nedenle cevap D’dir."
      ],
      "takeaway": "Aynı cins yükler iter, zıt cins yükler çeker; nötr olmadığı belirtilmişse indüklenme ihtimalini düşünme."
    },
    "6": {
      "skill": "Aydınlanma kavramları",
      "solution": [
        "Işık şiddeti kaynağın kendi özelliğidir; uzaklığa bağlı olarak değişmez. Toplam ışık akısı da kaynağın yaydığı toplam ışık miktarıdır, uzaklık arttı diye kaynak daha az ışık yaymış olmaz.",
        "Aydınlanma şiddeti ise birim yüzeye düşen ışık akısıdır. Kaynaktan uzaklaştıkça aynı ışık daha geniş alana yayılır ve aydınlanma azalır.",
        "Bu yüzden uzaklığa bağlı değişen yalnız III’tür.",
        "Cevap B’dir."
      ],
      "takeaway": "Uzaklıkla değişen büyüklük aydınlanma şiddetidir; kaynak şiddeti ve toplam akı kaynak özelliğidir."
    },
    "7": {
      "skill": "Kırılma ve ortam yoğunluğu",
      "solution": [
        "Şekil I ve II, ışığın K’den L’ye ve K’den M’ye geçerken normale göre nasıl kırıldığını gösterir. Işık daha yoğun ortama geçerken normale yaklaşır, daha az yoğun ortama geçerken normalden uzaklaşır.",
        "Şekil I’de ışık K ortamından L ortamına geçerken normal çizgisine göre yön değiştiriyor. Işın normale yaklaşırsa girdiği ortam daha yoğun, normalden uzaklaşırsa girdiği ortam daha az yoğundur. Aynı kural Şekil II’de K’den M’ye geçiş için de uygulanır.",
        "Bu iki şekli birlikte okuyunca L ve M ortamlarının K’ye göre optik yoğunluk sırası anlaşılır. L’den M’ye geçişte ışının kırılma yönü de bu sıraya uygun olmalıdır; ışık daha yoğun ortama geçiyorsa normale yaklaşır, daha az yoğun ortama geçiyorsa normalden uzaklaşır.",
        "Seçeneklerdeki yollar bu kuralla karşılaştırıldığında II, III ve IV mümkündür. I numaralı yol, ortamların şekillerden bulunan yoğunluk ilişkisine ters yönde kırılma gösterdiği için mümkün değildir.",
        "Bu nedenle cevap E’dir."
      ],
      "takeaway": "Kırılmada ışık yoğun ortama geçerse normale yaklaşır, az yoğun ortama geçerse normalden uzaklaşır."
    },
    "8": {
      "skill": "Dalton atom kuramı ve temel yasalar",
      "solution": [
        "Dalton Atom Kuramı, maddelerin atomlardan oluştuğunu ve atomların belirli oranlarda birleştiğini açıklar. Bu yaklaşım kütlenin korunumu, sabit oranlar ve katlı oranlar kanunlarını destekler.",
        "Kütlenin korunumu, tepkimede atomların yoktan var olmaması veya yok olmamasıyla açıklanır. Sabit oranlar, bir bileşiğin atomlarının belirli oranlarda birleşmesiyle ilgilidir.",
        "Katlı oranlar da aynı elementlerin farklı bileşiklerinde küçük tam sayılı oranlarla birleşmesi düşüncesine dayanır.",
        "Bu yüzden I, II ve III doğrudur. Cevap E’dir."
      ],
      "takeaway": "Dalton kuramı atomların korunması ve belirli oranlarda birleşmesi fikriyle üç temel kimya yasasını açıklar."
    },
    "9": {
      "skill": "Periyodik özellikler",
      "solution": [
        "Be, C ve F aynı periyotta soldan sağa doğru yer alır: Be, C, F. Aynı periyotta sağa gidildikçe atom yarıçapı küçülür, iyonlaşma enerjisi ve elektronegatiflik genel olarak artar.",
        "Bu yüzden atom yarıçapı en büyük olan Be’dir. C seçeneği doğrudur.",
        "C metal değildir; F’nin iyonlaşma enerjisi en küçük değil en büyüktür. Be’nin elektron alma eğilimi C’den fazla değildir. C’nin elektronegatifliği de F’den büyük değildir.",
        "Doğru cevap C’dir."
      ],
      "takeaway": "Aynı periyotta soldan sağa atom yarıçapı azalır; elektronegatiflik ve iyonlaşma enerjisi artar."
    },
    "10": {
      "skill": "Kimyasal bağ türleri",
      "solution": [
        "NaCl, metal olan Na ile ametal olan Cl arasında oluşur; elektron alışverişiyle iyonik bağ yapar.",
        "HCl iki ametal arasında kovalent bağdır; H ve Cl elektronegatiflikleri farklı olduğu için bağ polardır.",
        "Cl2 aynı iki Cl atomundan oluşur. Elektronegatiflik farkı sıfır olduğu için apolar kovalent bağdır.",
        "Sıralama iyonik, polar kovalent, apolar kovalenttir. Cevap A’dır."
      ],
      "takeaway": "Metal-ametal genellikle iyonik; aynı ametaller apolar kovalent; farklı ametaller çoğunlukla polar kovalenttir."
    },
    "11": {
      "skill": "Buhar basıncı ve kaynama",
      "solution": [
        "Aynı sıcaklıkta buhar basıncı büyük olan sıvı daha uçucudur ve genellikle kaynama sıcaklığı daha düşüktür. Bu nedenle I yanlıştır.",
        "Ağzı açık kapta sıvı, buhar basıncı dış basınca yani atmosfer basıncına eşit olduğunda kaynar. II doğrudur.",
        "Sıcaklık arttıkça taneciklerin kinetik enerjisi artar ve sıvının buhar basıncı yükselir. III doğrudur.",
        "Doğru cevap D, yani II ve III’tür."
      ],
      "takeaway": "Buhar basıncı yüksekse sıvı daha kolay buharlaşır; kaynama noktası daha düşüktür."
    },
    "12": {
      "skill": "Mürekkep bileşenleri",
      "solution": [
        "Mürekkepler renk vermek için pigment veya boya içerir; I doğrudur.",
        "Kolay kuruma için suya göre daha uçucu organik çözücüler kullanılabilir; çözücü hızlı uzaklaşırsa mürekkep daha çabuk kurur. II doğrudur.",
        "Mürekkebin uygulandığı yüzeye tutunması için bağlayıcı maddeler kullanılır; III de doğrudur.",
        "Bu nedenle I, II ve III doğru; cevap E’dir."
      ],
      "takeaway": "Mürekkep; renklendirici, çözücü ve bağlayıcı bileşenleriyle düşünülür."
    },
    "13": {
      "skill": "Benzer benzeri çözer",
      "solution": [
        "Su polar bir moleküldür. Etanol de polar olduğu için suyla homojen karışım oluşturabilir.",
        "Karbon tetraklorür ve heksan apolar moleküllerdir. Polar su ile apolar maddeler genel olarak homojen karışmaz; ayrı faz oluşturur.",
        "Bu yüzden yalnız I. kapta, yani etanol-su karışımında homojen karışım oluşur.",
        "Cevap A’dır."
      ],
      "takeaway": "Çözünmede “benzer benzeri çözer”: polar polarla, apolar apolarla iyi karışır."
    },
    "14": {
      "skill": "Organik bileşik sınıflandırma",
      "solution": [
        "I. bileşik yapısında C=C çift bağı içerdiği için alkendir; bu eşleştirme doğrudur.",
        "II. bileşik H–C≡C–CH3 yapısında üçlü bağ içerir; bu bir alkindir, alkol değildir. Alkol olması için -OH grubu bulunmalıdır.",
        "III. bileşik yalnız tekli bağlardan oluşan hidrokarbon yapısındadır; alkan olarak sınıflandırılır. Bu yüzden I ve III doğrudur.",
        "Cevap D’dir."
      ],
      "takeaway": "Alken C=C, alkin C≡C, alkol -OH grubu, alkan ise tekli bağ içerir."
    },
    "15": {
      "skill": "Bilimsel araştırma basamakları",
      "solution": [
        "Öğrenciler başlangıçta “ışık filizlenmeyi olumlu etkiler” diyerek hipotez kurmuşlardır. Işık alan ve karanlık ortamı karşılaştırarak kontrollü deney yapmışlardır.",
        "Göz bölgelerini ve filizleri sayarak gözlem/veri toplama yapmışlar, sonuçlara göre ışığın etkilediği çıkarımına ulaşmışlardır.",
        "Ancak teori oluşturma çok sayıda kanıtla desteklenmiş geniş açıklama düzeyidir. Bu küçük proje çalışmasında teori oluşturulmaz.",
        "Bu nedenle yer almayan basamak C’dir."
      ],
      "takeaway": "Hipotez deneyle sınanır; teori ise tek bir sınıf deneyinden çok daha kapsamlı bilimsel açıklamadır."
    },
    "16": {
      "skill": "Hücre zarında taşıma çeşitleri",
      "solution": [
        "Şekilde iki farklı taşıma olayında da maddelerin zar proteinleri yardımıyla geçtiği görülür. Bu nedenle II her ikisi için ortaktır.",
        "Birinde madde derişim farkına göre kendiliğinden geçerken diğerinde enerji kullanılarak geçiş olabilir; bu yüzden I ve III ikisi için birden ortak değildir.",
        "Her iki şekilde ortak olan tek özellik zar proteinlerinin işlev görmesidir.",
        "Cevap B’dir."
      ],
      "takeaway": "Kolaylaştırılmış difüzyon ve aktif taşıma zar proteini kullanabilir; enerji harcama sadece aktif taşımada vardır."
    },
    "17": {
      "skill": "Kuşların ayırt edici özelliği",
      "solution": [
        "Uçma yeteneği kuşlara özgü değildir; yarasa ve bazı böcekler de uçar. Kanat da yalnız kuşlarda bulunmaz.",
        "Yumurtlama sürüngenlerde, balıklarda ve birçok canlıda görülür. Sabit vücut sıcaklığı memelilerde de vardır.",
        "Kuşları diğer omurgalılardan ayıran en belirgin özellik vücutlarında tüy bulunmasıdır.",
        "Doğru cevap E’dir."
      ],
      "takeaway": "Kuşlar için ayırt edici özellik tüy bulundurmaktır; uçma tek başına kanıt değildir."
    },
    "18": {
      "skill": "Mitoz ve bitki hücresinde sitokinez",
      "solution": [
        "Soğan kökü hücreleri bitki hücreleridir ve mitoz bölünme geçirir. Mitozda çekirdek zarı parçalanır, kromatin iplikler kısalıp kalınlaşarak kromozom olur, iğ iplikleri oluşur ve kromatitler kutuplara çekilir.",
        "Hayvan hücrelerinde sitokinez boğumlanmayla gerçekleşir. Bitki hücrelerinde hücre duvarı nedeniyle boğumlanma olmaz; ara lamel/hücre plağı oluşur.",
        "Bu yüzden soğan kökü hücrelerinde karşılaşılmayacak olay boğumlanmayla sitokinezdir.",
        "Cevap E’dir."
      ],
      "takeaway": "Bitki hücrelerinde sitokinez boğumlanma ile değil, hücre plağı oluşumu ile gerçekleşir."
    },
    "19": {
      "skill": "X’e bağlı kalıtım",
      "solution": [
        "Göz rengi geni X kromozomundadır. F1’de hem kırmızı hem beyaz gözlü erkek ve dişilerin çıkması, başlangıçtaki dişinin taşıyıcı/uygun genotipte olduğunu gösterir.",
        "F1’de beyaz erkek ve beyaz dişi oranlarının yaklaşık eşit olması verilen çaprazlama sonucuyla uyumludur; I doğrudur.",
        "F1’den alınan kırmızı erkek ve kırmızı dişi çaprazlanınca kırmızı dişi taşıyıcı olabilir; bu durumda F2’de beyaz gözlü bireyler ortaya çıkabilir. Bu nedenle II yanlıştır.",
        "Gen X kromozomunda olduğu için F2’de fenotip oranları cinsiyetlere göre farklılık gösterebilir; III doğrudur. Cevap D’dir."
      ],
      "takeaway": "X’e bağlı kalıtımda erkekler tek X taşıdığı için fenotip oranları cinsiyetlere göre farklılaşabilir."
    },
    "20": {
      "skill": "Biyom özelliklerini değerlendirme",
      "solution": [
        "Tropikal yağmur ormanlarında yıllık sıcaklık ve yağış yüksektir; ağaç türleri çok zengindir. Dikey tabakalaşma belirgindir ve orman içinde farklı katmanlarda mikroklima oluşur.",
        "Bu kadar yoğun bitki örtüsünde ışık alt katmanlara zor ulaşır. Bu nedenle bitkiler arasında ışık için rekabet oldukça şiddetlidir.",
        "E seçeneği rekabetin şiddetli olmadığını söylediği için yanlıştır.",
        "Doğru cevap E’dir."
      ],
      "takeaway": "Tropikal yağmur ormanları gür ve katmanlıdır; bu yüzden ışık için rekabet fazladır."
    }
  }
};

function makeGeneratedSolution(sectionId, questionNumber, sectionConfig, topic, answer) {
  const detailed = detailedGeneratedSolutions[sectionId]?.[questionNumber];
  if (detailed) return detailed.solution;
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
      skill: detailedGeneratedSolutions[sectionId]?.[id]?.skill || config.skill,
      summary: `${config.label} ${id}. soru: ${topic} kazanımını ölçer.`,
      solution: makeGeneratedSolution(sectionId, id, config, topic, answer),
      takeaway: detailedGeneratedSolutions[sectionId]?.[id]?.takeaway || "Önce kendi cevabını işaretle; çözümü yalnızca denemeden sonra açarak kalıcı öğrenme sağlamaya çalış."
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
  return `assets/questions/${question.imageDir}/q${String(question.id).padStart(2, "0")}.png?v=20260505-turkce-shared`;
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

function getBeginnerConceptNote(question) {
  const topic = question.topic.toLocaleLowerCase("tr");
  if (question.sectionId === "turkce") {
    if (topic.includes("sözcük")) return "Sözcükte anlam sorularında kelimeyi tek başına değil, cümlede çevresindeki kelimelerle birlikte düşünürüz. Kelimenin gerçek, mecaz ya da bağlam anlamı bu çevreden anlaşılır.";
    if (topic.includes("cümle")) return "Cümle sorularında önce yargının ne söylediğini sadeleştiririz. Öznel-nesnel, sebep-sonuç, yakın anlam veya öge soruluyorsa her seçeneği kanıtlanabilir bilgi ve cümledeki görev açısından kontrol ederiz.";
    if (topic.includes("ses")) return "Ses bilgisi sorularında kelimenin kökünü ve aldığı eki ayırırız. Ünlü düşmesi, yumuşama veya benzeşme gibi olaylar ancak kökte/ekte gerçek bir ses değişimi varsa kabul edilir.";
    if (topic.includes("paragraf")) return "Paragraf sorularında önce ana düşünceyi, sonra yardımcı düşünceleri buluruz. Metinde açıkça söylenmeyen veya metnin anlamını büyüten seçenek doğru kabul edilmez.";
    if (topic.includes("noktalama") || topic.includes("yazım")) return "Yazım ve noktalama sorularında kuralı ezber gibi değil, cümledeki göreve bağlarız. Virgül, nokta, kesme veya büyük harf hangi görev için kullanılmışsa seçenek onunla karşılaştırılır.";
    return "Türkçe sorularında temel yöntem şudur: soru kökünün ne istediğini bul, parçada verilen ifadeyi sadeleştir, sonra seçenekleri metne göre tek tek ele.";
  }
  if (question.sectionId === "sosyal") {
    if (topic.includes("tarih")) return "Tarih sorularında bildiğimiz genel tarih bilgisini hemen kullanmayız; önce görseldeki/parçadaki olay, kişi, kurum veya harita ne söylüyor onu ayırırız. Soru “bu bilgiye göre” diyorsa yalnız verilen bilgiyle hareket ederiz.";
    if (topic.includes("coğrafya")) return "Coğrafyada harita, grafik ve tablolar veri kaynağıdır. Renk, yön, konum, sıcaklık-yağış değeri veya dağılış bilgisi ne gösteriyorsa cevap o veriden çıkarılır.";
    if (topic.includes("felsefe")) return "Felsefe sorularında önce parçada savunulan ana düşünce bulunur. Filozof adı veya kavram geçse bile cevap, parçanın hangi problemi ya da görüşü anlattığına göre seçilir.";
    if (topic.includes("din")) return "Din Kültürü sorularında ayet, hadis veya açıklamadaki ana mesajı buluruz. Kavram soruluyorsa kavramın günlük anlamını değil, metindeki kullanımını esas alırız.";
    return "Sosyal Bilimler sorularında metin/harita/grafik ne veriyorsa onu merkeze al; seçeneklerde verilen bilgiyi bu kanıta bağlayamıyorsan ele.";
  }
  if (question.sectionId === "matematik") {
    if (topic.includes("geometri") || topic.includes("üçgen") || topic.includes("çember") || topic.includes("alan") || topic.includes("katı") || topic.includes("analitik")) return "Geometri sorularında şekle bakıp verilen uzunluk, açı, paralellik ve alan bilgilerini tek tek işaretleriz. Sonra bilinen temel kuralları kullanırız: üçgende iç açı toplamı 180°, dörtgen/çember/alan bağıntıları ve Pisagor gibi.";
    if (topic.includes("grafik") || topic.includes("tablo") || topic.includes("fonksiyon")) return "Grafik ve tablo sorularında önce eksenlerin veya sütunların neyi gösterdiğini okuruz. Sayıları doğrudan almak yerine oran, artış, eğim veya karşılaştırma istenip istenmediğini belirleriz.";
    if (topic.includes("oran") || topic.includes("yüzde") || topic.includes("problem") || topic.includes("yaş") || topic.includes("hız") || topic.includes("iş")) return "Problem sorularında bilinmeyene bir harf verip verilenleri küçük denklemlere çeviririz. Yüzde için kalan oranı, oran için birim miktarı, yaş için toplam ya da farkı takip ederiz.";
    if (topic.includes("küm")) return "Küme sorularında önce her kümenin neyi temsil ettiğini yazarız. Kesişim “ikisini de sağlayan”, birleşim “en az birini sağlayan”, fark ise “birinde olup diğerinde olmayan” demektir.";
    return "Matematikte en güvenli yöntem, görseldeki/verilen metindeki her sayıyı neyi temsil ettiğini yazarak kullanmaktır. İşlemi ezbere değil, sorunun istediği büyüklüğe göre kurarız.";
  }
  if (question.sectionId === "fen") {
    if (topic.includes("fizik")) return "Fizikte önce sistemdeki büyüklükleri ayırırız: kuvvet, hız, ışık, sıcaklık veya elektrik yükü gibi. Şekil/grafik varsa hangi değişken artıyor, hangisi sabit kalıyor diye okuruz.";
    if (topic.includes("kimya")) return "Kimyada madde türü, bağ, karışım veya tanecik düzeyi önemlidir. Elementlerin metal-ametal oluşu, polar-apolar yapı veya sıcaklık-basınç ilişkisi seçenekleri elemek için kullanılır.";
    if (topic.includes("biyoloji")) return "Biyolojide yapı-görev ilişkisiyle düşünürüz. Hücre, canlı sınıflandırması, kalıtım veya ekoloji sorusunda verilen örneğin hangi temel canlılık kuralına uyduğunu buluruz.";
    return "Fen sorularında kavramı ezberden seçmek yerine deney, şekil veya örnekte ne değiştiğini ve hangi sonucun gözlendiğini belirleriz.";
  }
  return "Önce soru görselini dikkatle oku, sonra verilenleri ve isteneni ayır.";
}

function getBeginnerReadingNote(question) {
  if (question.sectionId === "turkce") {
    return `Görseldeki ${question.id}. soruda önce soru kökünü oku: senden ${question.summary.toLocaleLowerCase("tr")} isteniyor. Bu yüzden seçeneklere geçmeden önce parçada hangi kelime, cümle ya da numaralı ifade sorulmuş onu işaretle.`;
  }
  if (question.sectionId === "sosyal") {
    return `Görseldeki Sosyal Bilimler ${question.id}. sorusunda konu ${question.topic}. Metin, harita, grafik veya ayet varsa onu “kanıt” gibi oku; seçeneklerden hangisi bu kanıta dayanıyorsa o doğruya yaklaşır.`;
  }
  if (question.sectionId === "matematik") {
    return `Görseldeki Matematik ${question.id}. sorusunda önce şekil, tablo, grafik veya metindeki sayıları neyi anlattıklarıyla birlikte yaz. Sonra “benden ne istiyor?” sorusunu cevapla; işlem ancak bundan sonra kurulmalı.`;
  }
  if (question.sectionId === "fen") {
    return `Görseldeki Fen Bilimleri ${question.id}. sorusunda önce deney/şekil/grafik veya verilen öncülleri oku. Hangi kavram soruluyor, hangi bilgiler kesin verilmiş, hangileri yorum gerektiriyor diye ayır.`;
  }
  return `Görseldeki ${question.id}. soruyu önce soru kökü ve verilenler olarak ikiye ayır.`;
}

function getBeginnerEliminationNote(question) {
  if (question.sectionId === "turkce") {
    return "Seçenek elerken şunu yap: metinde açık dayanağı olmayan, anlamı abartan, eksik bırakan veya başka bir dil bilgisi kuralını anlatan seçeneği sil. Türkçe sorularında doğru cevap genellikle metindeki ifadeyle birebir uyumlu olandır.";
  }
  if (question.sectionId === "sosyal") {
    return "Seçenekleri elerken “bunu görseldeki/parçadaki bilgi gerçekten söylüyor mu?” diye sor. Söylemiyorsa, sen dışarıdan biliyor olsan bile bu soru için kullanma.";
  }
  if (question.sectionId === "matematik") {
    return "Seçenek kontrolünde bulduğun sayıyı, aralığı veya ifadeyi seçeneklerle karşılaştır. Eğer işlem sonucu seçeneklerde yoksa genellikle verilenlerden birinin anlamı yanlış çevrilmiştir; başa dönüp birimleri ve koşulları kontrol et.";
  }
  if (question.sectionId === "fen") {
    return "Fen seçeneklerinde kesinlik önemlidir. Deney veya şekil yalnız bir değişken hakkında bilgi veriyorsa, başka bir büyüklük için kesin yargı kuran seçenek elenir.";
  }
  return "Seçenekleri verilen bilgiye göre tek tek kontrol et.";
}

function getBeginnerSolution(question) {
  return [
    getBeginnerReadingNote(question),
    `Bu soruyu çözmek için gereken temel bilgi: ${getBeginnerConceptNote(question)}`,
    ...question.solution,
    getBeginnerEliminationNote(question),
    `Son kontrol: doğru cevap ${question.answer}. Çözümü bitirince görseldeki soru köküne geri dön ve cevabın gerçekten sorulan şeye cevap verdiğini kontrol et; böyle yaparsan aynı konu başka şekilde sorulduğunda da çözebilirsin.`
  ];
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
    <h3>Görsele göre sıfırdan adım adım çözüm</h3>
    <ol>${getBeginnerSolution(question).map((step) => `<li>${step}</li>`).join("")}</ol>
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
