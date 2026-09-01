# OFFICIAL DATA SOURCES & REGULATORY CITATIONS: kWhKlar.de

**Last Verified**: September 1, 2026  
**Review Cycle**: Quarterly  

All calculations, benchmark ranges, and regulatory price components on kWhKlar are derived from verified official government agencies, federal statistical offices, and authorized industry associations.

---

## 1. Primary Sources & Reference Registries

| Source ID | Institution / Publisher | Country | Scope / Dataset | Official Reference URL |
| :--- | :--- | :---: | :--- | :--- |
| `bnetza` | **Bundesnetzagentur & Bundeskartellamt** | Germany (DE) | Monitoringbericht, Netzentgelte, Großhandelspreise | [bundesnetzagentur.de](https://www.bundesnetzagentur.de) |
| `bdew` | **BDEW (Bundesverband der Energie- und Wasserwirtschaft)** | Germany (DE) | BDEW-Strompreisanalyse, Durchschnittsverbrauch | [bdew.de](https://www.bdew.de) |
| `destatis` | **Statistisches Bundesamt (Destatis)** | Germany (DE) | Energiepreise, Haushaltsausgaben & Energiestatistik | [destatis.de](https://www.destatis.de) |
| `stromspiegel` | **Stromspiegel Deutschland (co2online / BMWK)** | Germany (DE) | Stromverbrauchsklassen für 1- bis 5-Personen-Haushalte | [stromspiegel.de](https://www.stromspiegel.de) |
| `uba` | **Umweltbundesamt (UBA)** | Germany (DE) | CO2-Emissionsfaktor im deutschen Strommix | [umweltbundesamt.de](https://www.umweltbundesamt.de) |
| `econtrol` | **E-Control Austria** | Austria (AT) | Österreichische Strompreise & Haushaltsbenchmarks | [e-control.at](https://www.e-control.at) |
| `elcom` | **Eidgenössische Elektrizitätskommission (ElCom)** | Switzerland (CH)| Schweizer Stromtarife, Netznutzung & KEV | [elcom.admin.ch](https://www.elcom.admin.ch) |

---

## 2. Mathematical Calculation Formulas

### 1. Appliance Electricity Consumption
$$\text{kWh} = \frac{\text{Power (Watts)} \times \text{Operating Hours (h)}}{1.000}$$

### 2. Total Electricity Cost
$$\text{Cost (€)} = \text{kWh} \times \text{Electricity Rate (€/kWh)}$$

### 3. Monthly Extrapolation
$$\text{Monthly Cost} = \frac{\text{Annual kWh} \times \text{Rate (€/kWh)}}{12} + \text{Monthly Base Fee}$$
*(Note: Based on standard 365 calendar days, averaging 30.42 days per month)*

---

## 3. Transparency & Editorial Policy

1. **Unbiased & Independent**: kWhKlar is not affiliated with any specific energy provider or political organization.
2. **Customizable Rates**: All calculators allow the user to replace the standard reference price (35 ct/kWh) with their exact contractual utility tariff.
3. **No Fabricated Data**: If official statistics are not available for a specific device, the methodology clearly indicates it as an estimated typical range.
