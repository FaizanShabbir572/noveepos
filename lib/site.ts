// ==========================================
//  Apna brand yahan change karein (sirf ye file)
// ==========================================
export const brand = {
  name: "NovaPOS",
  tagline: "Smart, fast and reliable NPOS for growing businesses.",
  phone: "00923235815253",
  email: "hashmifaizan2@gmail.com",
  bundlePrice: "£995",
  weeklyPrice: "£20/week",
};

export const nav = [
  { label: "Retail", href: "/retail" },
  {
    label: "Hospitality",
    href: "/#hospitality",
    children: [
      { label: "Restaurants", href: "/restaurants" },
      { label: "Coffee Shop", href: "/coffee-shop" },
      { label: "Bakeries & Delis", href: "/bakeries-delis" },
    ],
  },
  {
    label: "Features",
    href: "/#features",
    children: [{ label: "Hardware", href: "/hardware" }],
  },
];

// Sector pages ke feature cards — art key FeatureArt.tsx se match karti hai
export const restaurantFeatures = [
  { art: "touch", title: "Easy-to-Use Interface", text: "Big, clear buttons your team picks up on the first shift — and you can manage it all remotely from any device." },
  { art: "display", title: "Customer Facing Screen", text: "A 15.6\" colour display shows guests their bill as it builds, plus your specials, offers and promotions." },
  { art: "kds", title: "Kitchen Display Unit", text: "Orders fly from the front of house to the kitchen the moment they're taken — no lost tickets, no shouting." },
  { art: "menu", title: "Customisable Menu", text: "Add dishes, change prices or 86 an item in seconds, and the change appears on every till straight away." },
  { art: "split", title: "Split Payments", text: "Split the bill evenly, by item or across cash and card — however the table wants to pay." },
  { art: "customers", title: "Customer Records", text: "Keep guest details and order history so you can remember regulars and reward loyalty." },
];

export const bakeryFeatures = [
  { art: "overview", title: "Live Overview", text: "See what's selling fastest — from sourdough to sandwiches — on any device, with a full back office for every sale." },
  { art: "cloud", title: "Cloud Back Office", text: "Change prices, add tomorrow's specials and check reports from home before the morning bake." },
  { art: "offline", title: "Works Offline", text: "Keep serving the morning queue even if the internet drops. Everything syncs once you're back online." },
  { art: "split", title: "Split Payments", text: "Split any bill between cash and card in a couple of taps — perfect for groups grabbing lunch." },
  { art: "ecom", title: "Online Ordering", text: "Take cake orders and deli platters online. They land straight on your till, ready for collection." },
  { art: "display", title: "Customer Screen", text: "A 15.6\" display shows the order as it's rung up, plus your offers, meal deals and promo videos." },
];

export const coffeeFeatures = [
  { art: "overview", title: "Live Overview", text: "Track your busiest hours, best-selling drinks and staff sales from any device, wherever you are." },
  { art: "cloud", title: "Cloud Back Office", text: "Update the menu, launch a seasonal drink or check yesterday's takings remotely — just log in." },
  { art: "offline", title: "Works Offline", text: "Wi-Fi gone during the morning rush? Keep taking orders; everything syncs when the connection returns." },
  { art: "split", title: "Split Payments", text: "Let friends split the bill between cards and cash in seconds, without holding up the queue." },
  { art: "ecom", title: "Order Ahead Online", text: "Customers order and pay online before they arrive, and orders drop straight onto your till." },
  { art: "display", title: "Customer Screen", text: "A 15.6\" display shows the order while customers wait, plus your loyalty offers and promo videos." },
];

// SAMPLE reviews (demo content) — site live karne se pehle asli customers ke reviews lagayein
export const testimonials = [
  {
    name: "Usman Tariq", business: "Karahi House", role: "Restaurant owner, Lahore", rating: 5,
    title: "No more lost orders on busy nights",
    text: "On weekends we serve over 300 covers, and paper slips used to go missing between the hall and the kitchen. With NovaPOS every order goes straight to the kitchen screen, and the table plan shows our waiters which tables are free. Bills are ready in seconds and our cooks finally know what to make first.",
  },
  {
    name: "Ayesha Siddiqui", business: "Brew & Bean Café", role: "Café owner, Karachi", rating: 5,
    title: "Easy for staff, great reports for me",
    text: "My new staff learn the till in one shift — the screens are clear and simple. I check the day's sales on my phone from home, see which drinks sell best at each hour, and plan stock properly. Split payments between cash and card have made the evening rush much smoother.",
  },
  {
    name: "Bilal Ahmed", business: "Fresh Mart", role: "Supermarket owner, Islamabad", rating: 5,
    title: "Stock control that actually works",
    text: "We carry more than 4,000 products, and stock counting used to take a whole weekend. Now NovaPOS updates stock with every sale, warns me before items run out and makes purchase orders easy. Even during load-shedding the till keeps working offline and syncs when the internet is back.",
  },
  {
    name: "Hina Raza", business: "Sweet Crumbs Bakery", role: "Bakery owner, Rawalpindi", rating: 5,
    title: "Custom cake orders all in one place",
    text: "Birthday and wedding cake orders used to live in a notebook. Now customers order online or at the counter, the details go straight to our kitchen screen, and we never forget a message on a cake. The NovaPOS team set everything up in a day and support always answers quickly.",
  },
];

export const retailFeatures = [
  { art: "overview", title: "Live Overview", text: "See takings, best sellers and staff performance for every till and branch, on any device." },
  { art: "cloud", title: "Cloud Back Office", text: "Update prices, products and reports from home, the warehouse or on holiday — all you need is a connection." },
  { art: "offline", title: "Works Offline", text: "Internet down? Keep scanning and taking payments. Sales sync automatically once you're back online." },
  { art: "multi", title: "Multi-Screen Orders", text: "Send picking lists straight to your stockroom or warehouse screen and get notified when they're ready." },
  { art: "ecom", title: "Online Store Built In", text: "Launch a web shop that shares stock and prices with your till, so online and in-store never clash." },
  { art: "display", title: "Customer Display", text: "A 15.6\" customer-facing screen shows the basket as it builds, plus your own offers and promotions." },
];

export const productTiles = [
  { icon: "LayoutDashboard", label: "Back Office" },
  { icon: "ShoppingCart", label: "E-Commerce" },
  { icon: "MonitorSmartphone", label: "Large Customer Display" },
  { icon: "CreditCard", label: "Integrated Payments" },
  { icon: "Printer", label: "Thermal Printer" },
  { icon: "Archive", label: "POS Cash Drawer" },
  { icon: "Monitor", label: "POS All In One" },
];

export const businessTypes = [
  "Retail - Shop",
  "Retail - Warehouse",
  "Hospitality - Restaurant",
  "Hospitality - Coffee Shop",
  "Hospitality - Bakeries",
  "Hospitality - Delis",
  "Other",
];

export const featurePoints = [
  { icon: "Wifi", title: "Online & Offline", text: "Keep selling when the internet drops — every sale syncs automatically the moment you're back online." },
  { icon: "Cpu", title: "Powerful Hardware", text: "A quad-core terminal with 8 GB RAM, plus barcode scanner and receipt printer, keeps every checkout quick." },
  { icon: "ShoppingCart", title: "Ecommerce Ready", text: "Connect your online shop and serve web and walk-in customers from one place." },
  { icon: "Monitor", title: "Customer Display", text: "Show offers and promotions on a customisable screen your customers see at checkout." },
  { icon: "GraduationCap", title: "Easy to Learn", text: "A clean, simple interface means new staff can be trained in about fifteen minutes." },
  { icon: "Users", title: "Staff Tracking", text: "See who sold what and reward your top performers with real sales figures." },
];

export const benefitTabs = [
  {
    id: "pos",
    label: "Point of Sale",
    items: [
      { icon: "Search", title: "Product Search", text: "Find any product instantly by name or barcode." },
      { icon: "Percent", title: "Promotions", text: "Apply discounts to the whole basket or selected items." },
      { icon: "BarChart3", title: "Stock Report", text: "Track stock levels and get alerted before items run out." },
      { icon: "SplitSquareHorizontal", title: "Split Payments", text: "Take one bill across several payment methods." },
      { icon: "RotateCcw", title: "Refund", text: "Quick, simple refunds when customers change their minds." },
      { icon: "Wallet", title: "Cash Float", text: "Manage float and cash withdrawals with ease." },
    ],
  },
  {
    id: "back",
    label: "Back Office",
    items: [
      { icon: "UserSquare", title: "User List", text: "View, export and analyse your customer data." },
      { icon: "Upload", title: "Data Import", text: "Build or update your inventory in minutes via import." },
      { icon: "ShieldCheck", title: "Role Management", text: "Set staff access levels and control every till." },
      { icon: "Boxes", title: "Inventory Management", text: "Add new products or edit availability in seconds." },
      { icon: "FileText", title: "Access Records", text: "Full sales, customer, supplier and purchase reporting." },
      { icon: "Cloud", title: "Cloud-Based", text: "Run your business from anywhere in the world." },
    ],
  },
  {
    id: "ecom",
    label: "Ecommerce",
    items: [
      { icon: "Workflow", title: "Smooth Operations", text: "All sales channels flow into one system." },
      { icon: "Layers", title: "Omni Channel Retailing", text: "Customers shop however and wherever they like." },
      { icon: "TrendingUp", title: "Traffic Boosting", text: "An online store brings more visitors and sales." },
      { icon: "BadgeCheck", title: "Improved Branding", text: "Build your brand across every channel." },
      { icon: "Globe", title: "Expand Your Footprint", text: "Reach customers far beyond your shop door." },
      { icon: "Smile", title: "Customer Satisfaction", text: "Let customers buy any time, day or night." },
    ],
  },
];

export const partners = [
  { name: "Card Partner One", text: "Simple, affordable card payment solutions for businesses of every size." },
  { name: "Card Partner Two", text: "Accept every major payment method quickly and securely." },
];

export const productPills = [
  "Back Office",
  "E-Commerce",
  "Large Customer Display",
  "Integrated Payments",
  "Thermal Printer",
  "POS Cash Drawer",
  "POS All In One",
];

export const footerCols = [
  {
    title: "Sectors",
    links: ["Retail", "Hospitality", "Restaurants", "Coffee Shop", "Bakeries Delis", "Store"],
  },
  {
    title: "Solutions",
    links: ["Features", "Multi Screen", "Offline Mode", "Cloud Solution", "Ecommerce Portal", "Point of Sale"],
  },
  {
    title: brand.name,
    links: ["Hardware", "POS Software", "Support", "Warranty", "Blog", "Contact Us"],
  },
];

export const socials = ["Twitter", "Facebook", "LinkedIn", "Pinterest", "Instagram"];

export const bundleItems = [
  "FREE 15.6\" widescreen customer display",
  "FREE lifetime support",
  "NPOS terminal",
  "Thermal printer",
  "Omnidirectional scanner",
  "12 months return-to-base warranty",
  "FREE shipping",
];
