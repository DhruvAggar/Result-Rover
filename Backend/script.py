import tabula

tabula.convert_into("./uploads/result.pdf", "result.csv", output_format="csv", pages='all',lattice=True)