(function(){
var lang='en';
var extraCount=0;
var debtCount=0;
var debts=[];

var T={
en:{
  title:"Family Financial Plan",sub:"Your complete guide to financial freedom",langBtn:"한국어로 보기",
  tabs:["💰 Budget","💳 Debts","📊 Summary","❄️ Snowball","📋 Your Plan","🎉 Debt Free Plan","📈 Invest"],
  tip0title:"📋 Step 1: Enter Your Monthly Income & Expenses",
  tip0body:"Fill in all the fields below. Be honest and include everything. This gives us the full picture of your finances so we can build your plan.",
  tip1title:"📋 Step 2: List All Your Debts",
  tip1body:"Add each debt one by one. Include the name, total amount owed, and minimum monthly payment. Don't skip any — even small ones matter.",
  tip2title:"❄️ Dave Ramsey's Debt Snowball Method",
  tip2body:"Pay debts from SMALLEST to LARGEST balance — not by interest rate. Pay minimums on all debts, then attack the smallest one with all extra money. When it's gone, roll that payment to the next. This builds momentum and motivation!",
  snowballMainTitle:"❄️ The Debt Snowball - How to Win",snowballMainBody:"Dave Ramsey's proven method: Pay smallest debts first to build momentum. Become debt-free. Then invest and build wealth.",
  snowballWorks:"💡 How It Works",snowballWorksBody:"1. List debts: Smallest balance to largest\n2. Pay minimums: On everything\n3. Attack smallest: Put all extra money here\n4. Snowball effect: When paid off, roll payment to next\n5. Repeat: Until all debt is gone",
  snowballWhy:"🎯 Why Smallest First?",snowballWhyBody:"\"Personal finance is 80% behavior, 20% math.\" — Dave Ramsey\n\nPaying the smallest debt first gives you a quick WIN. You see progress fast. That feeling motivates you to keep going. It's psychological, not mathematical. Like a snowball rolling downhill — it starts small but grows bigger and faster with every debt you eliminate.",
  snowballEliminate:"🚫 Why You Must Eliminate Debt",snowballEliminateBody:"Debt steals your future. Every dollar in interest payments is money that should go toward YOUR dreams — a home, retirement, security.\n\nYou work hard. Your money should work for you, not the bank.",
  snowballWealth:"✅ After Debt: The Path to Wealth",snowballWealthBody:"Once debt-free, take that monthly payment and invest it. $675/month in VOO for 15 years = $250,000+. That's real wealth. That's financial freedom.",
  tip3title:"📋 Dave Ramsey's Baby Steps After Debt",
  tip3body:"Once your debts are paid off, take the money you were throwing at debt and redirect it into savings and investing. Here's the order Dave Ramsey recommends.",
  tip4title:"⏰ Why You Need to Start Now (Even at 50)",
  tip4body:"You may have 15-20 years before retirement. That's enough time for smart investing to make a real difference. Even $200/month invested consistently can grow to $80,000+ in 15 years. The key is starting — today is always better than tomorrow.",
  income:"Monthly Income",expenses:"Monthly Expenses",
  dad:"Dad's Monthly Income",otherIncome:"Other Income (0 if none)",
  rent:"Rent / Mortgage",elec:"Utilities",mom:"Mom's Allowance",
  insurance:"Insurance",phone:"Phone / Internet",misc:"Personal / Miscellaneous",
  totalEssentials:"Total Essentials",
  summaryTitle:"Financial Summary",summaryDesc:"Complete breakdown: Where your money comes from, where it goes, and what's left for debt & investing.",
  planTitle:"Your Realistic Financial Plan",planDesc:"Based on your income, expenses, and debts - here's your monthly breakdown and path to debt freedom.",
  planIncomeLabel:"Monthly Income",planTotalIncome:"Total Income",
  planEssentialsLabel:"Monthly Essentials",planEssentialExp:"Essential Expenses",planAvailable:"Money Available",planDebtPayments:"Min Monthly Debt Payments",planLeftover:"Money Left for Extra Payoff",
  accelerateTitle:"⚡ Accelerate Your Payoff",availableForExtra:"Money Available for Extra Payoff",extraPayment:"Extra Monthly Payment ($)",remainingAfter:"Remaining After Extra Payment",accelerateNote:"Enter how much extra you'll put toward debt each month. This amount will attack your smallest debt first, then roll to the next once paid off.",payoffIn:"Payoff in",monthsSaved:"months saved",noUnpaidDebts:"All debts paid off! Great job!",
  miscNote:"💡 This is fun money for each person. Dave Ramsey recommends $25-50/month per person for personal spending (coffee, hobby, small treats). Adjust based on your family's needs.",
  planDebtListTitle:"Your Debts (Smallest to Largest)",planDebtListDesc:"Pay minimum on all debts, then attack the smallest one with extra money. When paid off, roll that payment to the next.",
  planPaidReminder:"Mark each debt as \"Paid Off\" in the Debts tab when you finish paying it. This will update your payoff schedule.",
  planVooLabel:"After Debt: Monthly VOO Investment",planAmountInvest:"Amount to Invest",planVooNote:"Once debts are paid, invest this monthly into VOO for your retirement.",
  addExpense:"+ Add Expense",expName:"Expense name",totIncome:"Total Income",totExp:"Total Expenses",
  leftover:"Monthly Leftover",surplus:"SURPLUS ✅",deficit:"DEFICIT ⚠️",
  goodMsg:"✅ You have money left over! This extra goes toward debt payoff.",
  badMsg:"⚠️ Spending more than you earn. You must reduce expenses first.",
  addDebt:"+ Add a Debt",totalDebt:"Total Debt",minPayments:"Total Min. Payments/mo",extraAvail:"Extra Available for Debt",
  debtTitle:"Debt",debtDesc:"All debts from your Debts tab listed below:",totalDebtPayments:"Total Monthly Debt Payments",moneyLeft:"Money Left After All Expenses & Debt",debtOverview:"Total Debt Overview",recommendedPayment:"Recommended Monthly Payment",recommendedNote:"Min payments + 50% of extra money",
  debtName:"Debt Name",debtBalance:"Balance Owed ($)",debtMin:"Min. Monthly Payment ($)",
  debtTypes:["Credit Card","Medical Bill","Car Loan","Personal Loan","Other"],
  snowballEmpty:"Add your debts in the Debts tab first, then come back here to see your payoff order.",
  payoffTime:"Estimated Total Payoff Time",totalInterest:"Total Interest Paid",monthlyFreed:"Monthly Payment Freed After Payoff",
  snowballTipTitle:"💡 Why Smallest First?",
  snowballTipBody:"Dave Ramsey says: personal finance is 80% behavior, 20% math. Paying off the smallest debt first gives you a quick WIN. That win motivates you to keep going. It's like a snowball rolling down a hill — it gets bigger and faster with every debt you knock out.",
  debtFreePlanTitle:"🎉 Your Debt Free Plan",savingsCalc:"Savings Calculator",
  monthlySave:"Monthly Amount to Save ($)",saveYears:"Years",totalSaved:"Total Saved",withInterest:"With ~7% Returns",
  dfpIncomeLabel:"Monthly Income",dfpExpensesLabel:"Monthly Expenses",dfpTotalIncome:"Total Income",dfpTotalEssentials:"Total Essentials",
  dfpDebtStatus:"✅ Debt Status",dfpNoDebt:"NO DEBT 🎉",
  dfpAllocationTitle:"Monthly Allocation (After Essentials)",dfpAllocationDesc:"Based on Dave Ramsey's Baby Steps, here's how to allocate your leftover money:",
  dfpLeftover:"Total Available",dfpInvestPct:"15% → Investing (Step 4)",dfpInvestNote:"VOO, retirement accounts, building long-term wealth",
  dfpSavingsPct:"Remaining → Savings & Goals",dfpSavingsNote:"Emergency fund maintenance, college fund, home payoff, quality of life",
  investTitle:"Investing for the Future",vooTitle:"VOO — Vanguard S&P 500 ETF",
  vooDesc:"VOO tracks the 500 largest US companies (Apple, Microsoft, Google, Amazon...). When America's economy grows, VOO grows. It's the most recommended ETF by financial experts for everyday investors.",
  yearlyReturns:"Yearly Returns",tenYrAvg:"10-Year Avg Annual Return",expenseRatio:"Expense Ratio (Annual Fee)",
  tenKexample:"$10,000 invested 10 years ago =",vooCalc:"VOO Investment Calculator",
  investMonthly:"Monthly Investment ($)",investYears:"Years to Invest",
  invested:"You Invested",grownTo:"Grown To (~10%)",
  investNote:"Based on historical ~10% annual average. Past performance does not guarantee future results.",
  months:"months",yrs:"yrs",remove:"✕",
  markedPaid:"✓ Paid Off",markPaid:"✓ Mark Paid",
  noDebtsAdded:"No debts added yet. Add debts in the Debts tab.",
  noActiveDebts:"No active debts. Great job!",
  allDebtsPaidOff:"🎉 All debts paid off! Go to the Debt Free Plan tab to start your next chapter.",
  balance:"Balance",paidOffLabel:"✓ PAID OFF",minimumPayment:"Minimum Monthly Payment",
  withoutExtra:"Without Extra",withExtra:"With Extra",
  savingsSteps:[
    {icon:"🚨",title:"Baby Step 1: $1,000 Emergency Fund",body:"Before attacking debt, save $1,000 in a separate savings account. This is your safety net for small surprises — flat tire, small medical bill. Don't touch it except for real emergencies.",highlight:"Goal: Save $1,000 first. No exceptions."},
    {icon:"💳",title:"Baby Step 2: Pay Off All Debt (Snowball)",body:"Use the Snowball tab to pay off every debt from smallest to largest. Put every extra dollar toward debt while paying minimums on everything else.",highlight:"This is where you are now. Focus here!"},
    {icon:"🛡️",title:"Baby Step 3: Full Emergency Fund (3-6 Months)",body:"Once debt-free, build your emergency fund to cover 3-6 months of living expenses. If monthly expenses are $4,500, your goal is $13,500-$27,000 saved.",highlight:"This protects you if Dad loses income or has a health issue."},
    {icon:"📈",title:"Baby Step 4: Invest 15% of Income",body:"Put 15% of your monthly income into retirement investments. With $4,500/month income, that's $675/month. Use VOO in a brokerage account, or a 401k/IRA if available.",highlight:"$675/month in VOO for 15 years could grow to $250,000+"},
    {icon:"🏠",title:"Baby Step 5+: Build Wealth",body:"Keep investing, pay off your home if you have one, and build wealth. At this stage you have no debt, an emergency fund, and growing investments. You are financially free.",highlight:"This is the goal. Freedom from financial stress."}
  ],
  investOptions:[
    {icon:"📊",title:"VOO (Recommended #1)",body:"Vanguard S&P 500 ETF. Buy through any brokerage. Low 0.03% fee. Tracks 500 top US companies. Best for long-term 10+ year investing. Simply buy monthly and don't sell when market drops.",color:"rgba(74,222,128,.1)",border:"rgba(74,222,128,.25)"},
    {icon:"🏦",title:"High-Yield Savings Account",body:"For your emergency fund and short-term savings. Online banks like Ally or Marcus offer 4-5% interest — much better than regular bank savings. Safe, no risk, FDIC insured.",color:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.25)"},
    {icon:"📋",title:"IRA (Individual Retirement Account)",body:"A tax-advantaged retirement account. You can put up to $7,000/year in a Roth IRA (2024 limit). Money grows tax-free and you don't pay tax when you withdraw in retirement. Open at Fidelity, Vanguard, or Charles Schwab.",color:"rgba(167,139,250,.1)",border:"rgba(167,139,250,.25)"},
    {icon:"⚠️",title:"What to AVOID",body:"Don't put retirement money in: individual stocks you pick yourself, crypto (too risky for retirement), savings accounts at big banks (0.01% interest), or anything someone is pushing hard to sell you.",color:"rgba(248,113,113,.1)",border:"rgba(248,113,113,.25)"}
  ]
},
ko:{
  title:"가족 재정 계획",sub:"재정적 자유를 위한 완전한 가이드",langBtn:"Switch to English",
  tabs:["💰 예산","💳 부채","📊 요약","❄️ 스노우볼","📋 계획","🎉 부채 없는 계획","📈 투자"],
  tip0title:"📋 1단계: 월 수입과 지출 입력하기",
  tip0body:"아래의 모든 항목을 솔직하게 입력하세요. 하나도 빠뜨리지 마세요. 이 정보를 바탕으로 재정 계획을 세울 수 있습니다.",
  tip1title:"📋 2단계: 모든 부채 목록 작성하기",
  tip1body:"부채를 하나씩 추가하세요. 부채 이름, 총 금액, 최소 월 납부액을 입력하세요. 작은 것도 빠뜨리지 마세요.",
  tip2title:"❄️ 데이브 램지의 빚 스노우볼 방법",
  tip2body:"이자율이 아닌 금액 기준으로 가장 작은 부채부터 갚으세요. 모든 부채에 최소 납부액을 내고, 남은 돈은 모두 가장 작은 부채에 집중하세요. 하나씩 갚다 보면 눈덩이처럼 속도가 붙습니다!",
  snowballMainTitle:"❄️ 빚 스노우볼 - 승리하는 방법",snowballMainBody:"데이브 램지의 입증된 방법: 가장 작은 부채부터 상환하여 동력을 얻으세요. 완전히 빚에서 자유로워지세요. 그 다음 투자하고 부를 쌓으세요.",
  snowballWorks:"💡 작동 방식",snowballWorksBody:"1. 부채 나열: 작은 잔액부터 큰 잔액순\n2. 최소 납부액 지불: 모든 부채에 대해\n3. 가장 작은 것부터 공략: 여유 자금 전부 여기에 투자\n4. 스노우볼 효과: 하나씩 갚으면 다음 부채로 롤오버\n5. 반복: 모든 부채가 없어질 때까지",
  snowballWhy:"🎯 왜 작은 것부터 갚을까?",snowballWhyBody:"\"개인 재정은 80%가 행동, 20%가 지식입니다.\" — 데이브 램지\n\n가장 작은 부채를 먼저 갚으면 빠른 승리를 얻습니다. 진전을 빠르게 봅니다. 그 성취감이 계속 나아갈 동기를 줍니다. 수학적이 아니라 심리적입니다. 언덕을 굴러 내려가는 눈덩이처럼 — 작게 시작하지만 부채를 하나씩 없앨수록 더 크고 빨라집니다.",
  snowballEliminate:"🚫 부채를 제거해야 하는 이유",snowballEliminateBody:"부채는 당신의 미래를 빼앗습니다. 이자 납부에 드는 모든 돈은 당신의 꿈을 위해 쓰여야 할 돈입니다 — 집, 은퇴, 보안.\n\n당신은 열심히 일합니다. 당신의 돈은 당신을 위해 일해야 하고, 은행을 위해 일하면 안 됩니다.",
  snowballWealth:"✅ 부채 상환 후: 부를 쌓는 경로",snowballWealthBody:"부채가 없어지면, 월간 결제액을 투자하세요. 15년 동안 월 $675를 VOO에 투자하면 $250,000 이상이 됩니다. 이것이 진정한 부입니다. 이것이 재정적 자유입니다.",
  tip3title:"📋 부채 상환 후 데이브 램지의 다음 단계",
  tip3body:"모든 부채를 갚고 나면, 부채 상환에 쓰던 돈을 저축과 투자로 돌리세요. 데이브 램지가 권장하는 순서대로 따라 하세요.",
  tip4title:"⏰ 지금 당장 시작해야 하는 이유 (50대라도 늦지 않았습니다)",
  tip4body:"은퇴까지 15-20년이 남아 있습니다. 현명한 투자로 큰 차이를 만들 수 있는 충분한 시간입니다. 매달 $200만 꾸준히 투자해도 15년 후 $80,000 이상으로 불어날 수 있습니다. 중요한 것은 오늘 시작하는 것입니다.",
  income:"월 수입",expenses:"월 지출",
  dad:"아버지 월 수입",otherIncome:"기타 수입 (없으면 0)",
  rent:"집세",elec:"공과금",mom:"어머니 용돈",
  insurance:"보험료",phone:"휴대폰 / 인터넷",misc:"개인 / 기타",
  totalEssentials:"총 필수 지출",
  summaryTitle:"재정 요약",summaryDesc:"완전한 분석: 돈이 어디서 오고 어디로 가는지, 그리고 부채 상환과 투자를 위해 남은 돈은 얼마인지.",
  planTitle:"당신의 현실적인 재정 계획",planDesc:"수입, 지출, 부채를 바탕으로 한 월간 분석과 부채 상환 경로입니다.",
  planIncomeLabel:"월 수입",planTotalIncome:"총 수입",
  planEssentialsLabel:"월 필수 지출",planEssentialExp:"필수 지출",planAvailable:"이용 가능한 돈",planDebtPayments:"월간 최소 부채 납부액",planLeftover:"추가 상환에 사용 가능한 돈",
  accelerateTitle:"⚡ 상환 가속화",availableForExtra:"추가 상환에 사용 가능한 돈",extraPayment:"추가 월 상환액 ($)",remainingAfter:"추가 상환 후 남은 금액",accelerateNote:"매달 부채에 추가로 낼 금액을 입력하세요. 이 금액은 가장 작은 부채부터 공략한 후, 상환되면 다음 부채로 넘어갑니다.",payoffIn:"상환 예정",monthsSaved:"개월 단축",noUnpaidDebts:"모든 부채가 상환되었습니다. 축하합니다!",
  miscNote:"💡 이것은 각 사람을 위한 용돈입니다. 데이브 램지는 개인 지출(커피, 취미, 작은 사치)을 위해 한 달에 인당 $25-50을 권장합니다. 가족의 필요에 따라 조정하세요.",
  planDebtListTitle:"당신의 부채 (작은 것부터 큰 것순)",planDebtListDesc:"모든 부채에 최소 납부액을 내고, 가장 작은 부채에 여유 자금을 집중하세요. 갚으면 다음 부채로 롤오버하세요.",
  planPaidReminder:"부채 탭에서 각 부채를 \"상환 완료\"로 표시하면 상환 계획이 업데이트됩니다.",
  planVooLabel:"부채 상환 후: 월간 VOO 투자",planAmountInvest:"투자 금액",planVooNote:"부채를 모두 갚은 후, 이 금액을 매달 VOO에 투자하여 은퇴 준비를 하세요.",
  addExpense:"+ 지출 추가",expName:"지출 이름",totIncome:"총 수입",totExp:"총 지출",
  leftover:"월 잔액",surplus:"잉여금 ✅",deficit:"적자 ⚠️",
  goodMsg:"✅ 여유 자금이 있습니다! 이 돈을 부채 상환에 사용하세요.",
  badMsg:"⚠️ 수입보다 지출이 많습니다. 먼저 지출을 줄여야 합니다.",
  addDebt:"+ 부채 추가",totalDebt:"총 부채",minPayments:"월 최소 납부액 합계",extraAvail:"부채 상환에 쓸 수 있는 여유 자금",
  debtTitle:"부채",debtDesc:"부채 탭의 모든 부채가 아래 나열됩니다:",totalDebtPayments:"월간 총 부채 납부액",moneyLeft:"모든 지출 & 부채 후 남은 돈",debtOverview:"총 부채 현황",recommendedPayment:"추천 월간 결제액",recommendedNote:"최소 납부액 + 여유 자금의 50%",
  debtName:"부채 이름",debtBalance:"남은 금액 ($)",debtMin:"월 최소 납부액 ($)",
  debtTypes:["신용카드","의료비","자동차 할부","개인 대출","기타"],
  snowballEmpty:"먼저 '부채' 탭에서 부채를 추가한 후 여기서 상환 순서를 확인하세요.",
  payoffTime:"예상 총 상환 기간",totalInterest:"총 이자 비용",monthlyFreed:"상환 완료 후 확보되는 월 금액",
  snowballTipTitle:"💡 왜 작은 것부터 갚을까요?",
  snowballTipBody:"데이브 램지는 말합니다: 개인 재정은 80%가 행동이고 20%가 지식입니다. 가장 작은 부채를 먼저 갚으면 빠른 승리를 얻을 수 있습니다. 그 성취감이 계속 나아갈 동기를 줍니다. 언덕을 굴러 내려가는 눈덩이처럼 — 부채를 하나씩 없앨수록 더 크고 빠르게 굴러갑니다.",
  debtFreePlanTitle:"🎉 당신의 부채 없는 계획",savingsCalc:"저축 계산기",
  monthlySave:"월 저축 금액 ($)",saveYears:"기간 (년)",totalSaved:"총 저축 금액",withInterest:"연 7% 수익률 적용 시",
  dfpIncomeLabel:"월 수입",dfpExpensesLabel:"월 지출",dfpTotalIncome:"총 수입",dfpTotalEssentials:"총 필수 지출",
  dfpDebtStatus:"✅ 부채 상태",dfpNoDebt:"부채 없음 🎉",
  dfpAllocationTitle:"월간 자금 배분 (필수 지출 후)",dfpAllocationDesc:"데이브 램지의 베이비 스텝에 따라, 남은 돈을 다음과 같이 배분하세요:",
  dfpLeftover:"이용 가능한 총액",dfpInvestPct:"15% → 투자 (4단계)",dfpInvestNote:"VOO, 은퇴 계좌, 장기 부를 만들기",
  dfpSavingsPct:"나머지 → 저축 및 목표",dfpSavingsNote:"비상금 유지, 대학 자금, 주택 담보 대출 상환, 삶의 질 향상",
  investTitle:"미래를 위한 투자",vooTitle:"VOO — 뱅가드 S&P 500 ETF",
  vooDesc:"VOO는 미국 500대 기업(애플, 마이크로소프트, 구글, 아마존 등)을 추종합니다. 미국 경제가 성장하면 VOO도 성장합니다. 재정 전문가들이 일반 투자자에게 가장 많이 추천하는 ETF입니다.",
  yearlyReturns:"연간 수익률",tenYrAvg:"10년 평균 연간 수익률",expenseRatio:"연간 수수료",
  tenKexample:"10년 전 $10,000 투자 시 현재 가치",vooCalc:"VOO 투자 계산기",
  investMonthly:"월 투자 금액 ($)",investYears:"투자 기간 (년)",
  invested:"투자 원금",grownTo:"예상 수익 (~연 10%)",
  investNote:"역사적 연평균 약 10% 기준. 과거 실적이 미래 수익을 보장하지는 않습니다.",
  months:"개월",yrs:"년",remove:"✕",
  markedPaid:"✓ 상환 완료",markPaid:"✓ 상환 표시",
  noDebtsAdded:"아직 부채가 없습니다. 부채 탭에서 부채를 추가하세요.",
  noActiveDebts:"활성 부채가 없습니다. 잘하셨습니다!",
  allDebtsPaidOff:"🎉 모든 부채가 상환되었습니다! 부채 없는 계획 탭으로 이동하여 새로운 장을 시작하세요.",
  balance:"남은 금액",paidOffLabel:"✓ 상환 완료",minimumPayment:"월 최소 납부액",
  withoutExtra:"추가 없이",withExtra:"추가 포함",
  savingsSteps:[
    {icon:"🚨",title:"1단계: 비상금 $1,000 모으기",body:"부채를 갚기 전에 먼저 별도 통장에 $1,000을 모으세요. 이것은 작은 긴급 상황(타이어 펑크, 작은 병원비 등)에 대비한 안전망입니다. 진짜 긴급 상황이 아니면 절대 사용하지 마세요.",highlight:"목표: 먼저 $1,000 저축. 예외 없음."},
    {icon:"💳",title:"2단계: 모든 부채 상환 (스노우볼)",body:"스노우볼 탭을 활용해 가장 작은 것부터 모든 부채를 갚으세요. 나머지 부채에 최소 납부액을 내면서 여유 자금을 전부 가장 작은 부채에 집중하세요.",highlight:"지금 여기가 집중해야 할 단계입니다!"},
    {icon:"🛡️",title:"3단계: 완전한 비상금 (3-6개월치 생활비)",body:"부채를 다 갚은 후 3-6개월치 생활비를 비상금으로 모으세요. 월 지출이 $4,500이라면 $13,500~$27,000을 목표로 하세요.",highlight:"아버지가 일을 못 하게 되거나 건강 문제가 생겼을 때를 대비합니다."},
    {icon:"📈",title:"4단계: 수입의 15% 투자",body:"월 수입의 15%를 은퇴 투자에 넣으세요. 월 $4,500 수입이라면 $675입니다. 증권 계좌에서 VOO를 구매하거나, 401k 또는 IRA를 활용하세요.",highlight:"매달 $675를 VOO에 15년 투자하면 $250,000 이상으로 성장할 수 있습니다"},
    {icon:"🏠",title:"5단계 이후: 재산 쌓기",body:"계속 투자하고, 집이 있다면 주택 담보 대출을 갚고, 재산을 불려 나가세요. 이 단계에 이르면 부채가 없고, 비상금이 있고, 투자가 성장하고 있습니다. 재정적으로 자유롭습니다.",highlight:"이것이 목표입니다. 재정적 스트레스로부터의 자유."}
  ],
  investOptions:[
    {icon:"📊",title:"VOO (추천 1위)",body:"뱅가드 S&P 500 ETF. 어떤 증권 계좌에서도 구매 가능. 연 수수료 0.03%로 매우 저렴. 미국 500대 기업을 추종. 10년 이상 장기 투자에 최적. 매달 구매하고 시장이 하락해도 팔지 마세요.",color:"rgba(74,222,128,.1)",border:"rgba(74,222,128,.25)"},
    {icon:"🏦",title:"고금리 저축 계좌",body:"비상금과 단기 저축용. Ally, Marcus 같은 온라인 은행은 연 4-5% 이자를 제공합니다 — 일반 은행보다 훨씬 유리합니다. 안전하고 위험 없으며 FDIC 보험 적용.",color:"rgba(59,130,246,.1)",border:"rgba(59,130,246,.25)"},
    {icon:"📋",title:"IRA (개인 은퇴 계좌)",body:"세금 혜택이 있는 은퇴 계좌입니다. Roth IRA에 연간 최대 $7,000까지 납입 가능(2024년 기준). 돈이 세금 없이 성장하고, 은퇴 후 인출 시에도 세금을 내지 않습니다. Fidelity, Vanguard, 또는 Charles Schwab에서 개설하세요.",color:"rgba(167,139,250,.1)",border:"rgba(167,139,250,.25)"},
    {icon:"⚠️",title:"피해야 할 것들",body:"은퇴 자금으로 피해야 할 것: 직접 고른 개별 주식, 암호화폐(은퇴 자금에는 너무 위험), 대형 은행 저축 계좌(이자 0.01%), 또는 누군가가 강하게 권유하는 모든 것.",color:"rgba(248,113,113,.1)",border:"rgba(248,113,113,.25)"}
  ]
}
};

function el(id){return document.getElementById(id)}
function fmt(n){return '$'+Math.round(n).toLocaleString('en-US')}
function t(){return T[lang]}

function applyLang(){
  var tx=t();
  function set(id,val){if(el(id))el(id).textContent=val}
  function setHtml(id,val){if(el(id))el(id).innerHTML=val}
  set('main-title',tx.title);
  set('main-sub',tx.sub);
  set('lang-btn',tx.langBtn);
  var tabs=document.querySelectorAll('.tab-btn');
  tabs.forEach(function(b,i){b.textContent=tx.tabs[i]});
  set('tip0-title',tx.tip0title);set('tip0-body',tx.tip0body);
  set('tip1-title',tx.tip1title);set('tip1-body',tx.tip1body);
  set('tip2-title',tx.tip2title);set('tip2-body',tx.tip2body);
  set('lbl-snowball-main-title',tx.snowballMainTitle);set('lbl-snowball-main-body',tx.snowballMainBody);
  set('lbl-snowball-works',tx.snowballWorks);setHtml('lbl-snowball-works-body',tx.snowballWorksBody.split('\n').join('<br>'));
  set('lbl-snowball-why',tx.snowballWhy);setHtml('lbl-snowball-why-body',tx.snowballWhyBody.split('\n').join('<br>'));
  set('lbl-snowball-eliminate',tx.snowballEliminate);setHtml('lbl-snowball-eliminate-body',tx.snowballEliminateBody.split('\n').join('<br>'));
  set('lbl-snowball-wealth',tx.snowballWealth);setHtml('lbl-snowball-wealth-body',tx.snowballWealthBody.split('\n').join('<br>'));
  set('tip3-title',tx.tip3title);set('tip3-body',tx.tip3body);
  set('tip4-title',tx.tip4title);set('tip4-body',tx.tip4body);
  set('lbl-income',tx.income);set('lbl-expenses',tx.expenses);
  set('lbl-dad',tx.dad);set('lbl-other-income',tx.otherIncome);
  set('lbl-rent',tx.rent);
  set('lbl-elec',tx.elec);set('lbl-mom',tx.mom);
  set('lbl-insurance',tx.insurance);set('lbl-phone',tx.phone);set('lbl-misc',tx.misc);
  set('lbl-tot-income',tx.totIncome);set('lbl-tot-exp',tx.totExp);
  set('lbl-leftover',tx.leftover);
  if(el('lbl-summary-title'))el('lbl-summary-title').textContent='📊 '+tx.summaryTitle;
  set('lbl-summary-desc',tx.summaryDesc);
  if(el('lbl-income-label'))el('lbl-income-label').textContent='💰 '+tx.income;
  if(el('lbl-expense-label'))el('lbl-expense-label').textContent='💸 '+tx.expenses;
  set('lbl-dad-income',tx.dad);set('lbl-other-income-summary',tx.otherIncome);
  set('lbl-total-income-summary',tx.totIncome);
  set('lbl-rent-label',tx.rent);set('lbl-utilities-label',tx.elec);
  set('lbl-insurance-label',tx.insurance);set('lbl-phone-label',tx.phone);
  set('lbl-mom-label',tx.mom);set('lbl-misc-label',tx.misc);
  set('lbl-total-essentials-label',tx.totalEssentials);
  set('add-debt-btn',tx.addDebt);
  set('lbl-total-debt',tx.totalDebt);
  set('lbl-min-payments',tx.minPayments);
  set('lbl-extra-available',tx.extraAvail);
  set('snowball-empty',tx.snowballEmpty);
  set('lbl-payoff-time',tx.payoffTime);
  set('lbl-total-interest',tx.totalInterest);
  set('lbl-monthly-freed',tx.monthlyFreed);
  set('snowball-tip-title',tx.snowballTipTitle);
  set('snowball-tip-body',tx.snowballTipBody);
  set('debt-free-plan-title',tx.debtFreePlanTitle);
  set('lbl-dfp-income-label',tx.dfpIncomeLabel);
  set('lbl-dfp-expenses-label',tx.dfpExpensesLabel);
  set('lbl-dfp-total-income',tx.dfpTotalIncome);
  set('lbl-dfp-total-essentials',tx.dfpTotalEssentials);
  set('lbl-dfp-debt-status',tx.dfpDebtStatus);
  set('lbl-dfp-allocation-title',tx.dfpAllocationTitle);
  set('lbl-dfp-allocation-desc',tx.dfpAllocationDesc);
  set('lbl-dfp-leftover',tx.dfpLeftover);
  set('lbl-dfp-invest-pct',tx.dfpInvestPct);
  set('lbl-dfp-invest-note',tx.dfpInvestNote);
  set('lbl-dfp-savings-pct',tx.dfpSavingsPct);
  set('lbl-dfp-savings-note',tx.dfpSavingsNote);
  set('lbl-savings-calc',tx.savingsCalc);
  set('lbl-monthly-save',tx.monthlySave);
  set('lbl-save-years',tx.saveYears);
  set('lbl-total-saved',tx.totalSaved);
  set('lbl-with-interest',tx.withInterest);
  set('invest-title',tx.investTitle);
  set('lbl-voo-title',tx.vooTitle);
  set('voo-desc',tx.vooDesc);
  set('lbl-voo-calc',tx.vooCalc);
  set('lbl-invest-monthly',tx.investMonthly);
  set('lbl-invest-years',tx.investYears);
  set('lbl-invested',tx.invested);
  set('lbl-grown-to',tx.grownTo);
  set('invest-note',tx.investNote);
  set('lbl-debt-title',tx.debtTitle);
  set('lbl-debt-desc',tx.debtDesc);
  set('lbl-total-debt-payments',tx.totalDebtPayments);
  set('lbl-money-left',tx.moneyLeft);
  set('lbl-debt-overview',tx.debtOverview);
  set('lbl-debt-owed',tx.totalDebt);
  set('lbl-recommended',tx.recommendedPayment);
  set('lbl-recommended-note',tx.recommendedNote);
  if(el('lbl-plan-title'))el('lbl-plan-title').textContent='📋 '+tx.planTitle;
  set('lbl-plan-desc',tx.planDesc);
  if(el('lbl-plan-income-label'))el('lbl-plan-income-label').textContent='💰 '+tx.planIncomeLabel;
  set('lbl-plan-total-income',tx.planTotalIncome);
  if(el('lbl-plan-essentials-label'))el('lbl-plan-essentials-label').textContent='💸 '+tx.planEssentialsLabel;
  set('lbl-plan-essential-exp',tx.planEssentialExp);
  set('lbl-plan-available',tx.planAvailable);
  set('lbl-plan-debt-payments',tx.planDebtPayments);
  set('lbl-plan-leftover',tx.planLeftover);
  if(el('lbl-plan-debt-list-title'))el('lbl-plan-debt-list-title').textContent='💳 '+tx.planDebtListTitle;
  set('lbl-plan-debt-list-desc',tx.planDebtListDesc);
  set('lbl-plan-paid-reminder',tx.planPaidReminder);
  if(el('lbl-plan-voo-label'))el('lbl-plan-voo-label').textContent='📈 '+tx.planVooLabel;
  set('lbl-plan-amount-invest',tx.planAmountInvest);
  set('lbl-plan-voo-note',tx.planVooNote);
  set('lbl-accelerate-title',tx.accelerateTitle);
  set('lbl-available-for-extra',tx.availableForExtra);
  set('lbl-extra-payment',tx.extraPayment);
  set('lbl-remaining-after',tx.remainingAfter);
  set('lbl-accelerate-note',tx.accelerateNote);
  set('lbl-misc-note',tx.miscNote);
  document.querySelectorAll('.extra-name').forEach(function(i){i.placeholder=tx.expName});
  document.querySelectorAll('.debt-rm').forEach(function(b){b.textContent=tx.remove});
  renderAcceleratePayoff();
  // Update Baby Steps text
  tx.savingsSteps.forEach(function(s, i){
    var num = i + 1;
    if(el('step'+num+'-title'))el('step'+num+'-title').textContent = s.title;
    if(el('step'+num+'-body'))el('step'+num+'-body').textContent = s.body;
    if(el('step'+num+'-highlight'))el('step'+num+'-highlight').textContent = s.highlight;
  });
  // Update Investment Options text
  tx.investOptions.forEach(function(o, i){
    var num = i + 1;
    if(el('invest-opt-'+num+'-title'))el('invest-opt-'+num+'-title').textContent = o.title;
    if(el('invest-opt-'+num+'-body'))el('invest-opt-'+num+'-body').textContent = o.body;
  });
  renderDebtForms();renderSnowball();
}

function recalc(){
  var income=(parseFloat(el('dad-income').value)||0)+(parseFloat(el('other-income').value)||0);
  var fixed=(parseFloat(el('exp-rent').value)||0)+(parseFloat(el('exp-elec').value)||0)+(parseFloat(el('exp-mom').value)||0)+(parseFloat(el('exp-ins').value)||0)+(parseFloat(el('exp-phone').value)||0)+(parseFloat(el('exp-misc').value)||0);
  var expenses=fixed;
  var leftover=income-expenses;
  var tx=t();
  el('val-income').textContent=fmt(income);el('val-expenses').textContent=fmt(expenses);
  el('val-leftover').textContent=fmt(Math.abs(leftover));
  el('val-tag').textContent=leftover>=0?tx.surplus:tx.deficit;
  el('val-leftover').style.color=leftover>=0?'var(--green)':'var(--red)';
  el('val-tag').style.color=leftover>=0?'var(--green)':'var(--red)';
  var card=el('summary-card'),msg=el('status-msg');
  if(leftover>=0){card.style.background='rgba(74,222,128,.06)';card.style.borderColor='rgba(74,222,128,.2)';msg.style.background='rgba(74,222,128,.08)';msg.style.color='var(--green)';msg.textContent=tx.goodMsg}
  else{card.style.background='rgba(248,113,113,.06)';card.style.borderColor='rgba(248,113,113,.25)';msg.style.background='rgba(248,113,113,.08)';msg.style.color='var(--red)';msg.textContent=tx.badMsg}
  updateDebtSummary(leftover);
  updatePlanSummary();
}

function updatePlanSummary(){
  var dad=parseFloat(el('dad-income').value)||0;
  var other=parseFloat(el('other-income').value)||0;
  var income=dad+other;
  var rent=parseFloat(el('exp-rent').value)||0;
  var elec=parseFloat(el('exp-elec').value)||0;
  var mom=parseFloat(el('exp-mom').value)||0;
  var ins=parseFloat(el('exp-ins').value)||0;
  var phone=parseFloat(el('exp-phone').value)||0;
  var misc=parseFloat(el('exp-misc').value)||0;
  var essentials=rent+elec+mom+ins+phone+misc;
  var leftover=income-essentials;

  readDebts();
  var totalDebt=0,totalMin=0;
  debts.forEach(function(d){if(!d.paidOff){totalDebt+=d.balance;totalMin+=d.min}});
  var extraForDebt=Math.max(0,leftover-totalMin);
  var recommendedPayment=totalMin+(extraForDebt*0.5);
  var remainingForVOO=Math.max(0,leftover-recommendedPayment);

  // Update Your Plan tab
  if(el('plan-income'))el('plan-income').textContent=fmt(income);
  if(el('plan-essentials'))el('plan-essentials').textContent=fmt(essentials);
  if(el('plan-available'))el('plan-available').textContent=fmt(leftover);
  if(el('plan-debt-payments'))el('plan-debt-payments').textContent=fmt(totalMin);
  if(el('plan-leftover'))el('plan-leftover').textContent=fmt(extraForDebt);
  if(el('plan-total-payment'))el('plan-total-payment').textContent=fmt(recommendedPayment);
  if(el('summary-debt'))el('summary-debt').textContent=fmt(totalDebt);
  renderPlanDebts(income);
  renderAcceleratePayoff();

  // Update Summary tab - Income
  if(el('summary-dad'))el('summary-dad').textContent=fmt(dad);
  if(el('summary-other'))el('summary-other').textContent=fmt(other);
  if(el('summary-total-income'))el('summary-total-income').textContent=fmt(income);

  // Update Summary tab - Expenses
  if(el('summary-rent')){el('summary-rent').textContent=fmt(rent);if(el('summary-rent-pct'))el('summary-rent-pct').textContent='('+Math.round(income>0?rent/income*100:0)+'%)';}
  if(el('summary-utilities')){el('summary-utilities').textContent=fmt(elec);if(el('summary-utilities-pct'))el('summary-utilities-pct').textContent='('+Math.round(income>0?elec/income*100:0)+'%)';}
  if(el('summary-insurance')){el('summary-insurance').textContent=fmt(ins);if(el('summary-insurance-pct'))el('summary-insurance-pct').textContent='('+Math.round(income>0?ins/income*100:0)+'%)';}
  if(el('summary-phone')){el('summary-phone').textContent=fmt(phone);if(el('summary-phone-pct'))el('summary-phone-pct').textContent='('+Math.round(income>0?phone/income*100:0)+'%)';}
  if(el('summary-mom')){el('summary-mom').textContent=fmt(mom);if(el('summary-mom-pct'))el('summary-mom-pct').textContent='('+Math.round(income>0?mom/income*100:0)+'%)';}
  if(el('summary-car')){el('summary-car').textContent=fmt(misc);if(el('summary-car-pct'))el('summary-car-pct').textContent='('+Math.round(income>0?misc/income*100:0)+'%)';}
  if(el('summary-total-essentials')){el('summary-total-essentials').textContent=fmt(essentials);if(el('summary-essentials-pct'))el('summary-essentials-pct').textContent='('+Math.round(income>0?essentials/income*100:0)+'%)';}
  if(el('summary-leftover'))el('summary-leftover').textContent=fmt(leftover);

  // Update Summary tab - Debts list
  renderSummaryDebts();

  // Update Debt Free Plan tab
  updateDebtFreePlan();
}

function renderSummaryDebts(){
  var container=el('summary-debt-list');
  if(!container)return;
  container.innerHTML='';
  readDebts();
  var tx=t();

  if(debts.length===0){
    container.innerHTML='<div style="font-size:12px;color:var(--muted);padding:10px">'+tx.noDebtsAdded+'</div>';
    if(el('summary-total-debt-payments'))el('summary-total-debt-payments').textContent=fmt(0);
    if(el('summary-money-left')){
      var income=(parseFloat(el('dad-income').value)||0)+(parseFloat(el('other-income').value)||0);
      var expenses=(parseFloat(el('exp-rent').value)||0)+(parseFloat(el('exp-elec').value)||0)+(parseFloat(el('exp-mom').value)||0)+(parseFloat(el('exp-ins').value)||0)+(parseFloat(el('exp-phone').value)||0)+(parseFloat(el('exp-misc').value)||0);
      el('summary-money-left').textContent=fmt(Math.max(0,income-expenses));
    }
    return;
  }

  var activeDebts=debts.filter(function(d){return !d.paidOff});
  var totalDebtPayments=0;

  activeDebts.forEach(function(d){
    totalDebtPayments+=d.min;
    var div=document.createElement('div');
    div.style.cssText='display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:12px';
    div.innerHTML='<div><span style="color:var(--muted)">'+d.name+'</span><div style="font-size:11px;color:var(--faint);margin-top:2px">'+tx.balance+': '+fmt(d.balance)+'</div></div><span style="color:var(--red);font-weight:700">'+fmt(d.min)+'/mo</span>';
    container.appendChild(div);
  });

  var income=(parseFloat(el('dad-income').value)||0)+(parseFloat(el('other-income').value)||0);
  var expenses=(parseFloat(el('exp-rent').value)||0)+(parseFloat(el('exp-elec').value)||0)+(parseFloat(el('exp-mom').value)||0)+(parseFloat(el('exp-ins').value)||0)+(parseFloat(el('exp-phone').value)||0)+(parseFloat(el('exp-misc').value)||0);
  var moneyLeft=Math.max(0,income-expenses-totalDebtPayments);

  if(el('summary-total-debt-payments'))el('summary-total-debt-payments').textContent=fmt(totalDebtPayments);
  if(el('summary-money-left'))el('summary-money-left').textContent=fmt(moneyLeft);
}

function renderPlanDebts(income){
  var container=el('plan-debt-list');
  if(!container)return;

  readDebts();
  var tx=t();
  var extraAvailable=getLeftover();
  var totalMin=0;debts.forEach(function(d){totalMin+=d.min});
  var extraForDebt=Math.max(0,extraAvailable-totalMin);

  if(debts.length===0){
    container.innerHTML='<div style="font-size:12px;color:var(--muted);padding:10px">'+t().noDebtsAdded+'</div>';
    return;
  }

  // Sort debts by balance (smallest first), exclude paid off
  var sortedDebts=debts.slice().filter(function(d){return !d.paidOff&&d.balance>0}).sort(function(a,b){return (a.balance||0)-(b.balance||0)});

  // Show paid off debts first
  var paidOffDebts=debts.slice().filter(function(d){return d.paidOff});

  container.innerHTML='';

  // Show paid off debts
  if(paidOffDebts.length>0){
    var paidSection=document.createElement('div');
    paidSection.style.cssText='margin-bottom:16px;padding:10px;background:rgba(74,222,128,.06);border:1px solid rgba(74,222,128,.2);border-radius:10px';
    paidSection.innerHTML='<div style="font-weight:700;color:var(--green);font-size:12px;margin-bottom:8px">'+tx.paidOffLabel+':</div>';
    paidOffDebts.forEach(function(d){
      paidSection.innerHTML+='<div style="font-size:11px;color:var(--muted);margin:4px 0"><strike>'+d.name+'</strike> - '+fmt(d.balance)+'</div>';
    });
    container.appendChild(paidSection);
  }

  // Show unpaid debts
  if(sortedDebts.length===0&&paidOffDebts.length===0){
    container.innerHTML='<div style="font-size:12px;color:var(--muted);padding:10px">'+tx.noActiveDebts+'</div>';
  }else if(sortedDebts.length===0){
    container.innerHTML='<div style="font-size:12px;color:var(--green);padding:10px;font-weight:700">'+tx.allDebtsPaidOff+'</div>';
  }else{
    sortedDebts.forEach(function(d,idx){
      var div=document.createElement('div');
      div.style.cssText='background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:12px;margin-bottom:10px';
      div.innerHTML='<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div style="font-weight:700;font-size:13px">'+d.name+'</div><div style="font-size:11px;color:var(--muted)">'+tx.balance+': '+fmt(d.balance)+'</div></div></div><hr class="divider"><div style="display:flex;justify-content:space-between;align-items:center;font-size:12px"><span>'+tx.minimumPayment+':</span><span style="color:var(--red);font-weight:700">'+fmt(d.min)+'</span></div>';
      container.appendChild(div);
    });
  }
}

function getLeftover(){
  var income=(parseFloat(el('dad-income').value)||0)+(parseFloat(el('other-income').value)||0);
  var fixed=(parseFloat(el('exp-rent').value)||0)+(parseFloat(el('exp-elec').value)||0)+(parseFloat(el('exp-mom').value)||0)+(parseFloat(el('exp-ins').value)||0)+(parseFloat(el('exp-phone').value)||0)+(parseFloat(el('exp-misc').value)||0);
  return income-fixed;
}


function addDebt(preset){
  var tx=t();var id='debt-'+(debtCount++);
  var debt={id:id,type:preset||'credit',name:'',balance:0,rate:0,min:0,paidOff:false};
  debts.push(debt);renderDebtForms();updateDebtSummary(getLeftover());autoSave();
}

function removeDebt(id){
  debts=debts.filter(function(d){return d.id!==id});
  renderDebtForms();renderSnowball();updateDebtSummary(getLeftover());autoSave();
}

function markPaidOff(id){
  debts.forEach(function(d){if(d.id===id)d.paidOff=!d.paidOff});
  renderDebtForms();updateDebtSummary(getLeftover());renderSnowball();autoSave();
}

function readDebts(){
  debts.forEach(function(d){
    var nameEl=el('dn-'+d.id),balEl=el('db-'+d.id),minEl=el('dm-'+d.id);
    if(nameEl)d.name=nameEl.value;
    if(balEl)d.balance=parseFloat(balEl.value)||0;
    if(minEl)d.min=parseFloat(minEl.value)||0;
  });
}

function renderDebtForms(){
  var tx=t();var container=el('debts-container');container.innerHTML='';
  var nameExamples=lang==='en'?'e.g., Chase Card, Costco Card, Medical Bill':'예: 체이스 카드, 코스트코 카드, 의료비';
  debts.forEach(function(d){
    var div=document.createElement('div');div.className='debt-card';
    var paidStyle=d.paidOff?'style="opacity:0.5;text-decoration:line-through"':'';
    div.innerHTML='<div class="debt-card-header"><span class="debt-name" '+paidStyle+'>'+tx.debtName+'</span><div><button class="debt-rm" style="background:rgba(74,222,128,.15);border-color:rgba(74,222,128,.3);color:var(--green)" data-id="'+d.id+'" data-action="paid">'+(d.paidOff?tx.markedPaid:tx.markPaid)+'</button><button class="debt-rm" data-id="'+d.id+'">'+tx.remove+'</button></div></div>'+
    '<div style="margin-bottom:10px"><select id="dt-'+d.id+'"'+(d.paidOff?'disabled':'')+' ><option value="credit">'+tx.debtTypes[0]+'</option><option value="medical">'+tx.debtTypes[1]+'</option><option value="car">'+tx.debtTypes[2]+'</option><option value="personal">'+tx.debtTypes[3]+'</option><option value="other">'+tx.debtTypes[4]+'</option></select></div>'+
    '<input type="text" id="dn-'+d.id+'" '+paidStyle+' placeholder="'+nameExamples+'" value="'+d.name+'" '+(d.paidOff?'disabled':'')+' style="background:var(--input-bg);color:var(--text);border:1px solid rgba(255,255,255,0.1);padding:10px;border-radius:6px;">'+
    '<div class="debt-row"><div><label class="field-label">'+tx.debtBalance+'</label><input type="number" id="db-'+d.id+'" value="'+(d.balance||'')+'" placeholder="0" '+(d.paidOff?'disabled':'')+' style="background:var(--input-bg);color:var(--text);border:1px solid rgba(255,255,255,0.1);padding:10px;border-radius:6px;"></div>'+
    '<div><label class="field-label">'+tx.debtMin+'</label><input type="number" id="dm-'+d.id+'" value="'+(d.min||'')+'" placeholder="0" '+(d.paidOff?'disabled':'')+' style="background:var(--input-bg);color:var(--text);border:1px solid rgba(255,255,255,0.1);padding:10px;border-radius:6px;"></div></div>';
    container.appendChild(div);
    div.querySelectorAll('.debt-rm').forEach(function(btn){
      btn.addEventListener('click',function(){
        if(btn.getAttribute('data-action')==='paid'){markPaidOff(d.id);}
        else{removeDebt(d.id);}
      });
    });
    ['db-','dm-','dn-','dt-'].forEach(function(pfx){
      var inp=el(pfx+d.id);if(inp){inp.addEventListener('input',function(){readDebts();updateDebtSummary(getLeftover());renderSnowball();autoSave()})}
    });
    var sel=el('dt-'+d.id);if(sel){sel.value=d.type;sel.addEventListener('change',function(){d.type=sel.value})}
  });
}

function updateDebtSummary(leftover){
  readDebts();
  var totalDebt=0,totalMin=0;
  debts.forEach(function(d){if(!d.paidOff){totalDebt+=d.balance;totalMin+=d.min}});
  var extra=Math.max(0,leftover-totalMin);
  el('val-total-debt').textContent=fmt(totalDebt);
  el('val-min-payments').textContent=fmt(totalMin);
  el('val-extra-avail').textContent=fmt(extra);
  renderSnowball();
}

function renderSnowball(){
  readDebts();
  updatePlanSummary();
  var tx=t();
  var validDebts=debts.filter(function(d){return d.balance>0&&d.min>0});
  var container=el('snowball-container');
  var sumDiv=el('snowball-summary');
  var tipDiv=el('snowball-tip');
  if(!container||!sumDiv||!tipDiv)return;
  if(validDebts.length===0){
    container.innerHTML='<p style="color:var(--muted);font-size:13px;text-align:center;padding:20px" id="snowball-empty">'+tx.snowballEmpty+'</p>';
    sumDiv.style.display='none';tipDiv.style.display='none';return;
  }
  var sorted=validDebts.slice().sort(function(a,b){return a.balance-b.balance});
  var leftover=getLeftover();
  var totalMin=0;sorted.forEach(function(d){totalMin+=d.min});
  var extraForDebt=Math.max(0,leftover-totalMin);
  var colors=['linear-gradient(135deg,#22c55e,#4ade80)','linear-gradient(135deg,#3b82f6,#60a5fa)','linear-gradient(135deg,#f59e0b,#fcd34d)','linear-gradient(135deg,#a78bfa,#c4b5fd)','linear-gradient(135deg,#f87171,#fca5a5)'];
  container.innerHTML='';
  var totalInterest=0;var cumulativePayment=0;var month=0;
  sorted.forEach(function(d,i){
    var pmt=d.min+(i===0?extraForDebt:0)+cumulativePayment;
    var bal=d.balance;var mo=0;var interest=0;var mr=d.rate/100/12;
    while(bal>0.01&&mo<600){var intr=bal*mr;var prin=Math.min(pmt-intr,bal);if(prin<=0){mo=999;break}bal-=prin;interest+=intr;mo++}
    totalInterest+=interest;
    if(i===0)month=mo;else month+=mo;
    cumulativePayment+=d.min;
    var div=document.createElement('div');div.className='snowball-item';
    var urgentLabel=i===0?('<span class="badge" style="background:rgba(74,222,128,.15);color:var(--green)">'+(lang==='ko'?'👊 지금 집중!':'👊 Attack Now!')+'</span>'):'<span class="badge" style="background:rgba(100,116,139,.15);color:var(--muted)">'+(lang==='ko'?'최소 납부':'Min Payment')+'</span>';
    div.innerHTML='<div class="snowball-num" style="background:'+colors[i%colors.length]+'">'+(i+1)+'</div><div class="snowball-body"><div class="snowball-title">'+(d.name||tx.debtTypes[0])+' — '+fmt(d.balance)+'</div><div class="snowball-detail">'+(lang==='ko'?'이자율':'Rate')+': '+d.rate+'% | '+(lang==='ko'?'월 납부액':'Monthly')+': '+fmt(pmt)+' | '+(lang==='ko'?'상환 기간':'Payoff')+': ~'+mo+(lang==='ko'?' 개월':'mo')+'</div>'+urgentLabel+'</div>';
    container.appendChild(div);
  });
  var yrs=(month/12).toFixed(1);
  el('val-payoff-time').textContent='~'+month+' '+(lang==='ko'?'개월':'months')+' ('+yrs+' '+(lang==='ko'?'년':'yrs')+')';
  el('val-total-interest').textContent=fmt(totalInterest);
  var freed=totalMin+extraForDebt;
  el('val-monthly-freed').textContent=fmt(freed)+'/mo';
  sumDiv.style.display='block';tipDiv.style.display='block';
}

function renderSavingsSteps(){
  var tx=t();var container=el('baby-steps-list');
  if(!container)return;
  container.innerHTML='';
  tx.savingsSteps.forEach(function(s){
    var div=document.createElement('div');div.className='savings-tile';
    div.innerHTML='<div class="savings-icon">'+s.icon+'</div><div class="savings-title">'+s.title+'</div><div class="savings-body">'+s.body+'</div><div class="savings-highlight">'+s.highlight+'</div>';
    container.appendChild(div);
  });
}

function updateDebtFreePlan(){
  var dad=parseFloat(el('dad-income').value)||0;
  var other=parseFloat(el('other-income').value)||0;
  var income=dad+other;
  var rent=parseFloat(el('exp-rent').value)||0;
  var elec=parseFloat(el('exp-elec').value)||0;
  var mom=parseFloat(el('exp-mom').value)||0;
  var ins=parseFloat(el('exp-ins').value)||0;
  var phone=parseFloat(el('exp-phone').value)||0;
  var misc=parseFloat(el('exp-misc').value)||0;
  var essentials=rent+elec+mom+ins+phone+misc;
  var leftover=income-essentials;
  var investAmount=income*0.15;
  var remainingSavings=leftover-investAmount;
  remainingSavings=Math.max(0,remainingSavings);
  if(el('dfp-income'))el('dfp-income').textContent=fmt(income);
  if(el('dfp-expenses'))el('dfp-expenses').textContent=fmt(essentials);
  if(el('dfp-leftover'))el('dfp-leftover').textContent=fmt(leftover);
  if(el('dfp-invest-amount'))el('dfp-invest-amount').textContent=fmt(investAmount);
  if(el('dfp-savings-amount'))el('dfp-savings-amount').textContent=fmt(remainingSavings);
}

function calcSavings(){
  var monthly=parseFloat(el('save-amount').value)||0;
  var years=parseFloat(el('save-years').value)||0;
  var simple=monthly*years*12;
  var compound=0;var mr=0.07/12;var n=years*12;
  compound=monthly*((Math.pow(1+mr,n)-1)/mr);
  el('val-total-saved').textContent=fmt(simple);
  el('val-with-interest').textContent=fmt(compound);
  el('savings-result').style.display='block';
}

function calcInvest(){
  var monthly=parseFloat(el('invest-monthly').value)||0;
  var years=parseFloat(el('invest-years').value)||0;
  var invested=monthly*years*12;
  var mr=0.10/12;var n=years*12;
  var grown=monthly*((Math.pow(1+mr,n)-1)/mr);
  el('val-invested').textContent=fmt(invested);
  el('val-grown').textContent=fmt(grown);
  el('invest-result').style.display='block';
}

function switchTab(idx){
  document.querySelectorAll('.panel').forEach(function(p,i){p.classList.toggle('active',i===idx)});
  document.querySelectorAll('.tab-btn').forEach(function(b,i){b.classList.toggle('active',i===idx)});
}

function renderAcceleratePayoff(){
  var availableEl=el('accelerate-available');
  var extraEl=el('accelerate-extra');
  var remainingEl=el('accelerate-remaining');
  var targetEl=el('accelerate-target');

  if(!availableEl||!extraEl||!remainingEl||!targetEl)return;
  var tx=t();

  // Get money available
  var income=(parseFloat(el('dad-income').value)||0)+(parseFloat(el('other-income').value)||0);
  var essentials=(parseFloat(el('exp-rent').value)||0)+(parseFloat(el('exp-elec').value)||0)+(parseFloat(el('exp-mom').value)||0)+(parseFloat(el('exp-ins').value)||0)+(parseFloat(el('exp-phone').value)||0)+(parseFloat(el('exp-misc').value)||0);

  // Get total min debt payments
  readDebts();
  var totalMin=0;
  debts.forEach(function(d){if(!d.paidOff)totalMin+=d.min});

  var available=Math.max(0,income-essentials-totalMin);
  var extra=parseFloat(extraEl.value)||0;
  var remaining=Math.max(0,available-extra);

  // Display amounts
  availableEl.textContent=fmt(available);
  remainingEl.textContent=fmt(remaining);

  // Find smallest unpaid debt
  var unp=debts.filter(function(d){return !d.paidOff&&d.balance>0}).sort(function(a,b){return (a.balance||0)-(b.balance||0)});
  if(unp.length===0){
    targetEl.innerHTML='<div style="padding:12px;background:rgba(74,222,128,.06);border:1px solid rgba(74,222,128,.2);border-radius:10px;text-align:center;font-size:12px;color:var(--green);font-weight:700">'+tx.noUnpaidDebts+'</div>';
    return;
  }

  var smallest=unp[0];
  var minOnly=smallest.balance>0?Math.ceil(smallest.balance/smallest.min):0;
  var withExtra=smallest.balance>0?Math.ceil(smallest.balance/(smallest.min+extra)):0;
  var saved=Math.max(0,minOnly-withExtra);

  targetEl.innerHTML='<div style="background:rgba(74,222,128,.06);border:1px solid rgba(74,222,128,.2);border-radius:10px;padding:12px"><div style="font-weight:700;font-size:13px;color:var(--green);margin-bottom:8px">🎯 '+smallest.name+'</div><div style="font-size:12px;margin:6px 0"><span style="color:var(--muted)">'+tx.balance+':</span> <span style="color:var(--text);font-weight:700">'+fmt(smallest.balance)+'</span></div><div style="font-size:12px;margin:6px 0"><span style="color:var(--muted)">'+tx.minimumPayment+':</span> <span style="color:var(--red);font-weight:700">'+fmt(smallest.min)+'/mo</span></div><hr class="divider"><div style="display:flex;gap:12px;justify-content:space-around;font-size:12px"><div style="text-align:center"><div style="color:var(--muted)">'+tx.withoutExtra+'</div><div style="color:var(--text);font-weight:700;font-size:14px">'+minOnly+' '+tx.months+'</div></div><div style="text-align:center"><div style="color:var(--green)">'+tx.withExtra+' $'+Math.round(extra)+'/mo</div><div style="color:var(--green);font-weight:700;font-size:14px">'+withExtra+' '+tx.months+'</div></div></div><div style="text-align:center;margin-top:8px;font-size:11px;color:var(--green);font-weight:700">'+saved+' '+tx.monthsSaved+'</div></div>';
}

var autoSaveTimeout=null;
function autoSave(){
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout=setTimeout(function(){
    readDebts();
    var budgetData={
      dad_income:   parseFloat(el('dad-income').value)||0,
      other_income: parseFloat(el('other-income').value)||0,
      rent:         parseFloat(el('exp-rent').value)||0,
      utilities:    parseFloat(el('exp-elec').value)||0,
      insurance:    parseFloat(el('exp-ins').value)||0,
      phone:        parseFloat(el('exp-phone').value)||0,
      mom_allowance:parseFloat(el('exp-mom').value)||0,
      misc:         parseFloat(el('exp-misc').value)||0
    };
    var debtsData=debts.map(function(d,i){
      return {
        sort_order: i,
        type:       d.type,
        name:       d.name,
        balance:    d.balance,
        min:        d.min,
        paid_off:   d.paidOff
      };
    });
    console.log('Auto-saving budget and debts...');
    fetch('/api/save',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({budget:budgetData,debts:debtsData})
    })
    .then(function(r){
      console.log('API response status:', r.status);
      return r.json();
    })
    .then(function(data){
      console.log('API response data:', data);
      if(data.status==='ok'){
        console.log('Save successful, recalculating...');
        recalc();
      }else{
        console.log('API error:', data);
      }
    })
    .catch(function(e){
      console.log('Auto-save network error:',e);
    });
  },1000);
}

function loadBudget(){
  fetch('/api/load')
  .then(function(r){return r.json()})
  .then(function(data){
    // --- Populate budget inputs ---
    if(data.budget){
      var b=data.budget;
      if(el('dad-income'))   el('dad-income').value   = b.dad_income    || 0;
      if(el('other-income')) el('other-income').value = b.other_income  || 0;
      if(el('exp-rent'))     el('exp-rent').value     = b.rent          || 0;
      if(el('exp-elec'))     el('exp-elec').value     = b.utilities     || 0;
      if(el('exp-ins'))      el('exp-ins').value      = b.insurance     || 0;
      if(el('exp-phone'))    el('exp-phone').value    = b.phone         || 0;
      if(el('exp-mom'))      el('exp-mom').value      = b.mom_allowance || 0;
      if(el('exp-misc'))     el('exp-misc').value     = b.misc          || 0;
    }
    // --- Restore debts ---
    debts=[];
    if(data.debts && data.debts.length>0){
      data.debts.forEach(function(d){
        var id='debt-'+(debtCount++);
        debts.push({
          id:      id,
          type:    d.type    || 'credit',
          name:    d.name    || '',
          balance: d.balance || 0,
          min:     d.min     || 0,
          paidOff: d.paid_off || false
        });
      });
    }else{
      // First-ever load: create default empty debts
      debts.push({id:'debt-'+(debtCount++),type:'credit', name:'',balance:0,min:0,paidOff:false});
      debts.push({id:'debt-'+(debtCount++),type:'medical',name:'',balance:0,min:0,paidOff:false});
      debts.push({id:'debt-'+(debtCount++),type:'car',    name:'',balance:0,min:0,paidOff:false});
    }
    // Trigger full re-render - use setTimeout to ensure DOM is updated before recalc reads values
    setTimeout(function(){
      applyLang();
      recalc();
    }, 10);
  })
  .catch(function(e){
    console.log('Could not load from server, using defaults:', e);
    // Fallback: render empty defaults
    applyLang();
    recalc();
  });
}

// Wire events
el('lang-btn').addEventListener('click',function(){lang=lang==='en'?'ko':'en';applyLang();recalc()});
el('add-debt-btn').addEventListener('click',function(){addDebt()});
el('savings-calc-btn').addEventListener('click',calcSavings);
el('invest-calc-btn').addEventListener('click',calcInvest);
el('accelerate-extra').addEventListener('input',function(){renderAcceleratePayoff();renderPlanDebts();autoSave()});
document.querySelectorAll('.tab-btn').forEach(function(btn){
  btn.addEventListener('click',function(){switchTab(parseInt(btn.getAttribute('data-tab')))});
});
['dad-income','other-income','exp-rent','exp-elec','exp-mom','exp-ins','exp-phone','exp-misc'].forEach(function(id){
  var inp=el(id);if(inp){inp.addEventListener('input',function(){recalc();autoSave()});}
});

// Init — loadBudget() handles defaults and calls applyLang()+recalc() after fetch completes
loadBudget();
})();
