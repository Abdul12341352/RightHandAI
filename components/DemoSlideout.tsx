/* First make sure you have installed the package:
   yarn add @calcom/embed-react
   or
   npm install @calcom/embed-react
*/

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "ai-receptionist-client" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: true, // hides the event info panel
        layout: "month_view",       // can be "month_view", "week_view", or "column_view"
      });
    })();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Cal
        namespace="ai-receptionist-client"
        calLink="work-please-joasem/ai-receptionist-client"
        style={{ width: "100%", height: "100%", border: "none" }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: true,
          theme: "light",
          hideEventTypeDetails: true,
        }}
      />
    </div>
  );
}
