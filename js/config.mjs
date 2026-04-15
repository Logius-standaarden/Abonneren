import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "wv",
  specType: "basis",
  pubDomain: "notificatieservices",
  shortName: "abonneren",
  publishDate: "2025-06-30",
  publishVersion: "0.0.1",

  // TODO: Verwijder voordat de release plaats vindt
  latestVersion: "https://github.com/logius-standaarden/abonneren",
  prevVersion: [],

  editors:
    [
      {
        name: "Stas Mironov",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Stas Mironov",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/Abonneren",
  postProcess: [ generateMermaidFigures ],
});
