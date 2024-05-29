export function DietDef(sequelize: any, type: any): any {
  return sequelize.define(
    "diet",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: type.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    }
  );
}
