import { useEffect, useState } from "react"

const useAdmin = (email) => {

    //alert(email)

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        fetch(`https://b612-used-products-resale-server-side-mu.vercel.app/users/admin/${email}`).then((res) => res.json()).then((data) => {

            console.log(data);
            setIsAdmin(data.Admin);
        }).catch((error) => {
            console.log(error.message);
        })


    }, [email])

    //alert(isAdmin);

    //console.log(isAdmin)

    return [isAdmin]





}

export default useAdmin