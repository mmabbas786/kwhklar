# kWhKlar.de — Authoritative German Data Sources & Methodology
> Verbindliche Dokumentation aller behördlichen, wissenschaftlichen und verbandsspezifischen Datenquellen für kWhKlar.de.

## 1. Verifizierte Quellen

| Institution / Quelle | Offizielle URL | Verwendete Daten & Kennzahlen | Verwendungszweck | Letzte Überprüfung |
| :--- | :--- | :--- | :--- | :--- |
| **Bundesnetzagentur (BNetzA)** | https://www.bundesnetzagentur.de | Monitoringbericht Energie, Netzentgelte, Umlagen, Grundversorgungs-Statistiken | Validierung der staatlichen Preisbestandteile und Netzentgelte | 2026-08 |
| **BDEW (Bundesverband der Energie- und Wasserwirtschaft)** | https://www.bdew.de | BDEW-Strompreisanalyse, Haushalts-Durchschnittsstrompreise in Cent/kWh | Ermittlung des bundesweiten Referenz-Arbeitspreises (35,00 ct/kWh) | 2026-08 |
| **Statistisches Bundesamt (Destatis)** | https://www.destatis.de | Energiepreisentwicklung, Verbraucherpreisindex Energie, Haushaltsgrößen | Validierung der Haushaltsstrukturen und historischen Preisverläufe | 2026-08 |
| **Stromspiegel Deutschland (co2online / BMWK gefördert)** | https://www.stromspiegel.de | Bundesweite Referenzwerte nach Haushaltsgröße (1–5 Personen), Wohnfläche und Warmwasser | Vergleichsmaßstab in Haushaltsrechnern und Einstufung gering/mittel/hoch | 2026-08 |
| **Umweltbundesamt (UBA)** | https://www.umweltbundesamt.de | CO2-Emissionsfaktor deutscher Strommix (g CO2/kWh), Standby-Verluste | Berechnung der CO2-Ersparnis und Standby-Analysen | 2026-08 |
| **Verbraucherzentrale Bundesverband (vzbv)** | https://www.verbraucherzentrale.de | Energieberatung Richtlinien, Typenschild-Auswertung, Rechte bei Preiserhöhungen | Verbraucherfreundliche Erklärungen zu Stromrechnung und Anbieterwechsel | 2026-08 |
| **Fraunhofer ISE** | https://www.ise.fraunhofer.de | Photovoltaik-Ertragsdaten (kWh/kWp in DE), Wärmepumpen-Feldtests (JAZ) | Berechnungsgrundlage für PV-, Balkonkraftwerk- und Wärmepumpen-Rechner | 2026-08 |

## 2. Berechnungsstandards & Formeln
1. **Stromkosten (€)** = $\frac{\text{Leistung (Watt)} \times \text{Nutzungsdauer (h/Tag)}}{1.000} \times \text{Tage} \times \text{Strompreis (€/kWh)}$
2. **Jahreskosten mit Grundpreis** = $\text{Verbrauchskosten} + (12 \times \text{monatlicher Grundpreis})$
3. **Wärmepumpen-Strombedarf** = $\frac{\text{Jahres-Wärmebedarf (kWh)}}{\text{Jahresarbeitszahl (JAZ)}}$
4. **Balkonkraftwerk-Ersparnis** = $\text{Jahresertrag (kWh)} \times \text{Eigenverbrauchsanteil} \times \text{Strompreis (€/kWh)}$

---
Stand: 2026-09-01 | kWhKlar.de Quellenverzeichnis
