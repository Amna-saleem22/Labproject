export const testData = [
    // Hematology
    {
        _id: 1,
        name: "Complete Blood Count (CBC)",
        category: "Hematology",
        price: 800,
        discountedPrice: 650,
        time: "4-6 hours",
        description: "Measures different components of blood including red cells, white cells, and platelets.",
        features: ["Reports in 6 hours", "Free Doctor Consultation", "Sample Pickup at Home"],
        popular: true
    },
    {
        _id: 2,
        name: "Hemoglobin Test",
        category: "Hematology",
        price: 400,
        discountedPrice: 350,
        time: "2-4 hours",
        description: "Measures the hemoglobin level in the blood.",
        features: ["Quick Result", "Accurate Measurement"],
        popular: false
    },

    // Diabetes
    {
        _id: 3,
        name: "Blood Glucose (Fasting)",
        category: "Diabetes",
        price: 600,
        discountedPrice: 500,
        time: "2-4 hours",
        description: "Measures glucose levels in blood to diagnose diabetes or monitor treatment.",
        features: ["Fasting & PP Options", "Digital Report", "Trend Analysis"],
        popular: true
    },
    {
        _id: 4,
        name: "HbA1c Test",
        category: "Diabetes",
        price: 1000,
        discountedPrice: 850,
        time: "6-8 hours",
        description: "Monitors long-term glucose levels to manage diabetes.",
        features: ["3 Months Average", "Certified Lab"],
        popular: false
    },

    // Cardiac
    {
        _id: 5,
        name: "Lipid Profile",
        category: "Cardiac",
        price: 1200,
        discountedPrice: 1000,
        time: "6-8 hours",
        description: "Checks cholesterol levels to assess risk of heart disease.",
        features: ["HDL, LDL, Triglycerides", "Accurate Report", "Home Collection Available"],
        popular: true
    },
    {
        _id: 6,
        name: "Troponin I Test",
        category: "Cardiac",
        price: 1500,
        discountedPrice: 1300,
        time: "4-6 hours",
        description: "Detects heart muscle injury and risk of heart attack.",
        features: ["Fast Result", "Trusted by Doctors"],
        popular: false
    },

    // Hepatology
    {
        _id: 7,
        name: "Liver Function Test (LFT)",
        category: "Hepatology",
        price: 1200,
        discountedPrice: 1000,
        time: "6-8 hours",
        description: "Analyzes liver enzymes and bilirubin levels.",
        features: ["Detect Liver Disease", "Home Sample Collection"],
        popular: false
    },

    // Endocrinology
    {
        _id: 8,
        name: "Thyroid Profile (T3, T4, TSH)",
        category: "Endocrinology",
        price: 1000,
        discountedPrice: 850,
        time: "4-6 hours",
        description: "Evaluates thyroid gland function.",
        features: ["Fast Result", "Certified Lab"],
        popular: true
    },

    // Nutrition
    {
        _id: 9,
        name: "Vitamin D Test",
        category: "Nutrition",
        price: 800,
        discountedPrice: 700,
        time: "6-8 hours",
        description: "Measures vitamin D levels to assess deficiency.",
        features: ["Digital Report", "Home Collection"],
        popular: false
    },
    {
        _id: 10,
        name: "Vitamin B12 Test",
        category: "Nutrition",
        price: 700,
        discountedPrice: 600,
        time: "4-6 hours",
        description: "Checks vitamin B12 level for energy and nerve health.",
        features: ["Quick Result", "Lab Certified"],
        popular: false
    },

    // General
    {
        _id: 11,
        name: "Urine Routine Test",
        category: "General",
        price: 300,
        discountedPrice: 250,
        time: "2-4 hours",
        description: "Detects infections or abnormalities in urine.",
        features: ["Easy Collection", "Fast Result"],
        popular: false
    },
    {
        _id: 12,
        name: "Stool Routine Test",
        category: "General",
        price: 400,
        discountedPrice: 350,
        time: "4-6 hours",
        description: "Detects digestive issues or infections.",
        features: ["Home Collection Available", "Certified Lab"],
        popular: false
    },

    // Infectious Disease
    {
        _id: 13,
        name: "COVID-19 PCR Test",
        category: "Infectious Disease",
        price: 1500,
        discountedPrice: 1300,
        time: "12-24 hours",
        description: "Detects active COVID-19 infection.",
        features: ["Fast Result", "Certified PCR Lab"],
        popular: true
    },
    {
        _id: 14,
        name: "Hepatitis B Test",
        category: "Infectious Disease",
        price: 1000,
        discountedPrice: 850,
        time: "6-8 hours",
        description: "Checks Hepatitis B infection status.",
        features: ["Home Sample Collection", "Doctor Consultation"],
        popular: false
    },

    // Nephrology
    {
        _id: 15,
        name: "Kidney Function Test (KFT)",
        category: "Nephrology",
        price: 1200,
        discountedPrice: 1000,
        time: "6-8 hours",
        description: "Checks kidney health through blood markers.",
        features: ["Trusted Lab", "Home Pickup Available"],
        popular: true
    },

    // Pancreatic
    {
        _id: 16,
        name: "Amylase Test",
        category: "Pancreatic",
        price: 800,
        discountedPrice: 700,
        time: "4-6 hours",
        description: "Evaluates pancreatic enzyme levels.",
        features: ["Fast & Accurate", "Home Collection"],
        popular: false
    },

    // Oncology
    {
        _id: 17,
        name: "PSA Test",
        category: "Oncology",
        price: 1500,
        discountedPrice: 1300,
        time: "6-8 hours",
        description: "Screening for prostate cancer.",
        features: ["Certified Lab", "Accurate Result"],
        popular: true
    },

    // Toxicology
    {
        _id: 18,
        name: "Drug Screening Test",
        category: "Toxicology",
        price: 2000,
        discountedPrice: 1700,
        time: "24 hours",
        description: "Detects presence of drugs in blood or urine.",
        features: ["Fast Result", "Confidential Report"],
        popular: true
    },

    // Extra General / Cardiac
    {
        _id: 19,
        name: "ECG Test",
        category: "Cardiac",
        price: 800,
        discountedPrice: 700,
        time: "1-2 hours",
        description: "Measures electrical activity of the heart.",
        features: ["Immediate Result", "Certified Technician"],
        popular: false
    },
    {
        _id: 20,
        name: "Iron Studies",
        category: "Hematology",
        price: 900,
        discountedPrice: 750,
        time: "4-6 hours",
        description: "Measures iron, ferritin, and TIBC levels in blood.",
        features: ["Home Collection", "Certified Lab"],
        popular: false
    }
];










// test book kai tu addto cart ka page pe chale 
// gaye ab mujhe cart pe full test detail aye 
// jo detail test ka waqt thi 
// us mei confirmation test ka button bhi ho