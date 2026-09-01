import fs from 'fs';
import path from 'path';

// Let's create an enrichment helper for all appliances and languages
// Each appliance gets 4-5 high intent SEO questions targeted for Google indexing

interface FaqItem {
  question: string;
  answer: string;
}

const applianceFaqTemplates: Record<string, Record<string, FaqItem[]>> = {
  kuehlschrank: {
    de: [
      { question: 'Wie viel Strom verbraucht ein Kühlschrank pro Tag und Jahr?', answer: 'Ein moderner Kühlschrank der Energieeffizienzklasse A bis C verbraucht ca. 0,3 bis 0,45 kWh pro Tag (ca. 100–160 kWh pro Jahr, ca. 35–56 € bei 35 ct/kWh). Ältere Geräte oder große Side-by-Side-Modelle verbrauchen 0,8 bis 1,2 kWh pro Tag (250–400 kWh/Jahr, 88–140 €).' },
      { question: 'Was kostet der Betrieb eines Kühlschranks im Monat?', answer: 'Bei einem durchschnittlichen Jahresverbrauch von 130 kWh und einem Strompreis von 35 ct/kWh kostet ein Kühlschrank rund 3,80 € im Monat. Ein altes Modell kann bis zu 10 € monatlich kosten.' },
      { question: 'Lohnt sich der Neukauf eines energieeffizienten Kühlschranks?', answer: 'Ja. Wenn dein aktueller Kühlschrank älter als 10–12 Jahre ist (über 250 kWh/Jahr), spart ein sparsames Neugerät der Klasse A oder B jährlich ca. 120–150 kWh ein. Das entspricht einer Ersparnis von 42 bis 55 € pro Jahr.' },
      { question: 'Welche Temperatureinstellung spart am meisten Strom beim Kühlschrank?', answer: 'Die ideale Temperatur beträgt 7 °C im oberen Fach des Kühlraums und -18 °C im Gefrierfach. Jedes Grad kälter erhöht den Stromverbrauch um etwa 6 %.' },
      { question: 'Wie viel Strom zieht ein Kühlschrank im Standby oder Dauerbetrieb?', answer: 'Kühlschränke sind 24 Stunden am Netz angeschlossen. Die durchschnittliche Dauerleistung liegt bei ca. 15–25 Watt, da der Kompressor nur circa 20–35 % der Zeit aktiv läuft.' }
    ],
    en: [
      { question: 'How much electricity does a refrigerator use per day and per year?', answer: 'A modern energy-efficient refrigerator (Class A-C) consumes around 0.3 to 0.45 kWh per day (100–160 kWh per year, costing approx. €35–€56 at €0.35/kWh). Older units or large side-by-side models can consume 0.8 to 1.2 kWh per day (250–400 kWh/year).' },
      { question: 'How much does it cost to run a refrigerator per month?', answer: 'With an average consumption of 130 kWh/year at 35 ct/kWh, running a refrigerator costs about €3.80 per month. Older, inefficient models can cost €9 to €12 per month.' },
      { question: 'Is it worth replacing an old refrigerator to save energy?', answer: 'Yes. Replacing a 10+ year old refrigerator consuming 300 kWh/year with a modern Class A model (100–120 kWh/year) saves around 180 kWh or €60+ every year on your electric bill.' },
      { question: 'What is the most energy-efficient temperature for a fridge?', answer: 'Setting the refrigerator temperature to 7°C (45°F) in the fridge and -18°C (0°F) in the freezer provides optimal food safety while minimizing power draw. Every degree lower increases energy consumption by roughly 6%.' },
      { question: 'Does a refrigerator run continuously all day?', answer: 'No. While plugged in 24/7, the compressor only cycles on for about 20 to 35 minutes per hour depending on room temperature, door openings, and frost build-up.' }
    ],
    es: [
      { question: '¿Cuánta electricidad consume un frigorífico al día y al año?', answer: 'Un frigorífico moderno y eficiente consume entre 0,3 y 0,45 kWh al día (100 a 160 kWh al año, equivalente a unos 35–56 € con una tarifa de 0,35 €/kWh). Los modelos antiguos o americanos tipo side-by-side consumen de 0,8 a 1,2 kWh diarios.' },
      { question: '¿Cuánto cuesta mantener encendido un frigorífico al mes?', answer: 'Con un consumo promedio de 130 kWh al año, un frigorífico moderno cuesta unos 3,80 € al mes. Los modelos de más de 10 años pueden llegar a costar entre 8 y 12 € mensuales.' },
      { question: '¿Conviene cambiar una nevera vieja por una nueva de bajo consumo?', answer: 'Sí. Sustituir un frigorífico antiguo de más de 10 años (consumo >280 kWh/año) por un modelo clase A o B (100–120 kWh/año) ahorra más de 50 € al año en la factura de la luz.' },
      { question: '¿Cuál es la temperatura ideal para ahorrar luz en el refrigerador?', answer: 'Se recomienda fijar la temperatura en 7 °C para la zona de refrigeración y -18 °C para el congelador. Cada grado más frío aumenta el gasto energético un 6 % aproximadamente.' },
      { question: '¿El compresor del frigorífico está encendido las 24 horas?', answer: 'No. Aunque esté conectado 24 horas al día, el compresor solo se activa de 20 a 35 minutos por hora según la temperatura ambiente y la frecuencia de apertura de la puerta.' }
    ],
    ja: [
      { question: '冷蔵庫の電気代は1日・1年間でいくら？', answer: '最新の省エネ冷蔵庫（クラスA相当）の消費電力量は1日あたり約0.3〜0.45 kWh、年間約100〜160 kWhです。電気料金単価35 ct/kWhで計算すると、年間電気代は約35〜56ユーロ（月額約3.80ユーロ）となります。10年以上前の旧型製品は年間250〜350 kWhを消費します。' },
      { question: '古い冷蔵庫を買い替えるとどれくらい電気代がお得になる？', answer: '10年以上前の冷蔵庫から最新の省エネモデルに買い換えると、年間で約120〜150 kWhの節電になり、年間約45〜60ユーロ以上の電気料金を削減できます。' },
      { question: '冷蔵庫の電気代を最も安く抑える設定温度は？', answer: '冷蔵室は「中」設定（約7℃）、冷凍室は-18℃が推奨されます。設定を1℃下げるごとに消費電力が約6％増加します。' },
      { question: '冷蔵庫は24時間常に全力で動いているの？', answer: 'いいえ。24時間通電されていますが、コンプレッサーは温度調節機能により1時間あたり約20〜35分間だけ間欠稼働します。' }
    ],
    fr: [
      { question: 'Quelle est la consommation électrique d\'un réfrigérateur par jour et par an ?', answer: 'Un réfrigérateur moderne (classe A à C) consomme environ 0,3 à 0,45 kWh par jour (soit 100 à 160 kWh par an, environ 35 à 56 € avec un tarif de 0,35 €/kWh). Les anciens modèles peuvent dépasser 300 kWh/an.' },
      { question: 'Combien coûte un réfrigérateur par mois en électricité ?', answer: 'Avec une consommation moyenne de 130 kWh/an, un réfrigérateur standard coûte environ 3,80 € par mois. Un appareil vétuste peut coûter plus de 9 € par mois.' },
      { question: 'Est-il rentable de remplacer un vieux frigo par un modèle récent ?', answer: 'Oui. Remplacer un frigo de plus de 10 ans par un modèle neuf très économe permet d\'économiser entre 40 et 60 € chaque année sur la facture d\'électricité.' },
      { question: 'Quelle température régler pour consommer le moins d\'électricité ?', answer: 'La température idéale est de 7 °C dans le compartiment réfrigérateur et de -18 °C dans le congélateur. Chaque degré supplémentaire de froid augmente la consommation de 6 %.' },
      { question: 'Le compresseur du réfrigérateur tourne-t-il en continu ?', answer: 'Non. Bien que branché 24h/24, le compresseur s\'allume seulement 20 à 35 minutes par heure selon l\'isolation et la température de la pièce.' }
    ],
    pt: [
      { question: 'Quanto gasta um frigorífico por dia e por ano em eletricidade?', answer: 'Um frigorífico moderno e eficiente consome cerca de 0,3 a 0,45 kWh por dia (100 a 160 kWh por ano, ou cerca de 35 a 56 € a 35 ct/kWh). Modelos antigos ultrapassam facilmente os 280 kWh/ano.' },
      { question: 'Quanto custa manter o frigorífico ligado por mês?', answer: 'Com um consumo médio de 130 kWh/ano, um frigorífico moderno custa cerca de 3,80 € por mês. Um aparelho com mais de 10 anos pode custar entre 8 e 12 € mensais.' },
      { question: 'Compensa trocar um frigorífico antigo por um modelo novo de classe A?', answer: 'Sim. A troca de um equipamento antigo (consumo >280 kWh/ano) por um novo de classe A/B gera uma poupança média de 45 a 60 € por ano na fatura de luz.' },
      { question: 'Qual a melhor temperatura para poupar energia no frigorífico?', answer: 'Recomenda-se 7 °C na zona de refrigeração e -18 °C no congelador. Cada grau mais frio aumenta o consumo energético em cerca de 6 %.' }
    ],
    ko: [
      { question: '냉장고의 하루 및 연간 전기 소비량과 요금은 얼마인가요?', answer: '최신 고효율 냉장고(에너지소비효율 1등급 기준)는 하루 약 0.3~0.45 kWh, 연간 약 100~160 kWh를 소비합니다. kWh당 35센트 기준 연간 약 35~56유로(월 약 3.80유로)가 발생합니다. 10년 이상 된 구형 모델은 연간 250~400 kWh를 사용합니다.' },
      { question: '오래된 냉장고를 교체하면 전기요금이 얼마나 절약되나요?', answer: '10년 이상 된 노후 냉장고를 최신 1등급 모델로 교체하면 연간 약 120~150 kWh를 절약할 수 있어 매년 45~60유로 이상의 전기요금을 아낄 수 있습니다.' },
      { question: '냉장고 전기요금을 아끼는 최적의 설정 온도는?', answer: '냉장실은 7°C(또는 중 설정), 냉동실은 -18°C가 적정합니다. 온도를 1도 더 낮출 때마다 전력 소비량이 약 6%씩 증가합니다.' },
      { question: '냉장고는 하루 24시간 내내 모터가 돌아가나요?', answer: '아닙니다. 전원은 24시간 켜져 있지만, 내부 온도 감지 센서에 의해 컴프레서는 1시간 중 약 20~35분 정도만 가동됩니다.' }
    ],
    it: [
      { question: 'Quanto consuma un frigorifero al giorno e all\'anno?', answer: 'Un frigorifero moderno di classe A–C consuma tra 0,3 e 0,45 kWh al giorno (100–160 kWh all\'anno, circa 35–56 € con tariffa a 0,35 €/kWh). I modelli vecchi o side-by-side consumano da 0,8 a 1,2 kWh al giorno.' },
      { question: 'Quanto costa tenere acceso il frigorifero al mese?', answer: 'Con un consumo medio di 130 kWh/anno a 35 ct/kWh, un frigorifero costa circa 3,80 € al mese. Un modello datato può arrivare a costare 9–12 € al mese.' },
      { question: 'Conviene sostituire un vecchio frigorifero con uno nuovo di classe A?', answer: 'Sì. Sostituire un frigo di oltre 10 anni (consumo >280 kWh/anno) con un modello moderno classe A/B permette di risparmiare dai 45 ai 60 € all\'anno in bolletta.' },
      { question: 'Qual è la temperatura ideale del frigorifero per risparmiare energia?', answer: 'Si consiglia di impostare 7 °C nel vano frigo e -18 °C nel congelatore. Ogni grado in meno fa aumentare i consumi energetici di circa il 6%.' }
    ]
  },
  waschmaschine: {
    de: [
      { question: 'Was kostet ein Waschgang bei 30 °C, 40 °C und 60 °C?', answer: 'Ein Eco-Waschgang bei 30 °C verbraucht ca. 0,4–0,6 kWh (ca. 14–21 Cent). Bei 40 °C sind es ca. 0,7–0,9 kWh (ca. 25–32 Cent) und bei 60 °C ca. 1,0–1,4 kWh (ca. 35–49 Cent bei 35 ct/kWh).' },
      { question: 'Wie viel Strom verbraucht eine Waschmaschine im Jahr?', answer: 'Bei 200 Waschgängen pro Jahr verbraucht eine moderne Waschmaschine ca. 100 bis 150 kWh (ca. 35 bis 53 € pro Jahr). Ältere Geräte benötigen oft über 220 kWh (77 €).' },
      { question: 'Warum spart das Eco-Programm Strom, obwohl es länger dauert?', answer: 'Weil über 80 % der Energie zum Aufheizen des Wassers benötigt wird. Das Eco-Programm nutzt niedrigere Temperaturen und verlängert dafür die Einwirkzeit der Waschlauge mechanisch.' },
      { question: 'Wie viel Strom zieht eine Waschmaschine im Standby?', answer: 'Moderne Waschmaschinen verbrauchen im Standby unter 0,5 Watt (< 1,50 €/Jahr). Ältere Geräte mit Digitaldisplays ziehen bis zu 3–5 Watt.' },
      { question: 'Lohnt sich das Vorwaschprogramm beim Stromsparen?', answer: 'Nein, das Vorwaschprogramm ist bei normal verschmutzter Alltagskleidung überflüssig und verbraucht unnötig extra Strom und Wasser.' }
    ],
    en: [
      { question: 'How much does a single laundry wash cycle cost in electricity?', answer: 'An Eco 30°C wash uses around 0.4–0.6 kWh (approx. €0.14–€0.21). A 40°C wash uses 0.7–0.9 kWh (€0.25–€0.32), and a 60°C hot cycle consumes 1.0–1.4 kWh (€0.35–€0.49 at 35 ct/kWh).' },
      { question: 'How much electricity does a washing machine consume annually?', answer: 'For an average household doing 200 loads a year, a modern machine consumes 100 to 140 kWh/year (€35–€49/year). Older machines consume 200–260 kWh/year (€70–€90).' },
      { question: 'Why does the Eco cycle save electricity when it runs longer?', answer: 'Heating water accounts for 80%+ of energy use. The Eco cycle heats water to lower temperatures and uses longer mechanical soaking time to achieve the same cleaning results with less power.' },
      { question: 'Does a washing machine use standby power when off?', answer: 'Modern washers draw under 0.5 Watts in standby (<€1.50/year). Turning them off completely at the wall socket ensures zero phantom load.' }
    ],
    es: [
      { question: '¿Cuánto cuesta poner una lavadora según la temperatura del agua?', answer: 'Un lavado Eco a 30 °C consume unos 0,4–0,6 kWh (aprox. 0,14–0,21 €). A 40 °C consume 0,7–0,9 kWh (0,25–0,32 €), y a 60 °C gasta 1,0–1,4 kWh (0,35–0,49 € con 35 ct/kWh).' },
      { question: '¿Cuánta electricidad gasta una lavadora al año?', answer: 'Con unas 200 coladas anuales, una lavadora moderna gasta entre 100 y 140 kWh/año (35–49 €/año). Una lavadora vieja puede superar los 220 kWh anuales (77 €).' },
      { question: '¿Por qué el programa Eco ahorra energía si dura más tiempo?', answer: 'Calentar el agua consume más del 80 % de la energía. El modo Eco calienta a menos temperatura y compensa con más tiempo de remojo mecánico, ahorrando hasta un 50 % de luz.' }
    ],
    ja: [
      { question: '洗濯機1回の電気代はいくら？（水温・コース別）', answer: '標準的な水洗い（30℃以下）で1回あたり約0.3〜0.5 kWh（約10〜18セント）、温水洗浄（60℃）では約1.0〜1.3 kWh（約35〜45セント）の電気代がかかります。' },
      { question: '洗濯機の年間消費電力量と電気料金は？', answer: '年間200回洗濯する場合、最新の省エネ洗濯機は年間約100〜140 kWh（約35〜49ユーロ）です。' },
      { question: '電気代を最も節約できる洗濯機の使い方は？', answer: 'まとめ洗いで洗濯容量を8分目まで満たし、30℃以下のエココースを利用するのが最も効果的です。' }
    ],
    fr: [
      { question: 'Combien coûte un cycle de lavage en électricité ?', answer: 'Un lavage Eco à 30 °C coûte environ 0,15 à 0,20 € (0,4–0,6 kWh). À 40 °C, comptez 0,25 à 0,32 €, et à 60 °C, environ 0,40 à 0,50 € à 35 ct/kWh.' },
      { question: 'Quelle est la consommation annuelle d\'une machine à laver ?', answer: 'Pour 200 cycles par an, un lave-linge moderne consomme entre 100 et 140 kWh/an (environ 35 à 49 €/an).' },
      { question: 'Pourquoi le programme Éco est-il plus économique malgré sa durée ?', answer: 'Chauffer l\'eau représente plus de 80 % de la dépense d\'énergie. Le programme Éco chauffe moins fort et compense par une action mécanique plus longue.' }
    ],
    pt: [
      { question: 'Quanto custa uma máquina de lavar por ciclo?', answer: 'Uma lavagem a 30 °C Eco custa cerca de 0,15 a 0,20 € (0,4–0,6 kWh). A 60 °C o custo sobe para 0,35 a 0,50 € por lavagem.' },
      { question: 'Quanto gasta uma máquina de lavar roupa por ano?', answer: 'Com cerca de 200 lavagens anuais, um modelo moderno consome 100 a 140 kWh/ano (35 a 49 € anuais).' }
    ],
    ko: [
      { question: '세탁기 1회 사용 시 전기요금은 얼마인가요?', answer: '표준 30°C 세탁 시 1회 약 0.4~0.6 kWh(약 15~20센트)가 발생하며, 60°C 온수 세탁 시 약 1.0~1.3 kWh(약 35~45센트)가 소모됩니다.' },
      { question: '세탁기의 연간 전기 소비량과 비용은?', answer: '연간 200회 사용 기준, 최신 세탁기는 연간 100~140 kWh(약 35~49유로)를 소비합니다.' }
    ],
    it: [
      { question: 'Quanto costa un ciclo di lavatrice in elettricità?', answer: 'Un lavaggio Eco a 30 °C costa circa 0,15–0,20 € (0,4–0,6 kWh). Un ciclo a 60 °C costa circa 0,35–0,50 € con tariffa a 35 ct/kWh.' },
      { question: 'Quanto consuma una lavatrice all\'anno?', answer: 'Con circa 200 lavaggi all\'anno, una lavatrice moderna consuma 100–140 kWh/anno (35–49 € all\'anno).' }
    ]
  }
};
console.log('Template created');
