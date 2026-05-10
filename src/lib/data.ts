// ─── Hardcoded Trip Data ───
export const trips = [
  {
    id: "tokyo-spring",
    title: "Tokyo Spring Adventure",
    destination: "Tokyo, Japan",
    dates: "Apr 12 — Apr 24, 2024",
    duration: "12 Days",
    budget: "$4,250",
    status: "upcoming" as const,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7qfx6igQIM0QDnoSFjfqYgV2buqRNN9fTVXoxWNwI6NUiK7URVMxz9VXWrv8xCdxzQmXsP_fPDd_QLHVh1LtJGKPKpURq6NBi1xWI_hAtFSTY2EFQHhqQcUL8TPq3I0noeG8EyejjUv59RqUY3JwquDOib_nSGHm16CRgT_JrNPst4Zei_kIbv56llytE09VmhNh7nXplvBHADFbAU1Hebk7hcn-SdU7dDDTKBxurJhO_pfGxgd0JzM9OzosWa5Z7dqOpTcnJ7dyv",
    collaborators: 3,
  },
  {
    id: "iceland-winter",
    title: "Iceland Winter Expedition",
    destination: "Reykjavík, Iceland",
    dates: "Jan 5 — Jan 14, 2025",
    duration: "9 Days",
    budget: "$3,800",
    status: "planning" as const,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsfGRHCHQiHNMLYnvmukxbErvFoHHGJwOlMztC_Cbu0p4PtHt6F9JQ5vRNk6DkBaNQp-btbIYnbk1kMpvFbpBn_ugr6tT3pXCVRQXA0teBWa5FRzsEl96sKyv8EdXIHDVlcg0h9e4E0kH-tuImH-aiPW2mmD7AVNGT6o9dGBnvN6bVhZn1pnJzGVyuhLcyfg-GXwZWoLABllaTYHx9lbjtcDD5JBmfOPRu-FPpKpi7-FodWTRpRSKpXzg8aL77tl4MfR7MjjnbaW4N",
    collaborators: 2,
  },
  {
    id: "france-autumn",
    title: "Autumn in France",
    destination: "Paris & Lyon, France",
    dates: "Oct 12 — Oct 18, 2024",
    duration: "7 Days",
    budget: "€4,200",
    status: "completed" as const,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsIhy4W1edJyWY0NP-MLR6WpiFu-hxOMlYkuHAWKx125NevayB5WU_DQcp4rlIze5FgVw_7_D1wDo49TvaNMGQUAE6YAG12p7JWNDtSpiaf_hc0rdPVpeXRjT6xn6lD_ouUXwtHdwqB8033fcEIPoSHolqMOXxXWozTU-xS_2nqNq2rCkDplKlsUNy9JfifAxD8vCSGymVG81zCev7RFYltAD9EMnvEjbtvHrNq3-4Jz57P5cyjP9zuep7HveGWr8HcVX3MQqcVJyI",
    collaborators: 2,
  },
];

export const dashboardStats = {
  totalTrips: 3,
  upcomingTrips: 1,
  countriesVisited: 12,
  totalBudget: "$12,250",
};

export const itineraryDays = [
  {
    day: 1,
    title: "Arrival & Shibuya",
    date: "Sunday, April 12",
    activities: [
      { time: "10:30 AM", title: "Land at Narita International", description: "Terminal 1, Flight NH126. Shuttle pickup arranged." },
      { time: "3:00 PM", title: "Shibuya Crossing & Hachiko", description: "Classic neon city walk. Best views from Magnet by Shibuya 109." },
    ],
  },
  {
    day: 2,
    title: "Tradition & Parks",
    date: "Monday, April 13",
    activities: [
      { time: "9:00 AM", title: "Meiji Jingu Shrine", description: "Morning walk through the forest. Peaceful atmosphere before crowds." },
      { time: "12:30 PM", title: "Yoyogi Park Picnic", description: "Grab bento boxes from a nearby department store basement." },
    ],
  },
];

export const budgetData = {
  tripName: "Tokyo Autumn Expedition",
  totalBudget: 6000,
  totalSpent: 4850,
  remaining: 1150,
  dailyAvg: 242.5,
  daysLeft: 5,
  totalDays: 20,
  categories: [
    { name: "Transport", icon: "flight", amount: 1420, percent: 70 },
    { name: "Accommodation", icon: "bed", amount: 2100, percent: 95 },
    { name: "Food", icon: "restaurant", amount: 850, percent: 112, overBudget: true },
    { name: "Activities", icon: "local_activity", amount: 480, percent: 40 },
  ],
  recentExpenses: [
    { date: "Oct 24, 2023", description: "Omakase Dinner — Shinjuku", category: "Food", amount: 280.0 },
    { date: "Oct 23, 2023", description: "JR Pass Renewal", category: "Transport", amount: 450.0 },
    { date: "Oct 22, 2023", description: "TeamLab Planets Ticket", category: "Activities", amount: 35.0 },
    { date: "Oct 22, 2023", description: "Park Hyatt Tokyo — 3 Nights", category: "Accommodation", amount: 1850.0 },
    { date: "Oct 21, 2023", description: "Blue Bottle Coffee", category: "Food", amount: 12.5 },
  ],
};

export const checklistData = {
  progress: { completed: 12, total: 24 },
  sections: [
    {
      title: "Essentials",
      icon: "verified",
      items: [
        { name: "Passport and Travel Visas", note: "Check expiration dates (min 6 months)", checked: true },
        { name: "Booking Confirmations", checked: true },
        { name: "Travel Insurance Document", note: "Printed copy in day-pack", checked: false },
      ],
    },
    {
      title: "Clothing",
      icon: "checkroom",
      items: [
        { name: "Merino Wool Base Layers", note: "Top and bottom (x2 sets)", tag: "Heavy", checked: false },
        { name: "Waterproof Shell Jacket", tag: "Outdoor", checked: false },
        { name: "Thermal Gloves", checked: true },
      ],
    },
  ],
};

export const discoveryDestinations = [
  {
    name: "Kyoto",
    country: "Japan",
    costPerDay: "$180",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAPi_rJzuqzsvEogJPjouKHbqOUy37Mcpn5jKTRhpU-8nX4ZrjR4ZMepi2c8Rt6ZS97PlTDiC4yJSCgFMosm9KWyyt0Tm3lEuFKplhjnk-y4BISKQAQtoqamBq3lfeIZ_EqNcizj6R6l233Gxw--cL6asLnGarDJ7yyaDm5ycIOMr2wNFofPLI02wAk9rdR6x_t1mtZEz2ablmh4bNvLb9V7NXbrt1Z8XUQvfHZboacoEl_RjTFlXpmAK2btKIK3L8MVvdYo_kW22v",
    featured: true,
    badge: "Destination of the Week",
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    costPerDay: "$240",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZbKXaLXDpmjMyxbxboGDd4cpy58ocNjsc0sk5_HkYaakhIoZL2HjoEv2O53gn7-79HyjJ_9O3Xphzx4pvkvGrEgzXzvMNS01qRUOajT5-ZejJnC9wzcM7zUD-eE_eNtusL2HYpWNZ6xhnJrmBPikwrrn-D0r66BiYavSdHam_-YRzITtT06SZ4p0ncbVhWv5B2q0bzmAr6c2lFuEUzL-piVpeirAVfB2IvH1W8CWg7s2BXjI_0SsbeTnaRjn90eHQw4NqNXFatY0E",
  },
  {
    name: "Paris",
    country: "France",
    costPerDay: "$310",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ311zmyznTqovLrwnmdOulvViAJAPmH-9kiPVoCdSjdXQiSb54wM39-nupabdJV4mwelzYGR83Nqzy3EmKVW_YfnzyD8_z7KTND7mZo8XJaId5aAdR15dfhBrKdZm-L3-AsZ9PO9F6DLeConTSNf5A1rHU750O2lU5D596XWDUiNLRxhM1NSYvytmVqylKpc8Efrgy5V9yRiwrYjVAlNCBagY3IT1TpKTD-1u1p3hGABNVFqB3lVG9lkB81gdd2fz9DCF8Irvn8yW",
  },
];

export const cityResults = [
  { name: "Positano", country: "Italy", rating: 4.9, costPerDay: "$220", tag: "Best for Couples", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqzj2mvhGdbG6StOw6S5Ru8-pqBNFhqpsoAQ8FNB53lshTLMU1ZgXFAn3j-Dg9lrHqHLS-eCLawckY21TN8MtJfg2pTO8ja7nvk9XxtE8wvFPtjURYbluH0HoYhjYe5cJsFKzImc1Yn7nfVa4XmbVgvQWLBktumWSdQULuhxK4JwTJclky5MpxqXhaWLxMcCuQP7fDTdC-bcL9iKMvooBu6CR3I-QAWW1ku3q44p8bCbwnApslcCkHT_N9CR-rnooR5zPefGrri4YF" },
  { name: "Barcelona", country: "Spain", rating: 4.7, costPerDay: "$195", tag: "Urban Culture", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJq-6TUZDI8E1Sv3Cwlj5Kuuw0sOpJMF3L7lXmvLH4CaJtYjD_T1QN715QDiLKdJ_dP_wLPycmQ6MnGzQDbeXUuAZaqO8VfPqd7iZ1b5u51aAJT67X75nysFinQR5s8irzd7p6xmWJlntpvQmA-pfJ-vc2FPKoFlZbwWDOAsVWdeChsxQ9vaS3Zts08vtkgzUMiWttVHI2ioS2SSkuBpTBXRj4zVj0Bl4mKXBKDLmd80z53FzMKZrK_IXBtOc7MtBBcBDtjxV5LgUc" },
  { name: "Lisbon", country: "Portugal", rating: 4.8, costPerDay: "$160", tag: "Food & Wine", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD9GR4soy711GQ6yuUE_QEmlc6U6-gM1IxK6QAy_aG-PgKaAPfilbVznQvq_YWYBAgizNVwTU5e-iTApBF4PiupyPYQhhwPKpMapn_Y3RpvENO7AjJHz68lnqLeqH8oKo2LgX5DbrlVqdai4F1ol6TN-WgvZv9PiY9EjjOZ5mbmgDSva4XwFHnmGjwmRjrRpdl-iHIirH-yIXsUerGtQUaCbVQBS0yTx1j0ifqJeyFoAXHl0Rai54L6N023UJu43e-Hcgqp95APXVM" },
];
