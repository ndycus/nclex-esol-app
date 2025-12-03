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
            },
            pt: {
                text: "Um enfermeiro está cuidando de um cliente que está recebendo <span class='vocab-word' data-word='warfarin'>varfarina</span>. Qual dos seguintes valores laboratoriais o enfermeiro deve monitorar?",
                options: ["PT/INR", "aPTT", "Hemoglobina", "Plaquetas"],
                rationale: "A varfarina é um anticoagulante. O teste PT/INR mede quanto tempo o sangue leva para coagular. Este é o teste específico usado para monitorar a terapia com varfarina.",
                vocab: { "warfarin": "Um medicamento usado para prevenir coágulos sanguíneos prejudiciais." }
            },
            tl: {
                text: "Ang isang nars ay nag-aalaga sa isang kliyente na tumatanggap ng <span class='vocab-word' data-word='warfarin'>warfarin</span>. Alin sa mga sumusunod na halaga ng laboratoryo ang dapat subaybayan ng nars?",
                options: ["PT/INR", "aPTT", "Hemoglobin", "Platelets"],
                rationale: "Ang warfarin ay isang anticoagulant. Sinusukat ng pagsusulit sa PT/INR kung gaano katagal bago mamuo ang dugo. Ito ang partikular na pagsusuring ginagamit upang subaybayan ang therapy ng warfarin.",
                vocab: { "warfarin": "Isang gamot na ginagamit upang maiwasan ang mapaminsalang pamumuo ng dugo." }
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
            },
            pt: {
                text: "Um enfermeiro está se preparando para <span class='vocab-word' data-word='ambulate'>deambular</span> um cliente que esteve em repouso no leito. Qual ação o enfermeiro deve tomar primeiro?",
                options: ["Aplicar um cinto de marcha", "Avaliar a pressão arterial", "Balançar as pernas do cliente", "Ajudar a ficar de pé"],
                rationale: "Balançar as pernas permite que a pressão arterial se estabilize antes de ficar de pé. Isso ajuda a prevenir tonturas e quedas.",
                vocab: { "ambulate": "Caminhar ou mover-se." }
            },
            tl: {
                text: "Ang isang nars ay naghahanda na <span class='vocab-word' data-word='ambulate'>maglakad</span> sa isang kliyente na nakahiga sa kama. Aling aksyon ang dapat gawin muna ng nars?",
                options: ["Maglagay ng gait belt", "Suriin ang presyon ng dugo", "Ilawit ang mga binti ng kliyente", "Tumulong sa pagtayo"],
                rationale: "Ang paglawit ng mga binti ay nagpapahintulot sa presyon ng dugo na maging matatag bago tumayo. Nakakatulong ito na maiwasan ang pagkahilo at pagbagsak.",
                vocab: { "ambulate": "Maglakad o kumilos." }
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
            },
            pt: {
                text: "Um enfermeiro está avaliando um bebê de 6 meses. Qual achado o enfermeiro deve relatar ao provedor?",
                options: ["A fontanela posterior está fechada", "Sentado com apoio", "O peso ao nascer dobrou", "Atraso da cabeça ao sentar"],
                rationale: "O atraso da cabeça deve desaparecer aos 4-5 meses. Se ainda estiver presente aos 6 meses, pode indicar um atraso no desenvolvimento.",
                vocab: { "fontanel": "Ponto mole na cabeça de um bebê." }
            },
            tl: {
                text: "Sinusuri ng isang nars ang isang 6 na buwang gulang na sanggol. Aling paghahanap ang dapat iulat ng nars sa provider?",
                options: ["Ang posterior fontanel ay sarado", "Nakaupo na may suporta", "Ang timbang ng kapanganakan ay nadoble", "Pagkahuli ng ulo kapag hinila upang umupo"],
                rationale: "Ang pagkahuli ng ulo ay dapat mawala sa 4-5 na buwan. Kung naroroon pa rin ito sa 6 na buwan, maaari itong magpahiwatig ng pagkaantala sa pag-unlad.",
                vocab: { "fontanel": "Malambot na bahagi sa ulo ng sanggol." }
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
            },
            pt: {
                text: "Um cliente na UTI tem uma queda repentina na saturação de oxigênio. Qual é a ação prioritária do enfermeiro?",
                options: ["Chamar o provedor", "Verificar o equipamento", "Avaliar as vias aéreas do cliente", "Aumentar o fluxo de oxigênio"],
                rationale: "A prioridade é sempre avaliar o cliente primeiro (Vias Aéreas, Respiração, Circulação). Verifique se as vias aéreas estão desobstruídas antes de verificar o equipamento.",
                vocab: { "saturation": "A quantidade de oxigênio no sangue." }
            },
            tl: {
                text: "Ang isang kliyente sa ICU ay may biglaang pagbaba sa oxygen saturation. Ano ang priyoridad na aksyon ng nars?",
                options: ["Tumawag sa provider", "Suriin ang kagamitan", "Suriin ang daanan ng hangin ng kliyente", "Dagdagan ang daloy ng oxygen"],
                rationale: "Ang priyoridad ay palaging suriin muna ang kliyente (Airway, Breathing, Circulation). Suriin kung malinaw ang daanan ng hangin bago suriin ang kagamitan.",
                vocab: { "saturation": "Ang dami ng oxygen sa dugo." }
            }
        },
        correctIndex: 2
    },
    {
        id: 5,
        topic: "Cardiology",
        category: "medsurg",
        content: {
            en: {
                text: "A client is diagnosed with <span class='vocab-word' data-word='heart_failure'>heart failure</span>. Which symptom is most common?",
                options: ["Shortness of breath", "Increased appetite", "Dry skin", "Fever"],
                rationale: "Heart failure often causes fluid to build up in the lungs, leading to shortness of breath (dyspnea).",
                vocab: { "heart_failure": "A condition where the heart doesn't pump blood as well as it should." }
            },
            es: {
                text: "Un cliente es diagnosticado con <span class='vocab-word' data-word='heart_failure'>insuficiencia cardíaca</span>. ¿Qué síntoma es más común?",
                options: ["Falta de aliento", "Aumento del apetito", "Piel seca", "Fiebre"],
                rationale: "La insuficiencia cardíaca a menudo causa acumulación de líquido en los pulmones, lo que lleva a la falta de aliento (disnea).",
                vocab: { "heart_failure": "Una condición donde el corazón no bombea sangre tan bien como debería." }
            },
            ht: {
                text: "Yo dyagnostike yon kliyan ak <span class='vocab-word' data-word='heart_failure'>ensifizans kadyak</span>. Ki sentòm ki pi komen?",
                options: ["Souf kout", "Ogmante apeti", "Po sèk", "Lafyèv"],
                rationale: "Ensifizans kadyak souvan lakòz likid rasanble nan poumon yo, sa ki lakòz souf kout (dispne).",
                vocab: { "heart_failure": "Yon kondisyon kote kè a pa ponpe san jan li ta dwe." }
            },
            pt: {
                text: "Um cliente é diagnosticado com <span class='vocab-word' data-word='heart_failure'>insuficiência cardíaca</span>. Qual sintoma é mais comum?",
                options: ["Falta de ar", "Aumento do apetite", "Pele seca", "Febre"],
                rationale: "A insuficiência cardíaca frequentemente causa acúmulo de líquido nos pulmões, levando à falta de ar (dispneia).",
                vocab: { "heart_failure": "Uma condição onde o coração não bombeia sangue tão bem quanto deveria." }
            },
            tl: {
                text: "Ang isang kliyente ay na-diagnose na may <span class='vocab-word' data-word='heart_failure'>heart failure</span>. Aling sintomas ang pinakakaraniwan?",
                options: ["Kapos sa paghinga", "Tumaas na gana", "Tuyong balat", "Lagnat"],
                rationale: "Ang pagkabigo sa puso ay madalas na nagiging sanhi ng pag-iipon ng likido sa mga baga, na humahantong sa igsi ng paghinga (dyspnea).",
                vocab: { "heart_failure": "Isang kondisyon kung saan ang puso ay hindi nagbobomba ng dugo nang maayos." }
            }
        },
        correctIndex: 0
    },
    {
        id: 6,
        topic: "Safety",
        category: "fundamentals",
        content: {
            en: {
                text: "Which is the most effective way to prevent the spread of infection?",
                options: ["Hand hygiene", "Wearing a mask", "Isolation", "Antibiotics"],
                rationale: "Hand hygiene (washing hands) is universally accepted as the single most effective method to prevent the spread of infection.",
                vocab: { "hygiene": "Conditions or practices conducive to maintaining health and preventing disease." }
            },
            es: {
                text: "¿Cuál es la forma más efectiva de prevenir la propagación de infecciones?",
                options: ["Higiene de manos", "Usar una mascarilla", "Aislamiento", "Antibióticos"],
                rationale: "La higiene de manos es universalmente aceptada como el método más efectivo para prevenir la propagación de infecciones.",
                vocab: { "hygiene": "Condiciones o prácticas para mantener la salud." }
            },
            ht: {
                text: "Ki fason ki pi efikas pou anpeche enfeksyon gaye?",
                options: ["Ijyèn men", "Mete yon mask", "Izolasyon", "Antibyotik"],
                rationale: "Lave men se metòd ki pi efikas pou anpeche enfeksyon gaye.",
                vocab: { "hygiene": "Pratik pou kenbe sante." }
            },
            pt: {
                text: "Qual é a maneira mais eficaz de prevenir a propagação de infecções?",
                options: ["Higiene das mãos", "Usar máscara", "Isolamento", "Antibióticos"],
                rationale: "A higiene das mãos é universalmente aceita como o método mais eficaz para prevenir a propagação de infecções.",
                vocab: { "hygiene": "Práticas para manter a saúde." }
            },
            tl: {
                text: "Alin ang pinaka-epektibong paraan upang maiwasan ang pagkalat ng impeksyon?",
                options: ["Kalinisan ng kamay", "Pagsusuot ng maskara", "Pagbubukod", "Antibiotics"],
                rationale: "Ang kalinisan ng kamay ay ang pinaka-epektibong paraan upang maiwasan ang pagkalat ng impeksyon.",
                vocab: { "hygiene": "Mga gawi upang mapanatili ang kalusugan." }
            }
        },
        correctIndex: 0
    }
];
