dashboard mükődése

Amikor valaki belép google-el akkor lefut a  NewUserForm(session) és csinál neki egy usert a db-ben

Fontos dashboard funkciók

------------------------------------------------------------------

Balance

const balance = await getUserBalance(user.id); megadja a user jelenlegi egyenlegét - server side

-------------------------------------------------------------------

User 

    eltárolja az alapvető adatokat

    Mivel a normalShare és a safeShare egy nagy balance-ban van ezért ott csak a share-t tárolja
    Riskybalancot viszont minden usernek külön külön
    
    balance ennek a háromnak az összege - amikor valami változás van akkor ezt újra kell kalkulálni

    const {normalUser } = useUserStore()  megadja a dbuser adatokat - client oldali

    auth() - megadja a google session adatokat - server oldali

    createUser() -- Elkésziti a usert + 3 UserBalance-t csinál hozzá, Minden share 0 kivéve a Risky az 1

    await getUser()  -- visszaadja az összes Usert

    getUserByEmail() -- Email alapján visszaadja a Usert

    getUserById() -- Id alapján visszaadja a Usert

    adjustUserBalance() -- Hozzáad egy összeget a bizonyos számlához és ujrakalkulálja a meglévő share-t hozzá

-------------------------------------------------------------------

Pot

    Ebben vannak eltárolva a Közös összegek

    getAllBalancePots() -- összes pot-ot listában visszadja

    getBalancePotByType(tipus) -- Csak a bizonyos tipust adja vissza

    transferBetweenBalances() -- Két számla közötti átutalást biztosítja 

-------------------------------------------------------------------

Transactions

    Itt vannak eltárolva a tranzakciók, Beutalás, kiutalás, oldalon belüli küldések.

    