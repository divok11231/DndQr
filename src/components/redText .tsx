import React, { useState, useEffect } from "react";
import { supabase } from '../lib/supabase.client';
import "../layouts/red-page-style.css";

function NiceMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage();
  }, []);

  async function fetchMessage() {
    // get a random row from the DndQr table
    const { data, error } = await supabase
      .from("currentPageUrl")
      .select("goneMessage")
      .eq('currentPageUrl', 'nignognaggins')
    if (error) {
      console.error(error);
    } else {
      // set the message state to the nice_message value
      setMessage(data[0].goneMessage);
    }
  }

  return (
    <p className="text-wrapper-2">
      <h1>{message}</h1>
    </p>
  );
}

export default NiceMessage;
