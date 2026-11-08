import React, { useMemo } from 'react';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { Github, Twitter, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getOptimizedImageUrl } from '../seo/utils';
import { buildStaticWebPageSchemas } from '../lib/seoUtils';

export default function Developers() {
  const { settings, fetchSettings } = useData();
  const siteTitle = settings?.site_title || 'RummyDex';

  React.useEffect(() => {
    if ((!settings.developers || settings.developers.length === 0) && fetchSettings) {
      fetchSettings();
    }
  }, [settings.developers, fetchSettings]);

  const pageTitle = settings?.developers_meta_title || 'Developer Profiles';
  const pageDesc =
    settings?.developers_meta_description ||
    `Browse profiles of top app developers featured on ${siteTitle}.`;
  const canonicalUrl = 'https://www.rummydex.com/developers';

  const { webPageSchema, breadcrumbSchema } = useMemo(
    () => buildStaticWebPageSchemas('/developers', pageTitle, pageDesc, 'Developers'),
    [pageTitle, pageDesc]
  );

  if (!settings.developers || settings.developers.length === 0) {
    return (
      <div className="max-w-[1000px] mx-auto px-3.5 sm:px-6 py-3 sm:py-6 animate-fade-in pb-14 min-h-[70vh] text-left">
        <Meta
          title={pageTitle}
          description={pageDesc}
          canonical={canonicalUrl}
          schema={webPageSchema}
          breadcrumbSchema={breadcrumbSchema}
        />
        <div className="mb-3 sm:mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2.5 pb-2.5 border-b border-zinc-200/80 dark:border-zinc-800/80">
          Our Developers
        </h1>
        <p className="text-xs xs:text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mt-3">
          Information about our developers is not available at this moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto px-3.5 sm:px-6 py-3 sm:py-6 animate-fade-in pb-14 min-h-[70vh] text-left">
      <Meta
        title={pageTitle}
        description={pageDesc}
        canonical={canonicalUrl}
        schema={webPageSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="mb-3 sm:mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 pb-2.5 border-b border-zinc-200/80 dark:border-zinc-800/80">
        Meet Our Team
      </h1>
      <p className="text-xs xs:text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6">
        The creative minds and technical experts building the future of {siteTitle}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {settings.developers.map((dev: any, index: number) => {
          const devName = dev.name || dev.title || 'Developer';
          const rawAvatar = dev.image_url || dev.logo_url || dev.icon_url || '';
          const avatarUrl = rawAvatar ? getOptimizedImageUrl(rawAvatar, 256) : '';
          const role = dev.role || 'Verified Developer';
          const bio = dev.bio || dev.description || '';

          return (
            <div
              key={`dev-card-${dev.id || devName || index}`}
              className="border border-zinc-200/80 dark:border-white/10 rounded-2xl p-5 flex flex-col items-center text-center group animate-fade-in"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-zinc-200 dark:border-zinc-800 bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-extrabold text-2xl">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={devName}
                    loading="lazy"
                    decoding="async"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{devName.charAt(0).toUpperCase()}</span>
                )}
              </div>

              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white mb-1 tracking-tight">
                {devName}
              </h3>

              <div className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                {role}
              </div>

              {bio && (
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow text-xs sm:text-sm leading-relaxed">
                  {bio}
                </p>
              )}

              {(dev.github || dev.twitter) && (
                <div className="flex gap-3 mt-auto pt-3 border-t border-zinc-200/80 dark:border-white/10 w-full justify-center">
                  {dev.github && (
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-zinc-200/80 dark:border-white/10 rounded-lg transition-colors text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
                      title="GitHub"
                      aria-label={`${devName} GitHub Profile`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {dev.twitter && (
                    <a
                      href={dev.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-zinc-200/80 dark:border-white/10 rounded-lg transition-colors text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400"
                      title="Twitter"
                      aria-label={`${devName} Twitter Profile`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
