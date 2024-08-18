using System.Web;
using System.Web.Optimization;

namespace WebApplication1
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"
                      ));


            bundles.Add(new Bundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                        "~/Scripts/about-us.js",
                        "~/Scripts/bootstrap.min.js",
                        "~/Scripts/jquery-3.6.1.min.js",
                        "~/Scripts/jquery-ui.min.js",
                        "~/Scripts/jquery.magnific-popup.min.js",
                        "~/Scripts/jquery.ui.touch-punch.min.js",
                        "~/Scripts/jquery.validate.min.js",
                        "~/Scripts/mg-common.js",
                        "~/Scripts/mg-menu.js",
                        "~/Scripts/mg-send-email.js",
                        "~/Scripts/popper.min.js",
                        "~/Scripts/shop.js",
                        "~/Scripts/single-product.js",
                        "~/Scripts/slick.min.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/all.min.css",
                      "~/Content/bootstrap.min.css",
                      "~/Content/bootstrap.min.css",
                      "~/Content/jquery-ui.min.css",
                      "~/Content/magnific-popup.css",
                      "~/Content/mg-menu.css",
                      "~/Content/responsive.css",
                      "~/Content/slick.css",
                      "~/Content/style.css"));
        }
    }
}
