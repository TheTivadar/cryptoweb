dashboard mükődése

Amikor valaki belép google-el akkor lefut a  NewUserForm(session) és csinál neki egy usert a db-ben

Fontos dashboard funkciók

------------------------------------------------------------------
User

const {normalUser } = useUserStore()  megadja a dbuser adatokat - client oldali

auth() - megadja a google session adatokat - server oldali
getUserEmail() - megadja a db-ben lévő user adatokat - server oldali

-------------------------------------------------------------------
Balance

const balance = await getUserBalance(user.id); megadja a user jelenlegi egyenlegét - server side
