# CSS Kararları

Bu dosya, portfolyo projesinde aldığım CSS tasarım kararlarını ve bunların arkasındaki mantığı açıklamaktadır.

## 1. Breakpoint Seçimi

**Neden 640px ve 1024px seçtim?**
640px (tablet) breakpoint'ini seçtim çünkü bu noktada içerik tek kolondan iki kolona geçiş yapması gerekiyordu ve çoğu tablet cihaz bu genişlik aralığında bulunuyor. 1024px (desktop) breakpoint'i ise içeriğin maksimum genişliğe ulaştığı ve üç kolonlu grid düzenine geçtiği noktadır - bu genişlik modern laptop ekranlarında rahat okunabilirlik sağlar.

**İçeriğim bu noktalarda nasıl değişiyor?**
640px'de about bölümündeki profil görseli ve metin yan yana dizilir (flexbox row), navigation öğeleri daha geniş aralıklarla yerleşir ve genel padding değerleri artar. 1024px'de ise container max-width (1200px) devreye girer, education bölümü üç kolonlu grid'e dönüşür ve tüm bölümlerde daha cömert spacing uygulanır.

## 2. Layout Tercihleri

**Header için neden Flexbox seçtim?**
Header için Flexbox kullandım çünkü başlık ve navigasyon menüsünü yatay eksende hizalamak ve aralarındaki boşluğu `justify-content: space-between` ile otomatik dağıtmak idealdir. Flexbox tek boyutlu layout'lar için mükemmeldir ve header gibi basit ama esnek hizalama gerektiren bileşenlerde CSS Grid'e göre daha az kod ve daha iyi performans sunar.

**Proje kartları için neden Grid seçtim?**
Proje kartları için CSS Grid tercih ettim çünkü birden fazla öğeyi iki boyutlu düzende (satır ve sütun) yerleştirmeye ihtiyacım vardı. Grid'in `auto-fit` özelliği sayesinde ekran genişliğine göre kart sayısı otomatik olarak ayarlanıyor - bu responsive tasarım için media query'lere olan ihtiyacı azaltır.

**auto-fit mi auto-fill mi kullandım, neden?**
`auto-fit` kullandım: `repeat(auto-fit, minmax(280px, 1fr))`. Auto-fit, mevcut kartları genişleterek boş alanı doldurur - yani 3 kartım varsa ve ekran 4 kart sığdırabilecek kadar genişse, kartlar büyüyerek boşluğu kaplar. Auto-fill ise boş grid hücreleri bırakırdı. Projemde içeriğin her zaman tam genişliği doldurmasını istediğim için auto-fit daha uygundu.

## 3. Design Tokens

**Hangi renk paletini seçtim ve neden?**
Modern ve profesyonel bir görünüm için mavi-gri bir renk paleti seçtim: koyu arka plan (#1a1a1a), mavi vurgu rengi (#3b82f6), ve çeşitli gri tonları. Bu palet göz yormayan dark mode estetiği sunarken, mavi vurgu rengi interaktif öğeleri (linkler, butonlar) net bir şekilde ayırt edilebilir kılıyor. Kontrast oranları WCAG erişebilirlik standartlarına uygun.

**Spacing skalasını nasıl belirledim?**
8px temelli bir spacing skalası oluşturdum (xs:4px, sm:8px, md:16px, lg:24px, xl:32px, 2xl:48px, 3xl:64px). Bu matematiksel tutarlılık görsel ritim ve hiyerarşi sağlar - küçük elemanlar arası boşluklar 8px, section boşlukları 48-64px gibi. 8'in katları kullanmak tasarımın okunabilirliğini artırır ve kod yazarken karar yorgunluğunu azaltır.

**Fluid typography için clamp değerlerini nasıl ayarladım?**
Her başlık seviyesi için `clamp(min, ideal, max)` fonksiyonunu kullandım - örneğin h1: `clamp(2rem, 5vw, 3.5rem)`. Minimum değerler mobil cihazlarda okunabilirliği garanti eder (2rem), viewport-bazlı orta değer (5vw) ekran genişliği arttıkça yazının büyümesini sağlar, maksimum değer (3.5rem) ise çok geniş ekranlarda yazının aşırı büyümesini önler. Bu sayede media query'siz responsive tipografi elde ediyorum.

## 4. Responsive Stratejiler

**Mobile-first yaklaşımını nasıl uyguladım?**
Tüm base stilleri mobil cihazlar için yazdım (0-639px), sonra tablet (@media min-width: 640px) ve desktop (@media min-width: 1024px) için progressive enhancement uyguladım. Bu yaklaşım kod verimliliği sağlar çünkü mobil CSS tüm cihazlara yüklenir, daha büyük ekranlar sadece ek stilleri override eder. Ayrıca mobil performansı önceliklendirerek sayfa yükleme hızını optimize eder.

**Hangi elemanlar breakpoint'lerde değişiyor?**
640px breakpoint'inde: about-content flex-direction column'dan row'a geçiyor, navigation gap artıyor (16px → 24px), section padding büyüyor. 1024px'de: container max-width (1200px) aktif oluyor, education-info grid-template-columns 3 kolona çıkıyor (repeat(3, 1fr)), tüm section padding'ler maximum değere ulaşıyor (64px).

**Görsel boyutları nasıl yönettim?**
About bölümündeki profil görseli için percentage-bazlı genişlik kullandım: mobilde 100%, tablette 300px fixed genişlik. `object-fit: cover` ile görselin kesilmeden container'ı doldurmasını sağladım. Project card görselleri için `aspect-ratio: 16/9` kullanarak tutarlı boyutlar garantiledim. Tüm görsellere `max-width: 100%` ve `height: auto` ekleyerek responsive davranış kazandırdım.

---

**Son Notlar:**
- Design token sistemi (`tokens.css`) sayesinde tüm projede tutarlı değerler kullanıldı
- CSS Grid'in `auto-fit` + `minmax()` kombinasyonu sayesinde responsive layout için minimal media query gerekti
- Flexbox tek boyutlu layout'lar için (header, nav, card içerikleri), Grid iki boyutlu layout'lar için (proje grid, education grid) kullanıldı
- Fluid typography (`clamp()`) viewport genişliğine göre otomatik ölçeklenir
- Mobile-first metodolojisi ile kod daha temiz ve performanslı oldu
