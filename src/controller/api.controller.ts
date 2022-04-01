import e from "express";
import express from "express";
class ApiController {
  getNamesValueToArray = (req: express.Request, res: express.Response) => {
    let query = req.query;
    let key = Object.keys(query).toString();
    if (key === "names") {
      let names: any = query.names?.toString().split(",");
      let sort = names.sort();
      let results = this.capitalizeWords(sort);
      res.send(results);
    } else {
      res.send("Query param not match");
    }
  };
  capitalizeWords = (arr: any[]) => {
    return arr.map((element) => {
      return (
        element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
      );
    });
  };
}
export default ApiController;
