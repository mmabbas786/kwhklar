export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: 'Rechner', href: '/stromkosten-rechner' },
  { label: 'Geräte', href: '/geraete' },
  { label: 'Haushalt', href: '/stromverbrauch-haushalt' },
  { label: 'Strompreis', href: '/strompreis' },
  { label: 'Stromrechnung', href: '/stromrechnung' },
  { label: 'Sparen', href: '/strom-sparen' },
];

export const footerNav = {
  calculators: [
    { label: 'Stromkostenrechner', href: '/stromkosten-rechner' },
    { label: 'kWh in Euro Rechner', href: '/kwh-rechner' },
    { label: 'Watt in kWh Rechner', href: '/watt-rechner' },
    { label: 'Stromverbrauch Rechner', href: '/stromverbrauch-rechner' },
    { label: 'Kosten pro Stunde', href: '/stromkosten-pro-stunde' },
    { label: 'Kosten pro Tag', href: '/stromkosten-pro-tag' },
    { label: 'Kosten pro Monat', href: '/stromkosten-pro-monat' },
    { label: 'Kosten pro Jahr', href: '/stromkosten-pro-jahr' },
  ],
  appliances: [
    { label: 'Alle 25+ Geräte', href: '/geraete' },
    { label: 'Kühlschrank', href: '/geraete/kuehlschrank' },
    { label: 'Waschmaschine', href: '/geraete/waschmaschine' },
    { label: 'Wäschetrockner', href: '/geraete/trockner' },
    { label: 'Geschirrspüler', href: '/geraete/geschirrspueler' },
    { label: 'Gaming-PC', href: '/geraete/gaming-pc' },
    { label: 'Fernseher', href: '/geraete/fernseher' },
    { label: 'Klimaanlage', href: '/geraete/klimaanlage' },
  ],
  household: [
    { label: 'Haushaltsübersicht', href: '/stromverbrauch-haushalt' },
    { label: '1-Personen-Haushalt', href: '/stromverbrauch-1-person' },
    { label: '2-Personen-Haushalt', href: '/stromverbrauch-2-personen' },
    { label: '3-Personen-Haushalt', href: '/stromverbrauch-3-personen' },
    { label: '4-Personen-Haushalt', href: '/stromverbrauch-4-personen' },
    { label: '5-Personen-Haushalt', href: '/stromverbrauch-5-personen' },
    { label: 'Wohnung', href: '/stromverbrauch-wohnung' },
    { label: 'Einfamilienhaus', href: '/stromverbrauch-einfamilienhaus' },
  ],
  topics: [
    { label: 'Strompreis aktuell', href: '/strompreis' },
    { label: 'Stromrechnung prüfen', href: '/stromrechnung' },
    { label: 'Stromfresser finden', href: '/stromfresser' },
    { label: 'Strom sparen Tipps', href: '/strom-sparen' },
    { label: 'E-Auto Ladekosten', href: '/e-auto/ladekosten-rechner' },
    { label: 'Wärmepumpe Stromkosten', href: '/waermepumpe/stromverbrauch' },
    { label: 'Balkonkraftwerk', href: '/balkonkraftwerk/stromkosten-sparen' },
  ],
  legal: [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Quellen & Methodik', href: '/quellen-methodik' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ]
};
