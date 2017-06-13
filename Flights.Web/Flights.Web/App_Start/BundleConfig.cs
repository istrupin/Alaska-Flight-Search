using System.Web;
using System.Web.Optimization;

namespace Flights.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/ui-grid.css",
                      "~/Content/Site.css"));

            bundles.Add(new ScriptBundle("~/bundles/other").Include(
                       "~/Scripts/jquery-1.10.2.min.js",
                       "~/Scripts/angular.min.js",
                       "~/Scripts/angular-resource.js",
                       "~/Scripts/ui-grid.min.js",
                       "~/Scripts/ui-bootstrap-tpls-2.5.0.js"));

            bundles.Add(new ScriptBundle("~/bundles/application").Include(
                        "~/App/*.js",
                        "~/App/Controllers/*.js",
                        "~/app/Services/*.js"));

            BundleTable.EnableOptimizations = false;

        }
    }
}
