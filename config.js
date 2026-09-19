

const STORE_CONFIG = {
  // Identidade
  name: "GOYÁ",                 // nome curto (usado no logo)
  fullName: "GOYÁ MODA",        // nome completo (usado em textos e título da aba)

  // WhatsApp — SUBSTITUIR pelo número real da loja
  // Formato: DDI + DDD + número, apenas dígitos (ex: 5561999998888)
  whatsapp: {
    number: "61982206185", // <-- número fictício de demonstração
    messages: {
      geral: "Olá! Vim pelo site da LUME e gostaria de mais informações.",
      // {produto} é substituído automaticamente pelo nome do produto clicado
      produto: "Olá! Tenho interesse no produto {produto}. Poderia me passar mais informações?"
    }
  },

  // Instagram — SUBSTITUIR pelo perfil real da loja
  instagram: "https://www.instagram.com/phflow.px?stkn=NDEwemU2dTI0ajcx", // <-- placeholder, trocar pelo @ real

  // Localização — apenas o bairro/cidade fornecidos, sem inventar endereço de rua
  location: {
    line1: "Jardim Céu Azul",
    line2: "Valparaíso de Goiás — GO",
    mapsQuery: "Jardim Céu Azul, Valparaíso de Goiás - GO" // usado para montar o link do Google Maps
  },

  // Horários — PLACEHOLDER, substituir pelos horários reais da loja
  hours: [
    { day: "Segunda a sexta", time: "--:-- às --:--" },
    { day: "Sábado", time: "--:-- às --:--" },
    { day: "Domingo", time: "Fechado / a confirmar" }
  ]
};
