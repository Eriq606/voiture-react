'use client';

import send_raw from '../../utils/Sender';
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Deconnexion(){
    const router = useRouter();

    useEffect(() => {
        const storedSessionString = sessionStorage.getItem("userSession");
        if (storedSessionString) {
          const sess = JSON.parse(storedSessionString);
          sessionStorage.removeItem("userSession");
          console.log('session removed');
          logout(sess);
        }
      }, []);
    
    const logout = async (session) => {
        try {
          const token = session.donnee.token;
          console.log('log out '+token);
          const reponse = await send_raw(
            "https://vente-occaz-production-de3d.up.railway.app/api/v1/logout",
            {},
            token
          );
           router.push("/backoffice/login");
        } catch (e) {
          console.log(e);
          router.push("/backoffice/pages/stats");
        }
    };

}