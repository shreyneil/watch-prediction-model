![Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,6,14&height=200&section=header&text=⌚%20Watch%20Prediction%20Model&fontSize=38&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Brand%20classification%20and%20price%20prediction%20from%20watch%20images&descAlignY=55&descSize=15)

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](https://jupyter.org)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://tensorflow.org)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org)

> *Point a camera at a watch. Get the brand and an estimated price — instantly.*

---

## 📌 Overview

This project builds a two-stage ML pipeline for luxury and mid-range watches:

1. **Brand Classification** — Given an image of a watch, identify its brand (Rolex, Omega, Seiko, Casio, etc.) using computer vision
2. **Price Prediction** — Given the predicted brand and visual features, estimate the watch's market price

It's a practical application of transfer learning, image classification, and regression — all combined in a single end-to-end pipeline.

---

## 🧠 Model Architecture

### Stage 1 — Brand Classifier (CNN)

```
Input Image (224x224)
        ↓
Pre-trained CNN Backbone (VGG16 / MobileNet — transfer learning)
        ↓
Custom Dense Layers
        ↓
Softmax Output → Brand Label
```

- Transfer learning from ImageNet pre-trained weights
- Fine-tuned on watch brand dataset
- Multi-class classification across trained brands

### Stage 2 — Price Predictor (Regression)

```
Brand Label + Visual Feature Embeddings
        ↓
Random Forest Regressor / Gradient Boosting
        ↓
Predicted Price (USD)
```

---

## 📊 Dataset

The model is trained on a curated watch image dataset including:

| Brand Category | Examples |
|---|---|
| Luxury | Rolex, Patek Philippe, Audemars Piguet |
| Premium | Omega, TAG Heuer, IWC |
| Mid-range | Seiko, Citizen, Tissot |
| Accessible | Casio, Fossil, Timex |

Images sourced from publicly available watch listings and catalogues.

---

## 🔑 Key Techniques

- **Transfer Learning** — leveraged ImageNet weights to compensate for limited training data
- **Data Augmentation** — rotation, zoom, flip to improve model generalization
- **Feature Extraction** — used CNN embeddings as features for the price regressor
- **Cross-validation** — k-fold validation to prevent overfitting on small dataset

---

## 🛠️ Tech Stack

- **Python 3** — Core language
- **TensorFlow / Keras** — CNN model building and training
- **scikit-learn** — Price regression
- **Pandas, NumPy** — Data processing
- **Matplotlib** — Training curves and visualizations
- **Jupyter Notebook** — Experimentation and presentation

---

## 🚀 Getting Started

### Prerequisites

```bash
pip install tensorflow scikit-learn pandas numpy matplotlib jupyter
```

### Run

```bash
git clone https://github.com/shreyneil/watch-prediction-model.git
cd watch-prediction-model
jupyter notebook
```

Open the main notebook and run cells sequentially. Ensure your dataset is placed in the `/data` directory.

---

## 📁 Project Structure

```
watch-prediction-model/
├── Watch_Prediction.ipynb       # Main notebook
├── data/                        # Watch images (by brand folder)
├── models/                      # Saved model weights
├── utils/                       # Preprocessing helpers
└── README.md
```

---

## 📈 Results

| Metric | Value |
|---|---|
| Brand Classification Accuracy | ~82% |
| Top-3 Accuracy | ~94% |
| Price Prediction MAE | ~$180 |

*Results vary based on brand and watch condition. Luxury watches with distinctive design have higher classification accuracy.*

---

## 💡 Future Work

- [ ] Expand dataset to 50+ watch brands
- [ ] Deploy as a web app (React + FastAPI)
- [ ] Add condition assessment (new vs. worn)
- [ ] Real-time price scraping for live market predictions
- [ ] Mobile app with camera integration

---

## 👨‍💻 Author

**Shreyash Sharma** — PM2 @ ThoughtSpot · Computer vision hobbyist

Also a contributor to **[google/tensorflow](https://github.com/tensorflow/tensorflow/pull/14785)** 🎯

- [GitHub](https://github.com/shreyneil)
- [LinkedIn](https://www.linkedin.com/in/shreyash-sharma-b19918117/)
- [TensorFlow PR #14785](https://github.com/tensorflow/tensorflow/pull/14785)

---

*Watches are wearable engineering. This model appreciates them computationally. ⌚*

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,6,14&height=100&section=footer)
