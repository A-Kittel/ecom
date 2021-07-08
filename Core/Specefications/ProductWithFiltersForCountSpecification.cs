﻿using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specefications
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductsSpecParams productsParams)
            : base(x =>
                (string.IsNullOrEmpty(productsParams.Search) || x.Name.ToLower().Contains(productsParams.Search)) &&
                (!productsParams.BrandId.HasValue || x.ProductBrandId == productsParams.BrandId) &&
                (!productsParams.BrandId.HasValue || x.ProductTypeId == productsParams.TypeId)
            )
        {
        }
    }
}
