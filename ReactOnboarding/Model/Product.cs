using System.Collections.Generic;

namespace ReactOnboarding.Model
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public ICollection<Sale> ProductSold { get; set; }
    }
}
