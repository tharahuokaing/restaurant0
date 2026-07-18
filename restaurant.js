// Complete inventory database matching all individual routing systems
const branchData = [
    { id: 1, nameKh: "សាខាមុខកំពូល", nameEn: "Muk Kampoul Branch", provinceKh: "ខេត្តកណ្តាល", provinceEn: "Kandal Province", url: "https://tharahuokaing.github.io/restaurant1/" },
    { id: 2, nameKh: "សាខាបាភ្នំ", nameEn: "Ba Phnom Branch", provinceKh: "ខេត្តព្រៃវែង", provinceEn: "Prey Veng Province", url: "https://tharahuokaing.github.io/restaurant2/" },
    { id: 3, nameKh: "សាខាអូរស្មាច់", nameEn: "O'Smach Branch", provinceKh: "ខេត្តឧត្តមានជ័យ", provinceEn: "Oddar Meanchey Province", url: "https://tharahuokaing.github.io/restaurant3/" },
    { id: 4, nameKh: "សាខាកោះញែក", nameEn: "Koh Nhek Branch", provinceKh: "ខេត្តមណ្ឌលគិរី", provinceEn: "Mondulkiri Province", url: "https://tharahuokaing.github.io/restaurant4/" },
    { id: 5, nameKh: "សាខាកំពង់ត្រឡាច", nameEn: "Kampong Tralach Branch", provinceKh: "ខេត្តកំពង់ឆ្នាំង", provinceEn: "Kampong Chhnang Province", url: "https://tharahuokaing.github.io/restaurant5/" },
    { id: 6, nameKh: "សាខាឯកភ្នំ", nameEn: "Ek Phnom Branch", provinceKh: "ខេត្តបាត់ដំបង", provinceEn: "Battambang Province", url: "https://tharahuokaing.github.io/restaurant6/" },
    { id: 7, nameKh: "សាខាឆ្លូង", nameEn: "Chhlong Branch", provinceKh: "ខេត្តក្រចេះ", provinceEn: "Kratie Province", url: "https://tharahuokaing.github.io/restaurant7/" },
    { id: 8, nameKh: "សាខាជុំគីរី", nameEn: "Chhouk Giri Branch", provinceKh: "ខេត្តកំពត", provinceEn: "Kampot Province", url: "https://tharahuokaing.github.io/restaurant8/" },
    { id: 9, nameKh: "សាខាចំការលើ", nameEn: "Chamkar Leu Branch", provinceKh: "ខេត្តកំពង់ចាម", provinceEn: "Kampong Cham Province", url: "https://tharahuokaing.github.io/restaurant9/" },
    { id: 10, nameKh: "សាខាស្ទោង", nameEn: "Stoung Branch", provinceKh: "ខេត្តកំពង់ធំ", provinceEn: "Kampong Thom Province", url: "https://tharahuokaing.github.io/restaurant10/" },
    { id: 11, nameKh: "សាខាអូរជុំ", nameEn: "O'Chum Branch", provinceKh: "ខេត្តរតនគិរី", provinceEn: "Ratanakiri Province", url: "https://tharahuokaing.github.io/restaurant11/" },
    { id: 12, nameKh: "សាខាអូររាំង", nameEn: "O'Reang Branch", provinceKh: "ខេត្តមណ្ឌលគិរី", provinceEn: "Mondulkiri Province", url: "https://tharahuokaing.github.io/restaurant12/" },
    { id: 13, nameKh: "សាខាភ្នំក្រវាញ", nameEn: "Phnum Kravanh Branch", provinceKh: "ខេត្តពោធិ៍សាត់", provinceEn: "Pursat Province", url: "https://tharahuokaing.github.io/restaurant13/" },
    { id: 14, nameKh: "សាខាបាទី", nameEn: "Bati Branch", provinceKh: "ខេត្តតាកែវ", provinceEn: "Takeo Province", url: "https://tharahuokaing.github.io/restaurant14/" },
    { id: 15, nameKh: "សាខាស្ទឹងហាវ", nameEn: "Stung Hav Branch", provinceKh: "ខេត្តព្រះសីហនុ", provinceEn: "Preah Sihanouk Province", url: "https://tharahuokaing.github.io/restaurant15/" },
    { id: 16, nameKh: "សាខាថ្មពួក", nameEn: "Thmar Pouk Branch", provinceKh: "ខេត្តបន្ទាយមានជ័យ", provinceEn: "Banteay Meanchey Province", url: "https://tharahuokaing.github.io/restaurant16/" },
    { id: 17, nameKh: "សាខារមាសហែក", nameEn: "Romeas Haek Branch", provinceKh: "ខេត្តស្វាយរៀង", provinceEn: "Svay Rieng Province", url: "https://tharahuokaing.github.io/restaurant17/" },
    { id: 18, nameKh: "សាខាភ្នំព្រាល", nameEn: "Phnum Preal Branch", provinceKh: "ខេត្តប៉ៃលិន", provinceEn: "Pailin Province", url: "https://tharahuokaing.github.io/restaurant18/" },
    { id: 19, nameKh: "សាខាសៀមប៉ាង", nameEn: "Siem Pang Branch", provinceKh: "ខេត្តស្ទឹងត្រែង", provinceEn: "Stung Treng Province", url: "https://tharahuokaing.github.io/restaurant19/" },
    { id: 20, nameKh: "សាខាអង្គរធំ", nameEn: "Angkor Thom Branch", provinceKh: "ខេត្តសៀមរាប", provinceEn: "Siem Reap Province", url: "https://tharahuokaing.github.io/restaurant20/" },
    { id: 21, nameKh: "សាខាអូរជ្រៅ", nameEn: "Ou Chrov Branch", provinceKh: "ក្រុងប៉ោយប៉ែត", provinceEn: "Poipet City", url: "https://tharahuokaing.github.io/restaurant21/" },
    { id: 22, nameKh: "សាខាចំការមន", nameEn: "Chamkar Mon Branch", provinceKh: "ក្រុងភ្នំពេញ", provinceEn: "Phnom Penh City", url: "https://tharahuokaing.github.io/restaurant22/" }
];

let currentLang = 'km';

// Initialize Layout and render Cards
document.addEventListener("DOMContentLoaded", () => {
    renderGrid(branchData);
});

function renderGrid(data) {
    const container = document.getElementById("restaurantGrid");
    container.innerHTML = "";
    
    document.getElementById("branchCount").innerText = data.length;

    data.forEach(branch => {
        const card = document.createElement("div");
        card.className = "restaurant-card bg-white rounded-2xl border border-gray-100 p-6 flex flex-col justify-between transition-all duration-300";
        
        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between mb-3">
                    <span class="text-[10px] font-bold tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/40">
                        HK-${String(branch.id).padStart(2, '0')}
                    </span>
                    <span class="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Open Now
                    </span>
                </div>
                
                <h4 class="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition mb-1">
                    <span class="card-lang-km">${branch.nameKh}</span>
                    <span class="card-lang-en hidden">${branch.nameEn}</span>
                </h4>
                
                <p class="text-xs text-gray-500 font-medium mb-4">
                    <span class="card-lang-km">📍 ${branch.provinceKh}, ព្រះរាជាណាចក្រកម្ពុជា</span>
                    <span class="card-lang-en hidden">📍 ${branch.provinceEn}, Cambodia</span>
                </p>

                <div class="text-xs text-gray-600 space-y-2 mb-6 pt-3 border-t border-gray-100 leading-relaxed">
                    <p class="card-lang-km">បទពិសោធន៍ម្ហូបអាហារប្លែកៗប្រចាំតំបន់ និងសេវាកម្មដ៏ល្អឥតខ្ចោះរង់ចាំលោកអ្នក។</p>
                    <p class="card-lang-en hidden">Exceptional regional gastronomic experiences paired with luxury grade five-star amenities await you.</p>
                </div>
            </div>

            <a href="${branch.url}" target="_blank" rel="noopener noreferrer" class="branch-action-btn block w-full py-2.5 px-4 text-center rounded-xl text-xs font-bold transition-all duration-200">
                <span class="card-lang-km">ចូលទៅកាន់គេហទំព័រសាខា ➔</span>
                <span class="card-lang-en hidden">Explore Branch Site ➔</span>
            </a>
        `;
        container.appendChild(card);
    });

    updateCardLanguages();
}

function filterBranches() {
    const query = document.getElementById("branchSearch").value.toLowerCase().trim();
    const filtered = branchData.filter(b => 
        b.nameKh.toLowerCase().includes(query) || 
        b.nameEn.toLowerCase().includes(query) || 
        b.provinceKh.toLowerCase().includes(query) || 
        b.provinceEn.toLowerCase().includes(query)
    );
    renderGrid(filtered);
}

function setLanguage(lang) {
    currentLang = lang;
    if(lang === 'km') {
        document.querySelectorAll('.lang-km').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.lang-en').forEach(el => el.classList.add('hidden'));
    } else {
        document.querySelectorAll('.lang-km').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.lang-en').forEach(el => el.classList.remove('hidden'));
    }
    updateCardLanguages();
}

function updateCardLanguages() {
    if(currentLang === 'km') {
        document.querySelectorAll('.card-lang-km').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.card-lang-en').forEach(el => el.classList.add('hidden'));
    } else {
        document.querySelectorAll('.card-lang-km').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.card-lang-en').forEach(el => el.classList.remove('hidden'));
    }
}
