import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function ArticleList({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Drafts"
          cardSubtitle="Non Published Articles"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Author", "Creation Date"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Published"
          cardSubtitle="Here are Published Articles"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Author", "Publish Date"]}
              tableData={[
                ["1", "Dakota Rice", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "Chile", "Gloucester"]
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default ArticleList;
