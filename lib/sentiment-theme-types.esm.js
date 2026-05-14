/**
 * Sentiment theming tokens are organized as:
 * [sentiment-][usage][-prominence][-interact]
 * where "usage" is the only _required_ token.
 *
 * @see https://youtu.be/ylDed18OVdY?t=617
 */
const SentimentProminenceArray = ['', 'weak', 'medium', 'strong'];
const BrandSentimentArray = ['brand', 'brand-accent', 'inverse', 'base'];
const StatusSentimentArray = ['positive', 'info', 'warning', 'severe-warning', 'negative', 'dormant'];
const InteractionSentimentArray = ['control', 'interact'];
const CategoricalSentimentArray = ['accent-a', 'accent-b', 'accent-c', 'accent-d', 'accent-e', 'accent-f', 'accent-g', 'accent-h', 'accent-i', 'accent-j', 'accent-k'];
const SentimentArray = [...BrandSentimentArray, ...StatusSentimentArray, ...InteractionSentimentArray];
const AllSentimentArray = [...BrandSentimentArray, ...StatusSentimentArray, ...InteractionSentimentArray, ...CategoricalSentimentArray];
const SentimentGradientArray = ['inverse', 'brand'];
const SentimentUsageArray = ['bg', 'bg-gradient', 'text', 'text-in', 'icon', 'icon-in', 'border', 'border-in'];
const SentimentInteractArray = ['default', 'hover', 'focus', 'active', 'disabled'];

export { AllSentimentArray, BrandSentimentArray, CategoricalSentimentArray, InteractionSentimentArray, SentimentArray, SentimentGradientArray, SentimentInteractArray, SentimentProminenceArray, SentimentUsageArray, StatusSentimentArray };
