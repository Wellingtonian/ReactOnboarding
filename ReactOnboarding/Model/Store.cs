using System.Collections.Generic;

namespace ReactOnboarding.Model
{
    public class Store
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public ICollection<Sale> ProductSold { get; set; }
    }
}
