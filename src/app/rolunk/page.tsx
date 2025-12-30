import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rólunk - Miért csináljuk?",
  description:
    "Ismerje meg a RónaRendelő történetét és küldetését. Szakorvosi ellátás nyugodt körülmények között, kiszámítható időpontokkal.",
};

export default function RolunkPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rólunk
          </h1>
          <div className="w-20 h-1 bg-rona-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Ismerd meg a RónaRendelő történetét
          </p>
        </div>

        {/* Miért csináljuk? */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-rona-700 mb-8">
            Miért csináljuk?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Orvosaink szinte kivétel nélkül a mindennapi betegellátásban
              dolgoznak, mind a szakmájuk, mind a betegek által elismerten.
              Sajnos a kórházi sikeresség automatikusan a betegforgalom
              megemelkedését, néha már a betegek által nehezen tolerálható
              várakozást jelenti. Ezen felül, a mindennapi munka melletti
              kórházi körülmények nem mindig alkalmasak a betegek egy részének
              sokat jelentő, kiszámítható vizsgálati idő tartására. A{" "}
              <strong>„RónaRendelő"-t</strong> évekkel ezelőtt azon
              megfontolások alapján hoztuk létre, hogy olyan betegeknek
              kínáljunk alternatívát, akiknek sokat számít a mielőbbi orvosi
              konzultáció, vagy munkájukból, elfoglaltságaikból adódóan fontos,
              hogy egy vizsgálat, kontrollvizsgálat miatt ne töltsenek
              felesleges időt a rendelő előtt várakozva. Hangsúlyozzuk, hogy
              Rendelőnk alapításának célja nem a beteg teljes kivezetése volt a
              közfinanszírozott ellátásból, hanem csak lehetőséget teremtett egy
              munkaidőhöz rugalmasabb konzultációhoz, ellátáshoz.
            </p>

            <div className="bg-rona-50 border-l-4 border-rona-600 p-6 rounded-r-lg my-8">
              <p className="leading-relaxed">
                Azonban az élet közbe szólt, a 2021.03.01.-től a{" "}
                <strong>
                  „528/2020. (XI. 28.) Korm. rendelet az egészségügyi szolgálati
                  jogviszonyról szóló 2020. évi C. törvény"
                </strong>{" "}
                miatt megváltozó jogszabályi háttér miatt, mely egyazon
                diagnózissal megszűntette az átjárhatóságot a magán és állami
                ellátás közt. Ez jogilag azt jelenti, hogy választott orvosa nem
                kezelheti ugyanazzal a betegséggel a magán, illetve a
                közfinanszírozott ellátásban.
              </p>
            </div>

            <p className="leading-relaxed">
              Szeretnénk azonban megnyugtatni Mindenkit, hogy a{" "}
              <strong>RónaRendelő</strong> ezután is a hozzánk forduló
              Betegeknek teljes körű ellátást kíván biztosítani, amennyiben
              lehetséges a Rendelő kereteken belül, de azon túl is.
            </p>

            <p className="leading-relaxed">
              Azon Betegeknek tudunk alternatívát biztosítani, akik
              magánbiztosításuknak, anyagi lehetőségüknek köszönhetően az
              azonnali, közfinanszírozáson kívüli magán ellátást kívánják
              igénybe venni, hiszen orvosaink több jóhírű Magánklinikával is
              szerződésben állnak.
            </p>

            <p className="leading-relaxed">
              Természetesen azokat a korábbi, ill. a jövőben Hozzánk forduló
              Betegeinknek, akik ezt anyagilag nem engedhetik meg maguknak, de a
              későbbiekben szükséges a kórházi kezelés, a jogszabályi keretek
              betartása mellett segítünk a számukra legoptimálisabb
              közfinanszírozott betegút, kezelőorvos kiválasztásban.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-14 h-14 bg-rona-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-rona-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Kiszámítható időpont
            </h3>
            <p className="text-gray-600 text-sm">
              Pontos időpontok, minimális várakozási idő
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-14 h-14 bg-rona-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-rona-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Elismert szakorvosok
            </h3>
            <p className="text-gray-600 text-sm">
              Kórházi tapasztalattal rendelkező specialisták
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-14 h-14 bg-rona-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-rona-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Teljes körű ellátás
            </h3>
            <p className="text-gray-600 text-sm">
              Segítünk a legoptimálisabb betegút kiválasztásában
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
