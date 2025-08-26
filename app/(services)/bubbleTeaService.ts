import { db, type BubbleTea } from "@/dexie/db";
import data from "../../data/bubbleTeas.json";

export class BubbleTeaService {
  public static async getBubbleTeas() {
    return await db.bubbleTeas.reverse().toArray();
  }

  public static getFields() {
    const { primKey, indexes } = db.bubbleTeas.schema;
    return [primKey, ...indexes]
      .map((spec) => spec.keyPath)
      .filter((field) => typeof field === "string");
  }

  public static insertIfEmpty() {
    // TODO: Load all bubble tea data from JSON file
    // this.getBubbleTeas().then(async (array) => {
    //   if (!array.length) {
    //     await db.bubbleTeas.put({ id: 99, name: 'Test Tea', isListed: true });
    //   }
    // });
    this.getBubbleTeas().then(async (array) => {
      if (!array.length) {
        for (const item of data) {
          console.log(item);
          await db.bubbleTeas.put({
            id: item.id,
            name: item.name,
            isListed: true,
            price: item.price,
            assetPath: item.assetPath,
            description: item.description,
            currency: item.currency,
            labels: item.labels,
            quantity: 0,
          });
        }
      }
    });
  }

  public static async listBubbleTea(bubbleTea: BubbleTea) {
    await db.bubbleTeas
      .where("id")
      .equals(bubbleTea.id)
      .modify((item) => {
        item.isListed = true;
      });
  }

  public static async delistBubbleTea(bubbleTea: BubbleTea) {
    await db.bubbleTeas
      .where("id")
      .equals(bubbleTea.id)
      .modify((item) => {
        item.isListed = false;
      });
  }

  public static async listAllBubbleTea() {
    await db.bubbleTeas.toCollection().modify((item) => {
      item.isListed = true;
    });
  }

  public static async delistAllBubbleTea() {
    await db.bubbleTeas.toCollection().modify((item) => {
      item.isListed = false;
    });
  }

  public static async addToCart(productId: number) {
    await db.bubbleTeas
      .where("id")
      .equals(productId)
      .modify((item) => {
        item.quantity += 1;
      });
  }

  public static async removeFromCart(productId: number) {
    await db.bubbleTeas
      .where("id")
      .equals(productId)
      .modify((item) => {
        item.quantity -= 1;
      });
  }

  public static async clearCart() {
    await db.bubbleTeas.toCollection().modify((item) => {
      item.quantity = 0;
    });
  }
}
