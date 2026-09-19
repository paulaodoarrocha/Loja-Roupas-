const PRODUCTS = [
  {
    id: 1,
    name: "Camisa Linho Solta",
    category: "feminino",
    price: 189.90,
    oldPrice: null,
    isNew: true,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=750&fit=crop"],
    description: "Camisa em tecido leve, caimento solto, ideal para compor looks do dia a dia."
  },
  {
    id: 2,
    name: "Vestido Midi Fluido",
    category: "feminino",
    price: 259.90,
    oldPrice: 319.90,
    isNew: false,
    isBestseller: true,
    images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=750&fit=crop"],
    description: "Vestido midi de caimento fluido, versátil para o dia e para a noite."
  },
  {
    id: 3,
    name: "Calça Alfaiataria",
    category: "feminino",
    price: 219.90,
    oldPrice: null,
    isNew: false,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=750&fit=crop"],
    description: "Calça de alfaiataria com modelagem reta, para um visual mais formal."
  },
  {
    id: 4,
    name: "Blazer Estruturado",
    category: "feminino",
    price: 349.90,
    oldPrice: null,
    isNew: true,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&h=750&fit=crop"],
    description: "Blazer de corte estruturado, ótima peça-chave para compor produções."
  },
  {
    id: 5,
    name: "Camisa Social Slim",
    category: "masculino",
    price: 169.90,
    oldPrice: null,
    isNew: false,
    isBestseller: true,
    images: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop"],
    description: "Camisa social de corte slim, indicada para o trabalho ou ocasiões especiais."
  },
  {
    id: 6,
    name: "Jaqueta Jeans",
    category: "masculino",
    price: 229.90,
    oldPrice: 269.90,
    isNew: false,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop"],
    description: "Jaqueta jeans tradicional, confortável para usar em diferentes estações."
  },
  {
    id: 7,
    name: "Camiseta Básica Premium",
    category: "masculino",
    price: 89.90,
    oldPrice: null,
    isNew: true,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=750&fit=crop"],
    description: "Camiseta em algodão de gramatura mais alta, com caimento firme."
  },
  {
    id: 8,
    name: "Conjunto Moletom Infantil",
    category: "infantil",
    price: 129.90,
    oldPrice: null,
    isNew: false,
    isBestseller: true,
    images: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=750&fit=crop", "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=750&fit=crop", "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=750&fit=crop"],
    description: "Conjunto de moletom infantil, confortável para o dia a dia e a rotina escolar."
  },
  {
    id: 9,
    name: "Vestido Infantil Estampado",
    category: "infantil",
    price: 99.90,
    oldPrice: 129.90,
    isNew: false,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=750&fit=crop", "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&h=750&fit=crop", "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=750&fit=crop"],
    description: "Vestido infantil leve, com estampa alegre, ideal para o verão."
  },
  {
    id: 10,
    name: "Tênis Casual Branco",
    category: "calcados",
    price: 259.90,
    oldPrice: null,
    isNew: true,
    isBestseller: true,
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=750&fit=crop"],
    description: "Tênis casual branco, combina com praticamente qualquer produção."
  },
  {
    id: 11,
    name: "Bota Coturno",
    category: "calcados",
    price: 319.90,
    oldPrice: 389.90,
    isNew: false,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=750&fit=crop"],
    description: "Bota estilo coturno, resistente e versátil para diferentes looks."
  },
  {
    id: 12,
    name: "Bolsa Estruturada",
    category: "acessorios",
    price: 189.90,
    oldPrice: null,
    isNew: false,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1524532787116-e70228437bbe?w=600&h=750&fit=crop"],
    description: "Bolsa de formato estruturado, com espaço interno para o essencial do dia."
  },
  {
    id: 13,
    name: "Cinto de Couro",
    category: "acessorios",
    price: 79.90,
    oldPrice: 99.90,
    isNew: false,
    isBestseller: false,
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop"],
    description: "Cinto em couro legítimo, acabamento simples para compor looks casuais ou formais."
  }
];
