const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/zarr/tumor"
    : "https://f004.backblazeb2.com/file/citeseq/tumor";

export const tumorConfig = {
  version: "1.0.15",
  name: "Immgen Tumor",
  description: "Tumor",
  datasets: [
    {
      uid: "a",
      name: "Immgen-CITE-Seq",
      files: [
        {
          fileType: "obsEmbedding.mudata.zarr",
          url: url,
          coordinationValues: {
            obsType: "cell",
            embeddingType: "UMAP_RNA",
          },
          options: {
            path: "mod/rna/obsm/X_umap",
          },
        },
        {
          fileType: "obsEmbedding.mudata.zarr",
          url: url,
          coordinationValues: {
            obsType: "cell",
            embeddingType: "UMAP_Prot",
          },
          options: {
            path: "mod/prot/obsm/X_umap",
          },
        },
        {
          fileType: "obsSets.mudata.zarr",
          url: url,
          coordinationValues: {
            obsType: "cell",
          },
          options: [
            {
              "name": "Leiden Clustering",
              "path": "obs/leiden"
            },
            {
              name: "Sample",
              path: "obs/sample",
            },
          
          ],
        },
        {
          fileType: "obsFeatureMatrix.mudata.zarr",
          url: url,
          coordinationValues: {
            obsType: "cell",
            featureType: "antibody",
            featureValueType: "capture",
          },
          options: {
            path: "mod/prot/X",
          },
        },
        {
          fileType: "obsFeatureMatrix.mudata.zarr",
          url: url,
          coordinationValues: {
            obsType: "cell",
            featureType: "gene",
            featureValueType: "expression",
          },
          options: {
            path: "mod/rna/X",
          },
        },
        
      ],
    },
  ],
  initStrategy: "auto",
  coordinationSpace: {
    embeddingType: {
      UMAP_RNA: "UMAP_RNA",
      UMAP_Protein: "UMAP_Prot",
    },
    embeddingObsSetLabelsVisible: {
      A: true,
    },
    obsType: {
      A: "cell",
    },
    featureType: {
      A: "gene",
      B: "antibody",
    },
    featureValueType: {
      A: "expression",
      B: "capture",
    },
    obsColorEncoding: {
      A: "cellSetSelection",
      B: "cellSetSelection",
    },
    featureSelection: {
      A: null,
      B: null,
    },
    featureValueColormapRange: {
      A: [0, 0.3],
      B: [0, 0.90],
    },
    gatingFeatureSelectionX: {
      A: 'CD4'
    },
    gatingFeatureSelectionY: {
      A: 'CD8A'
    }
  },
  layout: [
    {
      component: "obsSets",
      h: 4,
      w: 2,
      x: 6,
      y: 0,
      coordinationScopes: {
        obsType: "A",
      },
      uid: "A",
    },
    {
      component: "obsSetSizes",
      h: 4,
      w: 4,
      x: 8,
      y: 0,
      coordinationScopes: {
        obsType: "A",
      },
      uid: "B",
    },
    {
      component: "scatterplot",
      h: 4,
      w: 4,
      x: 0,
      y: 0,
      coordinationScopes: {
        embeddingType: "UMAP_RNA",
        obsType: "A",
        featureType: "A",
        featureValueType: "A",
        obsColorEncoding: "A",
        featureSelection: "A",
        embeddingObsSetLabelsVisible: "A",
        featureValueColormapRange: "A",
      },
      uid: "C",
    },
    {
      component: "scatterplot",
      h: 4,
      w: 4,
      x: 0,
      y: 4,
      coordinationScopes: {
        embeddingType: "UMAP_Protein",
        obsType: "A",
        featureType: "B",
        featureValueType: "B",
        obsColorEncoding: "B",
        featureSelection: "B",
        embeddingObsSetLabelsVisible: "A",
        featureValueColormapRange: "B",
      },
      uid: "D",
    },
    {
      component: "description",
      h: 4,
      w: 2,
      x: 10,
      y: 4,
      uid: "E",
    },
    {
      component: "gating",
      x: 6,
      y: 4,
      w: 4,
      h: 4,
      coordinationScopes: {
        featureValueType: "B",
        featureType: 'B',
        gatingFeatureSelectionX: "A",
        gatingFeatureSelectionY: "A",
      },
      uid: "gating",
    },
    {
      component: "featureList",
      h: 4,
      w: 2,
      x: 4,
      y: 0,
      coordinationScopes: {
        obsType: "A",
        featureType: "A",
        obsColorEncoding: "A",
        featureSelection: "A",
      },
      uid: "F",
    },
    {
      component: "featureList",
      h: 4,
      w: 2,
      x: 4,
      y: 4,
      coordinationScopes: {
        obsType: "A",
        featureType: "B",
        obsColorEncoding: "B",
        featureSelection: "B",
      },
      uid: "G",
    },
    {
      component: "obsSetFeatureValueDistribution",
      h: 3,
      w: 6,
      x: 0,
      y: 8,
      coordinationScopes: {
        obsType: "A",
        featureType: "B",
        featureValueType: "B",
        obsColorEncoding: "B",
        featureSelection: "B",
        featureValueColormapRange: "B",
      },
      uid: "H",
    },
    {
      component: "obsSetFeatureValueDistribution",
      h: 3,
      w: 6,
      x: 6,
      y: 8,
      coordinationScopes: {
        obsType: "A",
        featureType: "A",
        featureValueType: "A",
        obsColorEncoding: "A",
        featureSelection: "A",
        featureValueColormapRange: "A",
      },
      uid: "I",
    }
    
  ],
};
