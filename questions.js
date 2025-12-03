const questions = [
    {
        id: 1,
        topic: "Pharmacology",
        category: "medsurg",
        content: {
            en: {
                text: "A nurse is caring for a client who is receiving <span class='vocab-word' data-word='warfarin'>warfarin</span>. Which of the following laboratory values should the nurse monitor?",
                options: ["PT/INR", "aPTT", "Hemoglobin", "Platelets"],
                rationale: "Warfarin is an anticoagulant (blood thinner). The PT/INR test measures how long it takes blood to clot. This is the specific test used to monitor warfarin therapy.",
                vocab: { "warfarin": "A medicine used to prevent harmful blood clots." }
            },
            es: {
                text: "Una enfermera atiende a un cliente que recibe <span class='vocab-word' data-word='warfarin'>warfarina</span>. ¿Cuál de los siguientes valores de laboratorio debe monitorear la enfermera?",
                options: ["PT/INR", "aPTT", "Hemoglobina", "Plaquetas"],
                rationale: "La warfarina es un anticoagulante. La prueba PT/INR mide cuánto tarda la sangre en coagularse. Esta es la prueba específica para monitorear la terapia con warfarina.",
                vocab: { "warfarin": "Un medicamento usado para prevenir coágulos sanguíneos dañinos." }
            },
            ht: {
                text: "Yon enfimyè ap pran swen yon kliyan k ap resevwa <span class='vocab-word' data-word='warfarin'>warfarin</span>. Ki valè laboratwa enfimyè a ta dwe kontwole?",
                options: ["PT/INR", "aPTT", "Emoglobin", "Plakèt"],
                rationale: "Warfarin se yon antikoagilan (san eklèsi). Tès PT/INR la mezire konbyen tan li pran pou san kayo. Sa a se tès espesifik yo itilize pou kontwole terapi warfarin.",
                vocab: { "warfarin": "Yon medikaman yo itilize pou anpeche boul san danjere." }
            }
        },
        correctIndex: 0
    },
    {
        id: 2,
        topic: "Fundamentals",
        category: "fundamentals",
        content: {
            en: {
                text: "A nurse is preparing to <span class='vocab-word' data-word='ambulate'>ambulate</span> a client who has been on bed rest. Which action should the nurse take first?",
                options: ["Apply a gait belt", "Assess blood pressure", "Dangle the client's legs", "Assist to stand"],
                rationale: "Dangling the legs allows the blood pressure to stabilize before standing. This helps prevent dizziness and falls.",
                vocab: { "ambulate": "To walk or move about." }
            },
            es: {
                text: "Una enfermera se prepara para <span class='vocab-word' data-word='ambulate'>deambular</span> a un cliente que ha estado en reposo en cama. ¿Qué acción debe tomar primero?",
                options: ["Aplicar cinturón de marcha", "Evaluar presión arterial", "Colgar las piernas del cliente", "Ayudar a pararse"],
                rationale: "Colgar las piernas permite que la presión arterial se estabilice antes de pararse. Esto ayuda a prevenir mareos y caídas.",
                vocab: { "ambulate": "Caminar o moverse." }
            },
            ht: {
                text: "Yon enfimyè ap prepare pou <span class='vocab-word' data-word='ambulate'>fè mache</span> yon kliyan ki te nan kabann. Ki aksyon enfimyè a ta dwe pran an premye?",
                options: ["Mete yon senti mache", "Tcheke tansyon", "Pann janm kliyan an", "Ede kanpe"],
                rationale: "Pann janm yo pèmèt tansyon an estabilize anvan kanpe. Sa ede anpeche vètij ak tonbe.",
                vocab: { "ambulate": "Mache oswa deplase." }
            }
        },
        correctIndex: 2
    },
    {
        id: 3,
        topic: "Pediatrics",
        category: "pediatrics",
        content: {
            en: {
                text: "A nurse is assessing a 6-month-old infant. Which finding should the nurse report to the provider?",
                options: ["Posterior fontanel is closed", "Sitting with support", "Birth weight has doubled", "Head lag when pulled to sit"],
                rationale: "Head lag (the head falling back) should be gone by 4-5 months. If it is still present at 6 months, it may indicate a developmental delay or neurological problem.",
                vocab: { "fontanel": "Soft spot on a baby's head." }
            },
            es: {
                text: "Una enfermera evalúa a un bebé de 6 meses. ¿Qué hallazgo debe informar al proveedor?",
                options: ["La fontanela posterior está cerrada", "Sentado con apoyo", "El peso al nacer se ha duplicado", "Retraso de la cabeza al sentarse"],
                rationale: "El retraso de la cabeza debe desaparecer a los 4-5 meses. Si todavía está presente a los 6 meses, puede indicar un retraso en el desarrollo.",
                vocab: { "fontanel": "Punto blando en la cabeza de un bebé." }
            },
            ht: {
                text: "Yon enfimyè ap evalye yon tibebe 6 mwa. Ki rezilta enfimyè a ta dwe rapòte bay doktè a?",
                options: ["Fontanèl dèyè a fèmen", "Chita ak sipò", "Pwa nesans la double", "Tèt la tonbe dèyè lè yo rale l pou chita"],
                rationale: "Tèt la tonbe dèyè ta dwe disparèt nan 4-5 mwa. Si li toujou la nan 6 mwa, li ka endike yon reta nan devlopman.",
                vocab: { "fontanel": "Pwen mou sou tèt yon ti bebe." }
            }
        },
        correctIndex: 3
    },
    {
        id: 4,
        topic: "Critical Care",
        category: "critical",
        content: {
            en: {
                text: "A client in the ICU has a sudden drop in oxygen saturation. What is the nurse's priority action?",
                options: ["Call the provider", "Check the equipment", "Assess the client's airway", "Increase oxygen flow"],
                rationale: "The priority is always to assess the client first (Airway, Breathing, Circulation). Check if the airway is clear before checking equipment or calling the doctor.",
                vocab: { "saturation": "The amount of oxygen in the blood." }
            },
            es: {
                text: "Un cliente en la UCI tiene una caída repentina en la saturación de oxígeno. ¿Cuál es la acción prioritaria de la enfermera?",
                options: ["Llamar al proveedor", "Revisar el equipo", "Evaluar la vía aérea del cliente", "Aumentar el flujo de oxígeno"],
                rationale: "La prioridad es siempre evaluar al cliente primero (Vía aérea, Respiración, Circulación). Verifique si la vía aérea está despejada antes de revisar el equipo.",
                vocab: { "saturation": "La cantidad de oxígeno en la sangre." }
            },
            ht: {
                text: "Yon kliyan nan ICU gen yon gout toudenkou nan saturation oksijèn. Ki aksyon priyorite enfimyè a?",
                options: ["Rele doktè a", "Tcheke ekipman an", "Evalye pasaj lè kliyan an", "Ogmante koule oksijèn"],
                rationale: "Priyorite a se toujou evalye kliyan an premye (Pasaj lè, Respirasyon, Sikilasyon). Tcheke si pasaj lè a klè anvan ou tcheke ekipman an.",
                vocab: { "saturation": "Kantite oksijèn nan san an." }
            }
        },
        correctIndex: 2
    }
];
