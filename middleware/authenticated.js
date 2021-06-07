export default function({store, route, redirect}) {
    const isUserAuth = store.state.users.user;

    if(isUserAuth === null && route.path === "/profile") {
        redirect("/login/singin");
    }
}