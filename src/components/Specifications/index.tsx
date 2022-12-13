import { Grid } from "@chakra-ui/react";
import React from "react";
import SpecificationColumn from "./SpecificationColumn";
import SpecificationItem from "./SpecificationItem";

export default function Specifications() {
  return (
    <Grid
      templateColumns={{ base: "auto", lg: "repeat(4, 1fr)" }}
      mt={{ base: "2rem", lg: "5rem" }}
      gap="3rem"
    >
      <SpecificationColumn title="Desk">
        <SpecificationItem
          title="Height"
          labels={["750 - 1350 mm", "Electrically adjustable"]}
        />
        <SpecificationItem title="Width" labels={["1600 mm"]} isHighlighted />
        <SpecificationItem title="Depth" labels={["700 mm"]} />
        <SpecificationItem
          title="Max Weight"
          labels={["120 kg"]}
          isHighlighted
        />
      </SpecificationColumn>

      <SpecificationColumn title="Display">
        <SpecificationItem title="Size" labels={["55 inches"]} />
        <SpecificationItem
          title="Resolution"
          labels={["4K (3840 x 2160 px)"]}
          isHighlighted
        />
        <SpecificationItem title="Refresh Rate" labels={["60 Hz"]} />
        <SpecificationItem
          title="Touch Technology"
          labels={["Capacitive"]}
          isHighlighted
        />
      </SpecificationColumn>

      <SpecificationColumn title="Power">
        <SpecificationItem title="Voltage" labels={["100 - 230 Volt"]} />
        <SpecificationItem
          title="Max Consumption"
          labels={["100 Watt"]}
          isHighlighted
        />
        <SpecificationItem title="Plugs" labels={["EU | US | UK (included)"]} />
      </SpecificationColumn>

      <SpecificationColumn title="General">
        <SpecificationItem title="Weight" labels={["50 kg"]} />
        <SpecificationItem
          title="Number of Monitors"
          labels={["1 (installed)"]}
          isHighlighted
        />
        <SpecificationItem
          title="Wireless Charging"
          labels={["Max. 10 Watt"]}
        />
      </SpecificationColumn>
    </Grid>
  );
}
