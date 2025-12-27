import type { AstroIntegration } from 'astro';

const BUILD_METRICS_THRESHOLD_WARNING = 10000;
const BUILD_METRICS_THRESHOLD_FAIL = 20000;

export default function buildMetrics(): AstroIntegration {
  return {
    name: 'surf-bits-build-metrics',
    hooks: {
      'astro:build:start': async ({ logger }) => {
        logger.info('Starting build metrics check...');
      },
      'astro:build:done': async ({ dir, pages, logger }) => {
        const pageCount = pages.length;
        logger.info(`Build completed. Total pages generated: ${pageCount}`);

        const warningThreshold = Number(process.env.MAX_PAGES_WARNING) || BUILD_METRICS_THRESHOLD_WARNING;
        const failThreshold = Number(process.env.MAX_PAGES_FAIL) || BUILD_METRICS_THRESHOLD_FAIL;

        if (pageCount > failThreshold) {
            logger.error(`BUILD FAILED: Total pages (${pageCount}) exceeded the limit of ${failThreshold}.`);
            throw new Error(`Build failed: Too many pages (${pageCount} > ${failThreshold}). Scalability guardrail triggered.`);
        } else if (pageCount > warningThreshold) {
            logger.warn(`WARNING: Total pages (${pageCount}) is high (threshold: ${warningThreshold}). Consider optimization.`);
        } else {
            logger.info(`Page count check passed (${pageCount} < ${warningThreshold}).`);
        }
      },
    },
  };
}
