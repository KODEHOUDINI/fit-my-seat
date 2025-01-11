import { motion } from "motion/react";

const OfficeChairLoading = () => {
  return (
    <>
      <svg fill="none" width="200px" height="200px" viewBox="0 0 50 50">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeIn",
            repeat: Infinity,
          }}
          d="M19.960938 3C17.01837 3 14.751914 5.677091 15.021484 8.6777344L16.419922 24.193359C16.461792 24.657854 16.766758 24.995357 16.988281 25.380859C16.302966 25.717347 15.741597 26.26705 15.390625 26.939453C13.466251 26.64629 12 25.0099 12 23C12.8114 23 13.569403 22.666455 14.113281 22.113281C14.666455 21.569403 15 20.8114 15 20C15 19.454815 14.852797 18.939375 14.591797 18.494141C14.071576 17.604254 13.099366 17 12 17L10 17C9.1885995 17 8.4305967 17.333545 7.8867188 17.886719C7.333545 18.430597 7 19.1886 7 20C7 21.645455 8.3545455 23 10 23C10 25.974659 12.194084 28.45353 15.042969 28.916016C15.253492 30.641401 16.721299 32 18.5 32L24 32L24 35L23 35 A 1.0001 1.0001 0 0 0 22 36L22 40C20.349187 40 18.675836 40.637071 17.347656 41.677734C16.019477 42.718398 15 44.228458 15 46 A 1.0001 1.0001 0 1 0 17 46C17 45.010542 17.600461 44.02104 18.582031 43.251953C19.563602 42.482867 20.889813 42 22 42L23 42L24 42L24 46 A 1.0001 1.0001 0 1 0 26 46L26 42L27 42L28 42C29.110187 42 30.436398 42.482867 31.417969 43.251953C32.399539 44.02104 33 45.010542 33 46 A 1.0001 1.0001 0 1 0 35 46C35 44.228458 33.980523 42.718398 32.652344 41.677734C31.324164 40.637071 29.650813 40 28 40L28 36 A 1.0001 1.0001 0 0 0 27 35L26 35L26 32L31.5 32C33.278701 32 34.746508 30.641401 34.957031 28.916016C37.805916 28.45353 40 25.974659 40 23C40.8114 23 41.569403 22.666455 42.113281 22.113281C42.666455 21.569403 43 20.8114 43 20C43 18.354545 41.645455 17 40 17L38 17C37.1886 17 36.430597 17.333545 35.886719 17.886719C35.677779 18.087247 35.523164 18.301237 35.412109 18.486328 A 1.0001 1.0001 0 0 0 35.408203 18.494141C35.147197 18.939388 35 19.454815 35 20C35 21.645455 36.354545 23 38 23C38 25.0099 36.533749 26.64629 34.609375 26.939453C34.258403 26.26705 33.697034 25.717347 33.011719 25.380859C33.233164 24.995645 33.540141 24.657603 33.582031 24.193359L34.978516 8.6777344C35.248086 5.677091 32.981629 3 30.039062 3L19.960938 3 z M 19.960938 5L30.039062 5C31.766496 5 33.158758 6.5786902 32.986328 8.4980469L31.589844 24.013672C31.535959 24.610849 31.098206 25 30.613281 25L19.386719 25C18.901794 25 18.464172 24.612852 18.410156 24.013672L17.013672 8.4980469C16.841242 6.5786902 18.233504 5 19.960938 5 z M 10 19L12 19C12.37964 19 12.687058 19.195115 12.867188 19.503906 A 1.0001 1.0001 0 0 0 12.867188 19.505859C12.946187 19.640578 13 19.825185 13 20C13 20.283333 12.893198 20.517925 12.712891 20.693359 A 1.0001 1.0001 0 0 0 12.693359 20.712891C12.517923 20.8932 12.283333 21 12 21L11.167969 21 A 1.0001 1.0001 0 0 0 10.841797 21L10 21C9.4454545 21 9 20.554545 9 20C9 19.716667 9.1068019 19.482075 9.2871094 19.306641 A 1.0001 1.0001 0 0 0 9.3066406 19.287109C9.4820751 19.1068 9.7166667 19 10 19 z M 38 19L40 19C40.554545 19 41 19.445455 41 20C41 20.283333 40.893198 20.517925 40.712891 20.693359 A 1.0001 1.0001 0 0 0 40.693359 20.712891C40.517923 20.8932 40.283333 21 40 21L39.167969 21 A 1.0001 1.0001 0 0 0 38.841797 21L38 21C37.445455 21 37 20.554545 37 20C37 19.825185 37.05381 19.640625 37.132812 19.505859C37.191853 19.409059 37.235977 19.353389 37.267578 19.324219 A 1.0001 1.0001 0 0 0 37.306641 19.287109C37.482078 19.106802 37.716667 19 38 19 z M 18.5 27L19.386719 27L30.613281 27L31.5 27C32.340812 27 33 27.659188 33 28.5C33 29.340812 32.340812 30 31.5 30L25.167969 30 A 1.0001 1.0001 0 0 0 24.841797 30L18.5 30C17.659188 30 17 29.340812 17 28.5C17 27.659188 17.659188 27 18.5 27 z M 24 37L24.832031 37 A 1.0001 1.0001 0 0 0 25.158203 37L26 37L26 40L25.167969 40 A 1.0001 1.0001 0 0 0 24.841797 40L24 40L24 37 z"
          stroke={"#ffffff"}
          strokeWidth={0.5}
          strokeLinecap={"round"}
        />
      </svg>
    </>
  );
};

export default OfficeChairLoading;
